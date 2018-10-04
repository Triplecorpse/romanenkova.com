import express = require('express');
import {Response} from "express-serve-static-core";
import {IService, Service} from "../../models/service";
import IRequest from "../../interfaces/iRequest";

const router = express.Router();

router.get('/', (req: IRequest, res: Response) => {
    Service.find({language: req.language})
        .then((services: Array<any>) => {
            res.json(services.map((service: any): IService => ({
                header: service.header,
                description: service.description,
                image: service.image,
                price: service.price,
                currency: service.currency,
                priceLabel: service.priceLabel,
                language: service.language,
                entityId: service.entityId,
                title: service.title
            })));
        })
        .catch((err: any) => {
            res.status(500).json(err);
        });
});

export default router;
