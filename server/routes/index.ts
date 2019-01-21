import express = require('express');
import api from './api/index';
import {readFile} from '../services/file-service';
import log from './../services/log-service';
import {Request, Response} from "express-serve-static-core";
import IRequest from "../interfaces/iRequest";
import {NextFunction} from "express";
import {languages} from "../const/const";
import {join} from "path";

const parseAcceptLanguage = require('parse-accept-language');
const builtOn = new Date();
const router = express.Router();

router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
    const acceptedLangs = parseAcceptLanguage(req);
    const languageObj = acceptedLangs.find((lang: any) =>
        languages.find((acceptable: string) => lang.language === acceptable)
    );

    if (req.url.indexOf('https') > -1) {

    }

    req.language = req.query.lang || (languageObj ? languageObj.language : 'en');
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
    let name: string;
    // continue routing if language is not acceptable
    if (req.params.lang && languages.indexOf(req.params.lang) === -1 && req.params.lang !== '404') {
        return next();
    }

    req.language = req.params.lang || req.language;

    if (!req.params.lang) {
        return res.redirect(`${req.baseUrl}/${req.language}`);
    }

    const DIST_FOLDER = join(process.cwd(), 'front');

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

// todo: decide either to do page 404 or redirect to /:lang
router.get('*', (req: IRequest, res: Response) => {
  res.status(404).redirect(`${req.baseUrl}/404`);
});

export default router;
