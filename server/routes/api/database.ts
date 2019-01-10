import express = require('express');
import IRequest from "../../interfaces/iRequest";

const router = express.Router();
import {Response} from "express-serve-static-core";
import {backupDatabase, restoreDatabase} from "../../services/security-services/backup-service";

router
    .route('/backup')
    .post(function (req: IRequest, res: Response) {
        if (!req.isTokenValid) {
            return res.sendStatus(401);
        }

        backupDatabase()
            .then(() => {
                return res.sendStatus(200);
            })
            .catch((err: any) => {
                res.send(500).json(err);
            });
    });

router
    .route('/restore/:v')
    .post(function (req: IRequest, res: Response) {
        if (!req.isTokenValid) {
            return res.sendStatus(401);
        }

        restoreDatabase(req.params.v)
            .then(() => {
                return res.sendStatus(200);
            })
            .catch((err: any) => {
                res.send(500).json(err);
            });
    });

export default router;
