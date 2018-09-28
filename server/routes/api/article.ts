import express = require('express');
import {validate} from "../../services/security-services/auth-service";
import {getArticles} from "../../services/user-services/article-service";
import {IArticle} from "../../models/article";
import IRequest from "../../interfaces/iRequest";

const router = express.Router();
import {Response} from "express-serve-static-core";

router
    .route('/:id?')
    .post(function (req, res) {
        res.status(501).json({v: '0.1', b: req.body, m: req.method});
    })
    .put(function (req, res) {
        res.status(501).json({v: '0.1', r: req.params, b: req.body, m: req.method});
    })
    .get(function (req: IRequest, res: Response) {
        const isAdmin: boolean = Boolean(req.query.token);

        if (!isAdmin) {
            return getArticles({isDeleted: false, isPublished: true, language: req.language})
                .then((articles: Array<IArticle>) => {
                    res.json(articles);
                })
                .catch((err: Error) => {
                    res.json(err);
                });
        }

        validate(req.query.token)
            .then((data: string | object) => {
                getArticles()
                    .then((articles: Array<IArticle>) => {
                        res.json(articles);
                    })
                    .catch((err: Error) => {
                        res.json(err);
                    });
            })
            .catch((err: any) => {
                res.status(401).json(err);
            });
    })
    .delete(function (req, res) {
        res.status(501).json({v: '0.1', r: req.params, m: req.method});
    });

export default router;
