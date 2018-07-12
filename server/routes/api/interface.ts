import express = require('express');

const router = express.Router();

import {read, update} from '../../services/db-middleware/interface';
import {iPage} from "../../models/page";

import {Request, Response} from "express-serve-static-core";
import {validate} from "../../services/security-services/auth-service";

router
    .route('/:id?')
    .put((req: Request, res: Response) => {
        validate(req.body.token)
            .then((data: any): any => {
                const language = req.query.lang;
                const id = req.query.id;

                console.log(data);

                if (!language || !id) {
                    return res.status(400).json({m: 'Required parameters are missing.'});
                }

                return update(id, language,{header: req.body.header, body: req.body.body});
            })
            .catch((err: Error) => {
                res.status(401).json({m: err.message});
                throw err;
            })
            .then((data: iPage) => {
                console.log(data);
                res.json({header: data.header, body: data.body});
            })
            .catch((err: Error) => {
                res.status(500).json({m: err.message});
            });
    })
    .get((req: Request, res: Response) => {
        const language = req.query.lang;
        const id = req.query.id;

        if (!language || !id || (language !== 'en' && language !== 'ru' && language !== 'uk')) {
            return res.status(400).json({m: 'Required parameters are missing.', language, id});
        }

        read(id, language)
            .then((data: iPage) => {
                let returnBody;
                if (id === 'nav' || id === 'contacts') {
                    returnBody = JSON.parse(data.body as string);
                } else {
                    returnBody = {header: data.header, body: data.body};
                }
                res.json(returnBody);
            })
            .catch((err: Error) => {
                res.status(500).json({m: err.message});
            });
    });

export default router;
