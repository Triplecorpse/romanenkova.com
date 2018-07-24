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

router.post('/upload', upload.array("uploads[]", 12), (req: IRequest, res: Response, next: NextFunction) => {
    const cloudinaryQ = req.files.map((file: IMulterFile) => {
        return fileStorage.upload(file.path);
    });

    console.log(process.env.CLOUDINARY_URL);

    Promise.all(cloudinaryQ)
        .then(data => {
            console.log(data);
            res.send(data);
        })
        .catch(err => {
            console.log(err);
        });
});

router.get('/language', (req: IRequest, res: Response) => {
    res.json({lang: req.language});
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

export default router;
