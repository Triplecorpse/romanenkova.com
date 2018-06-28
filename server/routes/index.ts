import express from 'express';
const router = express.Router();

import {readFile} from '../services/file-service';
import log from './../services/log-service';
import {getToken} from '../services/security-services/auth-service';
import bodyParser from 'body-parser';
router.use(bodyParser.json());

router.use('/api', require('./api'));

router.post('/login', (req, res) => {
    getToken(req.body)
        .then(data => {
            res.json({token: data, success: true});
        })
        .catch(err => {
            res.status(401).send(err);
        });
});

router.get('/', (req, res) => {
    readFile('./front/dist/index.html')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

module.exports = router;
