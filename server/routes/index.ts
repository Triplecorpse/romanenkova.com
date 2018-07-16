import express = require('express');
const router = express.Router();

import api from './api/index';
import {readFile} from '../services/file-service';
import log from './../services/log-service';
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
router.get(['/admin', '/admin/*'], (req: IRequest, res: Response, next: NextFunction) => {
    readFile('./admin/index.html')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
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

router.use(express.static('./front'));
router.use(express.static('./admin'));
router.use('/api', api);

// todo: decide either to do page 404 or redirect to /:lang
router.get('*', (req: Request, res: Response) => {
    res.sendStatus(404);
});

export default router;
