import express = require('express');
import api from './api/index';
import {readFile, replaceTemplateVariables} from '../services/file-service';
import log from './../services/log-service';
import {Request, Response} from "express-serve-static-core";
import IRequest from "../interfaces/iRequest";
import {NextFunction} from "express";
import {langObjects, languages, templateVars} from "../const/const";
import {IPage} from "../models/page";
import {readInterface as readInterface} from '../services/db-middleware/interface';
import {TLanguage} from "../types/types";
import * as util from "util";
import {ILanguageObject} from "../interfaces/iLanguageObject";
import {enableProdMode} from "@angular/core";
import {join} from "path";
import {readFileSync} from "fs";

const parseAcceptLanguage = require('parse-accept-language');
const builtOn = new Date();
const router = express.Router();



router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
    const acceptedLangs = parseAcceptLanguage(req);
    const languageObj = acceptedLangs.find((lang: any) =>
        languages.find((acceptable: string) => lang.language === acceptable)
    );

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
    if (req.params.lang && languages.indexOf(req.params.lang) === -1) {
        return next();
    }

    req.language = req.params.lang || req.language;

    if (!req.params.lang) {
        return res.redirect(`${req.baseUrl}/${req.language}`);
    }

    const DIST_FOLDER = join(process.cwd(), 'front');

    // const template = readFileSync(join(DIST_FOLDER, 'index.html')).toString();

    res.render(join(DIST_FOLDER, 'index.html'), {req})

    // readInterface('nav', req.language as TLanguage)
    //     .then((page: Array<IPage>) => {
    //         const pageData = page[0].pageData;
    //         name = pageData.find((pageEntity: any) => pageEntity.anchor === 'name').name.join(' ');
    //         return readFile('./front/index.html');
    //     })
    //     .then(htmlTemplate => {
    //         const langObject = langObjects.find((langObj: ILanguageObject) => langObj.codeISO2 === req.language);
    //         const configObj = {
    //             name,
    //             lang: req.language,
    //             locale: langObject ? langObject.locale : '',
    //             description: templateVars[req.language as TLanguage].description
    //         };
    //         return replaceTemplateVariables(htmlTemplate, configObj);
    //     })
    //     .then((htmlPage) => {
    //         res.send(htmlPage);
    //     })
    //     .catch(err => {
    //         res.status(500).send(err.message);
    //     })
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
    res.status(404).send('this page is unavailable. <a href="/">Click here to go back</a>');
});

export default router;
