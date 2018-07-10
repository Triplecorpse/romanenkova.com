"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router
    .route('/:id?')
    .post(function (req, res) {
    res.status(501).json({ v: '0.1', b: req.body, m: req.method });
})
    .put(function (req, res) {
    res.status(501).json({ v: '0.1', r: req.params, b: req.body, m: req.method });
})
    .get(function (req, res) {
    res.json({ v: '0.1', r: req.params, m: req.method });
})
    .delete(function (req, res) {
    res.status(501).json({ v: '0.1', r: req.params, m: req.method });
});
exports.default = router;
