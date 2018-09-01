import express = require('express');

const router = express.Router();

import article from './article';
import getInterface from './interface';
import {NextFunction, Request, Response} from "express-serve-static-core";
import log from './../../services/log-service';
import * as fileStorage from './../../services/file-storage/file-storage-service';
import IRequest from "../../interfaces/iRequest";
import {getToken, validate} from "../../services/security-services/auth-service";
import bodyParser = require("body-parser");
import {IMulterFile} from "../../interfaces/iMulterFile";
import {ICloudinaryResponse} from "../../interfaces/iCloudinaryResponse";
import {errorMessages, languageObjs, successMessages} from "../../const/const";
import {IAppointment} from "../../interfaces/iAppointment";
import {validateRecaptcha} from "../../services/security-services/recaptcha-validator";
import {IRecaptchaResponse} from "../../interfaces/iRecaptchaResponse";
import {TLanguage} from "../../types/types";

const multer = require('multer');

router.use(bodyParser.json());
router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
    log.info('Request registered from', req.hostname, req.method, req.baseUrl);
    if (/romanenkova.com|localhost|romanenkova.herokuapp.com/i.test(req.hostname)) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        next();
    } else {
        res.status(403).json({m: 'Request are allowed from domain romanenkova.com only'});
    }
});
router.use('/article', article);
router.use('/interface', getInterface);

const storage = multer.diskStorage({
    // destination
    destination: function (req: any, file: any, cb: any) {
        cb(null, './uploads/')
    },
    filename: function (req: any, file: any, cb: any) {
        cb(null, file.originalname);
    }
});
const upload = multer({storage: storage});

router.post('/upload', upload.array("upload"), (req: IRequest, res: Response, next: NextFunction) => {
    const cloudinaryQ: Array<Promise<ICloudinaryResponse>> =
        req.files.map((file: IMulterFile): Promise<ICloudinaryResponse> => fileStorage.upload(file.path));

    Promise.all(cloudinaryQ)
        .then((data: Array<ICloudinaryResponse>) => {
            res.send(data.map((s: ICloudinaryResponse): {url: string} => ({url: s.url})));
        })
        .catch((err: any) => {
            res.status(500).send(err);
        });
});

router.get('/language', (req: IRequest, res: Response) => {
    res.json({lang: req.language, availableLangs: languageObjs, locale: 'n/a'});
});

router.post('/login', (req: Request, res: Response) => {
    getToken(req.body)
        .then((data: string) => {
            res.json({success: true, message: data});
        })
        .catch((err: Error) => {
            res.status(401).send({success: false, message: err.message});
        });
});

router.post('/uservalid', (req: Request, res: Response) => {
    validate(req.body.token)
        .then((data: string | object) => {
            res.json({success: true, message: ''});
        })
        .catch((err: Error) => {
            res.status(401).send({success: false, message: err.message});
        });
});

router.post('/appointment', (req: IRequest, res: Response) => {
    const appointment: IAppointment = req.body as IAppointment;
    const language: TLanguage = req.query.language || 'en';

    if (!appointment.name && !(appointment.email || appointment.phone || appointment.message)) {
        return res.status(400).json({name: errorMessages.appointment.name[language], contact: errorMessages.appointment.contact[language], lang: language})
    }

    if (!appointment.name) {
        return res.status(400).json({name: errorMessages.appointment.name[language], lang: language})
    }

    if (!(appointment.email || appointment.phone || appointment.message)) {
        return res.status(400).json({contact: errorMessages.appointment.contact[language], lang: language});
    }

    validateRecaptcha(appointment.recaptcha)
        .then((data: IRecaptchaResponse) => {
            res.status(200).json({data, lang: language, m: successMessages.appointment.body[language], h: successMessages.appointment.header[language]});
        })
        .catch((err: any) => {
            res.status(400).json({m: errorMessages.captcha[language], err, lang: language});
        });
});

export default router;
