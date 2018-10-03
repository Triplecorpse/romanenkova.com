import express = require('express');

const router = express.Router();

import api from './api/index';
import {readFile} from '../services/file-service';
import log from './../services/log-service';
import {Request, Response} from "express-serve-static-core";
import IRequest from "../interfaces/iRequest";
import {NextFunction} from "express";
import {languages} from "../const/const";
import {IPage} from "../models/page";
import {read as readInterface} from '../services/db-middleware/interface';
import {TLanguage} from "../types/types";

const parseAcceptLanguage = require('parse-accept-language');

router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
    const parsed = parseAcceptLanguage(req);

    const languageObj = parsed.find((lang: any) =>
        languages.find((acceptable: string) =>
            lang.language === acceptable
        )
    );

    req.language = languageObj ? languageObj.language : 'en';
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
            res.status(500).send(err);
        })
});
router.get('/:lang?/:page?/:entity?', (req: IRequest, res: Response, next: NextFunction) => {
    let name: string;

    if (req.params.lang && languages.indexOf(req.params.lang) === -1) {
        return next();
    }

    req.language = req.params.lang || req.language;

    readInterface('nav', req.language as TLanguage)
        .then((page: Array<IPage>) => {
            const pageData = page[0].pageData;
            name = pageData.find((pageEntity: any) => pageEntity.anchor === 'name').name.join(' ');
            return readFile('./front/index.html');
        })
        .then(data => {
            data = data.replace('@lang', req.language as TLanguage).replace('@name', name);
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

router.use(express.static('./front'));
router.use(express.static('./admin'));
router.use('/admin', express.static('admin'));
router.use('/api', api);

// todo: decide either to do page 404 or redirect to /:lang
router.get('*', (req: Request, res: Response) => {
    res.sendStatus(404);
});

export default router;
