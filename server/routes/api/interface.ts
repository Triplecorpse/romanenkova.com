import express = require('express');

const router = express.Router();

import {read, update} from '../../services/db-middleware/interface';
import {iPage} from "../../models/page";

import {Request, Response} from "express-serve-static-core";
import {validate} from "../../services/security-services/auth-service";

import log from './../../services/log-service';

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

        if (!language || !id) {
            return res.status(400).json({m: 'Required parameters are missing.', language, id});
        }

        read(id, language)
            .then((pages: Array<iPage>) => {
                const readyPages = pages.map((page: iPage) => {
                    try {
                        page.body = JSON.parse(page.body as string);
                    } catch (e) {
                    }

                    return page;
                });

                if (readyPages.length === 1) {
                    return res.json(readyPages[0]);
                }

                res.json(readyPages);
            })
            .catch((err: Error) => {
                res.status(500).json({m: err.message});
            });
    });

export default router;
