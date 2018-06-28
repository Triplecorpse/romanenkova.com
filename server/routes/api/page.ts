import express from 'express';
const router = express.Router();

import {read, update} from '../../services/db-middleware/page';
read();
router
    .route('/:id?')
    .put(function (req, res) {
        res.status(501).json({v: '0.1', r: req.params, b: req.body, m: req.method});
    })
    .get(function (req, res) {
        res.json({v: '0.1', r: req.params, m: req.method});
    });

export default router;
