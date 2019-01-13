import express = require('express');
import IRequest from "../../interfaces/iRequest";
import {Response} from "express-serve-static-core";
import {getReviews, publishReview, removeReview, setReview, unpublishReview} from "../../services/db-middleware/review";
import {validateRecaptcha} from "../../services/security-services/recaptcha-validator";
import {IReview} from "../../models/review";

const router = express.Router();

router.route('/')
    .post(function (req: IRequest, res: Response) {
        if (!req.isTokenValid) {
            res.sendStatus(401);
        }

        validateRecaptcha(req.body.recaptcha)
            .then(() => {
                return setReview(req.body);
            })
            .then((review: IReview) => {
                res.json(review);
            })
            .catch((err: any) => {
                res.status(500).json({m: err.message});
            })
    })
    .put(function (req: IRequest, res: Response) {
        if (!req.isTokenValid) {
            res.sendStatus(401);
        }

        if (req.body.isPublished) {
            publishReview(req.body.id)
                .then((review: IReview) => {
                    res.json(review);
                })
                .catch((err: any) => {
                    res.status(500).json({m: err.message});
                })
        } else {
            unpublishReview(req.body.id)
                .then((review: IReview) => {
                    res.json(review);
                })
                .catch((err: any) => {
                    res.status(500).json({m: err.message});
                })
        }
    })
    .get(function (req: IRequest, res: Response) {
        const qty = req.isTokenValid ? 0 : 5;
        getReviews(qty, {random: true, language: req.query.language, all: req.isTokenValid})
            .then((reviews: Array<IReview>) => {
                res.json(reviews);
            })
            .catch((err: any) => {
                res.status(500).json({m: err.message})
            })
    })
    .delete(function (req: IRequest, res: Response) {
        if (!req.isTokenValid) {
            res.sendStatus(401);
        }

        removeReview(req.query.id)
            .then((result: any) => {
                res.json(result);
            })
            .catch((err: any) => {
                res.status(500).json({m: err.message});
            })
    });

export default router;
