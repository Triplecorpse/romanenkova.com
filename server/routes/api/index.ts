import express = require('express');

import article from './article';
import service from './service';
import getInterface from './interface';
import user from './user';
import database from './database';
import review from './reviews';
import diploma from './dipoma';
import {NextFunction, Request, Response} from "express-serve-static-core";
import log from './../../services/log-service';
import * as fileStorage from './../../services/file-storage/file-storage-service';
import IRequest from "../../interfaces/iRequest";
import {getToken, validateToken} from "../../services/security-services/auth-service";
import bodyParser = require("body-parser");
import {IMulterFile} from "../../interfaces/iMulterFile";
import {ICloudinaryResponse} from "../../interfaces/iCloudinaryResponse";
import {errorMessages, langObjects, successMessages} from "../../const/const";
import {IAppointment} from "../../interfaces/iAppointment";
import {validateRecaptcha} from "../../services/security-services/recaptcha-validator";
import {TLanguage} from "../../types/types";
import {sendEmail} from "../../services/user-services/email-service";
import {Error} from "mongoose";
import {databaseConstQ} from "../../const/databaseConst";
import {ISchedule, Schedule} from "../../models/schedule";
import {IUser} from "../../models/user";
import {Page} from "../../models/page";
import {readDiploma} from "../../services/db-middleware/diploma";
import {readService} from "../../services/db-middleware/service";
import {readInterface} from "../../services/db-middleware/interface";

const multer = require('multer');
const router = express.Router();

router.use(bodyParser.json());
router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
  if (/romanenkova.com|localhost|romanenkova.herokuapp.com|romanenkova-staging.herokuapp.com/i.test(req.hostname)) {
    res.header('Access-Control-Allow-Origin', req.get('origin') || '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

    next();
  } else {
    res.status(403).json({m: `Request from domain romanenkova.com only`});
  }
});
router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
  let token = req.query.token;

  if (req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'put' || req.method.toLowerCase() === 'options') {
    token = req.body.token;
  }

  if (token) {
    validateToken(token)
      .then(() => {
        req.isTokenValid = true;
        next();
      });
  } else {
    next();
  }
});
router.use('/article', article);
router.use('/service', service);
router.use('/interface', getInterface);
router.use('/user', user);
router.use('/database', database);
router.use('/review', review);
router.use('/diploma', diploma);

const storage = multer.diskStorage({
  destination: function (req: any, file: any, cb: any) {
    cb(null, './uploads/')
  },
  filename: function (req: any, file: any, cb: any) {
    cb(null, file.originalname);
  }
});
const upload = multer({storage: storage});

router.post('/upload', upload.array("upload"), (req: IRequest, res: Response, next: NextFunction) => {
  if (!req.isTokenValid) {
    res.sendStatus(401);
  }

  const cloudinaryQ: Array<Promise<ICloudinaryResponse>> =
    req.files.map((file: IMulterFile): Promise<ICloudinaryResponse> => fileStorage.uploadImage(file.path));

  Promise.all(cloudinaryQ)
    .then((data: Array<ICloudinaryResponse>) => {
      res.send(data.map((s: ICloudinaryResponse): { url: string } => ({url: s.secure_url})));
    })
    .catch((err: any) => {
      res.status(500).send(err);
    });
});

router.get('/images', (req: IRequest, res: Response) => {
  // if (!req.isTokenValid) {
  //   res.sendStatus(401);
  // }

  fileStorage.getImageList()
    .then((data: any) => {
      return res.json(data);
    })
    .catch((err: any) => {
      throw res.status(500).json(err);
    })
});

router.get('/usedImages', (req: IRequest, res: Response) => {
  const diploma$ = readDiploma();
  const services$ = readService('en');
  const about$ = readInterface('about', 'en');

  Promise.all([diploma$, services$, about$])
    .then((response: any) => {
      return res.json(response);
    })
    .catch((err: any) => {
      throw res.status(500).json(err);
    })
});

router.get('/language', (req: IRequest, res: Response) => {
  res.json({
    lang: req.language,
    availableLangs: langObjects
  });
});

router.post('/login', (req: Request, res: Response) => {
  getToken(req.body)
    .then((data: { token: string, user: IUser }) => {
      res.json({success: true, message: data.token, user: data.user});
    })
    .catch((err: Error) => {
      res.status(401).send({success: false, message: err.message});
    });
});

router.post('/uservalid', (req: Request, res: Response) => {
  validateToken(req.body.token)
    .then((user: IUser) => {
      res.json({success: true, message: '', user});
    })
    .catch((err: Error) => {
      res.status(401).send({success: false, message: err.message});
    });
});

router.post('/appointment', (req: IRequest, res: Response) => {
  const appointment: IAppointment = req.body as IAppointment;
  const language: TLanguage = req.query.language || 'en';

  if (!appointment.name || !appointment.email) {
    return res.status(400).json({
      name: errorMessages.appointment.name[language],
      email: errorMessages.appointment.email[language],
      lang: language
    })
  }

  if (!appointment.name) {
    return res.status(400).json({name: errorMessages.appointment.name[language], lang: language})
  }

  if (!(appointment.email || appointment.phone || appointment.message)) {
    return res.status(400).json({contact: errorMessages.appointment.contact[language], lang: language});
  }

  validateRecaptcha(appointment.recaptcha)
    .catch((err: any) => {
      res.status(400).json({m: errorMessages.captcha[language], err: err.message, lang: language});
      throw new Error(errorMessages.captcha[language]);
    })
    .then(() => {
      return databaseConstQ.email;
    })
    .then((notificationEmail: string) => {
      return sendEmail({
        to: notificationEmail,
        from: `${appointment.name} <info@romanenkova.com>`,
        subject: 'New Appointment From Site',
        text: `
                  FROM: ${appointment.name},
                  CONTACTS: ${appointment.phone}, ${appointment.email},
                  SUGGESTED DATE: ${appointment.date} ${appointment.time},
                  SUGGESTED TIMEZONE: ${appointment.timezone},
                  SERVICE: ${appointment.service}
                  -----------------------------------
                  MESSAGE: ${appointment.message}
                `
      });
    })
    .catch((err: any) => {
      res.status(400).json({m: errorMessages.email[language], err: err.message, lang: language});
      throw new Error(errorMessages.email[language]);
    })
    .then((data) => {
      res.status(200).json({
        data,
        lang: language,
        m: successMessages.appointment.body[language],
        h: successMessages.appointment.header[language]
      });
    })
});

router.get('/schedule', (req: Request, res: Response) => {
  Schedule.find()
    .then((schedule: Array<any>) => {
      res.json(schedule.map((item: any): ISchedule => ({
        availableHours: item.availableHours,
        weekday: item.weekday,
        date: item.date
      })));
    })
});

export default router;
