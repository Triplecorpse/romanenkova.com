import express = require('express');
import IRequest from "../../interfaces/iRequest";
import {Response} from "express-serve-static-core";
import {getReviews, publishReview, removeReview, setReview, unpublishReview} from "../../services/db-middleware/review";
import {validateRecaptcha} from "../../services/security-services/recaptcha-validator";
import {IReview} from "../../models/review";
import {TLanguage} from "../../types/types";
import {sendEmail} from "../../services/user-services/email-service";
import {errorMessages, successMessages} from "../../const/const";
import {Error} from "mongoose";

const router = express.Router();

router.route('/')
    .post(function (req: IRequest, res: Response) {
        if (!req.body.review) {
            res.status(400).json({m: errorMessages.review.review[req.body.language], err: {}, lang: req.body.language});
            throw new Error(errorMessages.review.review[req.body.language]);
        }

        validateRecaptcha(req.body.recaptcha)
            .then(() => {
                if (req.body.email) {
                    return sendEmail({
                        to: req.body.email,
                        from: `${req.body.name || 'Anonymous'} <info@romanenkova.com>`,
                        subject: 'A feedback was left for you',
                        text: `
                                  FROM: ${req.body.name},
                                  EMAIL: ${req.body.email},
                                  -----------------------------------
                                  FEEDBACK: ${req.body.reviev}
                                `
                    })
                } else {
                    return Promise.resolve();
                }
            })
            .then(() => {
                delete req.body.email;
                return setReview(req.body);
            })
            .then((data: IReview) => {
                res.json({
                    data,
                    lang: req.body.language,
                    m: successMessages.review.body[req.body.language],
                    h: successMessages.review.header[req.body.language]
                });
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
        const language = req.isTokenValid ? undefined : req.query.language;
        getReviews(qty, {random: true, language: language as TLanguage, all: req.isTokenValid})
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
