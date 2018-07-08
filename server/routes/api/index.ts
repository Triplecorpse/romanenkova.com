import express from 'express';
const router = express.Router();

import article from './article';
import getInterface from './interface';
import {NextFunction, Request, Response} from "express-serve-static-core";
import log from './../../services/log-service'
import IRequest from "../../interfaces/iRequest";
const parseAcceptLanguage = require('parse-accept-language');

router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
    log.info('Request registered from', req.hostname, req.method, req.baseUrl);
    if (req.hostname.includes('romanenkova.com') || req.hostname.includes('localhost')) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        const pal = parseAcceptLanguage(req);
        const acceptables: Array<string> = ['uk', 'ru', 'en'];

        const languageObj = pal.find((lang: any) =>
            acceptables.find((acceptable: string) =>
                lang.value === acceptable
            )
        );

        req.language = languageObj.value;
        next();
    } else {
        res.status(403).json({m: 'Request are allowed from domain romanenkova.com only'});
    }
});
router.use('/article', article);
router.use('/interface', getInterface);

router.get('/language', (req: IRequest, res: Response) => {
    res.json({lang: req.language});
});

export default router;
