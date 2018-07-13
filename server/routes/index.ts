import express = require('express');

const router = express.Router();
import api from './api/index';
import {readFile} from '../services/file-service';
import log from './../services/log-service';
import {getToken} from '../services/security-services/auth-service';
import bodyParser = require('body-parser');
import {Request, Response} from "express-serve-static-core";
import IRequest from "../interfaces/iRequest";
import {NextFunction} from "express";

const parseAcceptLanguage = require('parse-accept-language');

router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
    const parsed = parseAcceptLanguage(req);
    const acceptables: Array<string> = ['uk', 'ru', 'en'];

    const languageObj = parsed.find((lang: any) =>
        acceptables.find((acceptable: string) =>
            lang.language === acceptable
        )
    );

    req.language = languageObj ? languageObj.language : 'en';
    next();
});
router.get('/:lang?/:page?/:entity?', (req: IRequest, res: Response, next: NextFunction) => {
    const allowedLangs = ['en', 'ru', 'uk'];

    if (req.params.lang && allowedLangs.indexOf(req.params.lang) === -1) {
        return next();
    }

    // todo: make checks for params
    const decidedLang = req.params.lang || req.language;
    readFile('./front/index.html')
        .then(data => {
            data = data.replace('@lang', decidedLang);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

router.use(bodyParser.json());
router.use(express.static('./front'));
router.use('/api', api);

router.post('/login', (req: Request, res: Response) => {
    getToken(req.body)
        .then(data => {
            res.json({token: data, success: true});
        })
        .catch(err => {
            res.status(401).send({success: false, message: 'Invalid credentials'});
        });
});

// todo: decide either to do page 404 or redirect to /:lang
router.get('*', (req: Request, res: Response) => {
    res.sendStatus(404);
});

export default router;
