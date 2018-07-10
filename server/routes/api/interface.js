"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const interface_1 = require("../../services/db-middleware/interface");
const auth_service_1 = require("../../services/security-services/auth-service");
router
    .route('/:id?')
    .put((req, res) => {
    auth_service_1.validate(req.body.token)
        .then((data) => {
        const language = req.query.lang;
        const id = req.query.id;
        console.log(data);
        if (!language || !id) {
            return res.status(400).json({ m: 'Required parameters are missing.' });
        }
        return interface_1.update(id, language, { header: req.body.header, body: req.body.body });
    })
        .catch((err) => {
        res.status(401).json({ m: err.message });
        throw err;
    })
        .then((data) => {
        console.log(data);
        res.json({ header: data.header, body: data.body });
    })
        .catch((err) => {
        res.status(500).json({ m: err.message });
    });
})
    .get((req, res) => {
    const language = req.query.lang;
    const id = req.query.id;
    if (!language || !id || (language !== 'en' && language !== 'ru' && language !== 'uk')) {
        return res.status(400).json({ m: 'Required parameters are missing.', language, id });
    }
    interface_1.read(id, language)
        .then((data) => {
        let returnBody;
        if (id === 'nav') {
            returnBody = JSON.parse(data.body);
        }
        else {
            returnBody = { header: data.header, body: data.body };
        }
        res.json(returnBody);
    })
        .catch((err) => {
        res.status(500).json({ m: err.message });
    });
});
exports.default = router;
