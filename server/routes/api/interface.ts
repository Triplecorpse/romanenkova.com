import express = require('express');

const router = express.Router();

import {read, update, updatePageSubmitObj} from '../../services/db-middleware/interface';
import {iPage} from "../../models/page";

import {Request, Response} from "express-serve-static-core";
import {validate} from "../../services/security-services/auth-service";

import log from './../../services/log-service';
import {stripString as stripHtml, removeTagsFromObject} from "../../services/security-services/strip-html";
import {IPageSubmit} from "../../interfaces/iPageSubmit";

router
    .route('/:id?')
    .put((req: Request, res: Response) => {
        validate(req.body.token)
            .then((): Promise<IPageSubmit> => {
                const page = req.body as IPageSubmit;

                page.media = page.media || [];

                return removeTagsFromObject(page);
            })
            .catch((err: Error) => {
                log.info('Seems auth validation failed');

                res.status(401).json({m: err.message});
                throw err;
            })
            .then((data: IPageSubmit) => {
                return updatePageSubmitObj(data);
            })
            .then((data: Array<iPage>) => {
                res.json(data);
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
