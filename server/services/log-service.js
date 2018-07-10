"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Log = require('log');
const log = new Log('info', fs.createWriteStream('./my.log'));
exports.default = {
    info(...args) {
        beforeEach(...args);
        log.info(...args);
    },
    error(...args) {
        beforeEach(...args);
        log.error(...args);
    },
    warning(...args) {
        beforeEach(...args);
        log.warning(...args);
    }
};
function beforeEach(...args) {
    console.log(...args);
}
