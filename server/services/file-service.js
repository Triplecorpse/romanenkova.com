"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const log_service_1 = __importDefault(require("./log-service"));
function readFile(path, options = 'UTF8') {
    return new Promise((resolve, reject) => {
        fs.readFile(path, options, (err, data) => {
            if (err) {
                reject(err);
                log_service_1.default.error(`Error reading file ${path}`, err);
            }
            else {
                resolve(data);
                log_service_1.default.info(`File ${path} was read successfully`);
            }
        });
    });
}
exports.readFile = readFile;
