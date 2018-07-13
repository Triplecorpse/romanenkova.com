import express = require('express');

const router = express.Router();

import article from './article';
import getInterface from './interface';
import {NextFunction, Response} from "express-serve-static-core";
import log from './../../services/log-service'
import IRequest from "../../interfaces/iRequest";

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

router.get('/language', (req: IRequest, res: Response) => {
    res.json({lang: req.language});
});

export default router;
