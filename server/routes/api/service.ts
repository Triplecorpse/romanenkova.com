import express = require('express');
import {Response} from "express-serve-static-core";
import {IService, Service} from "../../models/service";
import IRequest from "../../interfaces/iRequest";
import {readService} from "../../services/db-middleware/service";
import {TLanguage} from "../../types/types";
import {Database} from "../../../_interface/IMongooseSchema";

const router = express.Router();

router.get('/', (req: IRequest, res: Response) => {
    readService(req.language as TLanguage)
        .then((services: Array<Database.IService>) => {
            res.json(services);
        })
        .catch((err: any) => {
            res.status(500).json(err.message);
        });
});

export default router;
