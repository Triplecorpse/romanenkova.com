import express = require('express');
import IRequest from "../../interfaces/iRequest";
import {Response} from "express-serve-static-core";
import {createDiploma, readDiploma, removeDiploma, updateDiploma} from "../../services/db-middleware/diploma";

const router = express.Router();

router
  .route('/:id?')
  .post(async function (req: IRequest, res: Response) {
    if (!req.isTokenValid) {
      res.sendStatus(401);
    }

    const diploma = await createDiploma(req.body).catch(e => res.sendStatus(400).json(e));
    res.json(diploma);
  })
  .put(async function (req: IRequest, res: Response) {
    if (!req.isTokenValid) {
      res.sendStatus(401);
    }

    const diploma = await updateDiploma(req.params.id, req.body).catch(e => res.sendStatus(400).json(e));
    res.json(diploma);
  })
  .get(async function (req: IRequest, res: Response) {
    const diplomas = await readDiploma(undefined, req.isTokenValid).catch(e => res.sendStatus(400).json(e));
    res.json(diplomas);
  })
  .delete(async function (req: IRequest, res: Response) {
    if (!req.isTokenValid) {
      res.sendStatus(401);
    }

    if (!req.params.id) {
      res.status(400).json({m: 'No id provided'})
    }

    const result = await removeDiploma(req.params.id).catch(e => res.sendStatus(400).json(e));
    res.json(result);
  });

export default router;
