import express = require('express');
import api from './api/index';
import apiv2 from './apiv2/index';
import {readFile} from '../services/file-service';
import log from './../services/log-service';
import {Request, Response} from "express-serve-static-core";
import IRequest from "../interfaces/iRequest";
import {NextFunction} from "express";
import {languages} from "../const/const";
import {join} from "path";

const cookieParser = require('cookie-parser');
const parseAcceptLanguage = require('parse-accept-language');
const builtOn = new Date();
const router = express.Router();

router.use(cookieParser('secretthings'));

router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
    const acceptedLangs = parseAcceptLanguage(req);
    const languageObj = acceptedLangs.find((lang: any) =>
        languages.find((acceptable: string) => lang.language === acceptable)
    );

    req.language = req.query.lang || req.cookies.lang || (languageObj ? languageObj.language : 'en');
    next();
});

router.get(['/admin', '/admin/*'], (req: IRequest, res: Response, next: NextFunction) => {
    if (req.path.includes('assets')) {
        return next();
    }

    readFile('./admin/index.html')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err.message);
        })
});
router.get('/:lang?/:page?/:entity?', (req: IRequest, res: Response, next: NextFunction) => {
    // continue routing if language is not acceptable
    if (req.params.lang && languages.indexOf(req.params.lang) === -1 && req.params.lang !== '404') {
        return next();
    }

    req.language = req.params.lang || req.language;

    const DIST_FOLDER = join(process.cwd(), 'front');

    res.cookie('lang', req.language, { maxAge: 900000, httpOnly: false });
    res.render(join(DIST_FOLDER, 'index.html'), {req});
});
router.get('/uptime', (req: Request, res: Response, next: NextFunction) => {
    res.send(builtOn.toString());
    next();
});

router.use(express.static('./front'));
router.use(express.static('./admin'));
router.use(express.static('./static'));

router.use('/admin', express.static('admin'));
router.use('/api', api);
router.use('/api/v2', apiv2);

router.get('*', (req: IRequest, res: Response) => {
  res.status(404).redirect(`${req.baseUrl}/404`);
});

export default router;
