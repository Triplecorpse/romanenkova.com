import express = require('express');
import apiv2 from './apiv2/index';
import {Request, Response} from 'express-serve-static-core';
import IRequest from '../interfaces/iRequest';
import {NextFunction} from 'express';
import {languages} from '../const/const';
import {join} from 'path';
import {TLanguage} from '../../_interface/types';
import * as path from 'path';

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
    const isQa = req.hostname.includes('staging') || req.hostname.includes('qa') || req.hostname.includes('localhost');

    if (isQa && !req.cookies.allowQa && !req.query.secret) {
        res.sendFile(path.join(__dirname + '../../../front/assets/run-staging.html'));

        return;
    }

    req.language = req.query.lang || req.cookies.lang || (languageObj ? languageObj.language : 'en');
    req.isLocalhost = req.hostname.includes('localhost');



    next();
});

router.get('/qa', (req: IRequest, res: Response) => {
    if (req.query.secret === 'allowQa') {
        res.cookie('allowQa', 1).send();
    } else {
        res.sendStatus(403);
    }
});

router.get('/:lang?/:page?/:entity?', (req: IRequest, res: Response, next: NextFunction) => {
    // continue routing if language is not acceptable
    if (req.params.lang && languages.indexOf(req.params.lang as TLanguage) === -1 && req.params.lang !== '404') {
        return next();
    }

    req.language = req.params.lang as TLanguage || req.language;

    const DIST_FOLDER = join(process.cwd(), 'front');

    res.render(join(DIST_FOLDER, 'index.html'), {req});
});
router.get('/uptime', (req: Request, res: Response, next: NextFunction) => {
    res.send(builtOn.toString());
    next();
});

router.use(express.static('./front'));
router.use(express.static('./static'));

router.use('/api/v2', apiv2);

// router.get('*', (req: IRequest, res: Response) => {
//   res.status(404).redirect(`${req.baseUrl}/404`);
// });

export default router;
