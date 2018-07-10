"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const article_1 = __importDefault(require("./article"));
const interface_1 = __importDefault(require("./interface"));
const log_service_1 = __importDefault(require("./../../services/log-service"));
const parseAcceptLanguage = require('parse-accept-language');
router.use('*', (req, res, next) => {
    log_service_1.default.info('Request registered from', req.hostname, req.method, req.baseUrl);
    if (/romanenkova.com|localhost|romanenkova.herokuapp.com/i.test(req.hostname)) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        const pal = parseAcceptLanguage(req);
        const acceptables = ['uk', 'ru', 'en'];
        const languageObj = pal.find((lang) => acceptables.find((acceptable) => lang.value === acceptable));
        req.language = languageObj.value;
        next();
    }
    else {
        res.status(403).json({ m: 'Request are allowed from domain romanenkova.com only' });
    }
});
router.use('/article', article_1.default);
router.use('/interface', interface_1.default);
router.get('/language', (req, res) => {
    res.json({ lang: req.language });
});
exports.default = router;
