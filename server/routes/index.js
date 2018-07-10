"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const index_1 = __importDefault(require("./api/index"));
const file_service_1 = require("../services/file-service");
const auth_service_1 = require("../services/security-services/auth-service");
const bodyParser = require("body-parser");
router.use(bodyParser.json());
router.use('/api', index_1.default);
router.post('/login', (req, res) => {
    auth_service_1.getToken(req.body)
        .then(data => {
        res.json({ token: data, success: true });
    })
        .catch(err => {
        res.status(401).send({ success: false, message: 'Invalid credentials' });
    });
});
router.get('/', (req, res) => {
    file_service_1.readFile('./front/dist/index.html')
        .then(data => {
        res.send(data);
    })
        .catch(err => {
        res.status(500).send(err);
    });
});
exports.default = router;
