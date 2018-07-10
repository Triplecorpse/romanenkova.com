"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const config_1 = require("./config");
const log_service_1 = __importDefault(require("./services/log-service"));
const mongoose = require("mongoose");
const port = process.env.PORT || config_1.config.port;
mongoose.connect(process.env.MONGODB_URI || config_1.config.dbp);
server_1.app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log_service_1.default.info(`Server started on port ${port}`);
});
