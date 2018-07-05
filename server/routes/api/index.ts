import express from 'express';
const router = express.Router();

import article from './article';
import getInterface from './interface';
import {NextFunction, Request, Response} from "express-serve-static-core";
import log from './../../services/log-service'

router.use('*', (req: Request, res: Response, next: NextFunction) => {
    log.info('Request registered from', req.hostname, req.method, req.baseUrl);
    if (req.hostname.includes('romanenkova.com') || req.hostname.includes('localhost')) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    } else {
        res.status(403).json({m: 'Request are allowed from domain romanenkova.com only'});
    }
});
router.use('/article', article);
router.use('/interface', getInterface);

export default router;
