import express = require('express');
const router = express.Router();
import api from './api/index';
import {readFile} from '../services/file-service';
import log from './../services/log-service';
import {getToken} from '../services/security-services/auth-service';
import bodyParser = require('body-parser');
import {Request, Response} from "express-serve-static-core";

router.use(bodyParser.json());
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

router.get('/', (req: Request, res: Response) => {
    readFile('./front/index.html')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

export default router;
