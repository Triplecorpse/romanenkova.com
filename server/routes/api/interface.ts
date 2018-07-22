import express = require('express');

const router = express.Router();

import {read, update} from '../../services/db-middleware/interface';
import {iPage} from "../../models/page";

import {Request, Response} from "express-serve-static-core";
import {validate} from "../../services/security-services/auth-service";

import log from './../../services/log-service';
import {stripHtml} from "../../services/security-services/strip-html";

router
    .route('/:id?')
    .put((req: Request, res: Response) => {
        validate(req.body.token)
            .then((data: any): any => {
                const language = req.query.lang;
                const id = req.query.id;

                if (!language || !id) {
                    return res.status(400).json({m: 'Required parameters are missing.'});
                }

                return Promise.all([
                    stripHtml(req.body.body), stripHtml(req.body.header)
                ]);
            })
            .catch((err: Error) => {
                res.status(401).json({m: err.message});
                throw err;
            })
            .then((data: Array<string>) => {
                const language = req.query.lang;
                const id = req.query.id;

                return update(id, language,{header: data[1], pageData: data[0], language, entityId: id});
            })
            .then((data: iPage) => {
                res.json({header: data.header, pageData: data.pageData});
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
                if (pages.length === 1) {
                    return res.json(pages[0]);
                }

                res.json(pages);
            })
            .catch((err: Error) => {
                res.status(500).json({m: err.message});
            });
    });

export default router;
