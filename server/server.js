"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const routes_1 = __importDefault(require("./routes"));
exports.app = express();
exports.app.use('/', routes_1.default);
exports.app.use(express.static('./front/dist'));
exports.app.use(bodyParser.json({ type: 'application/json' }));
