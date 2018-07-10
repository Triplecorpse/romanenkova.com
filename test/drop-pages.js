"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("../server/models/page");
const log_service_1 = __importDefault(require("../server/services/log-service"));
const config_1 = require("../server/config");
const mongoose_1 = __importDefault(require("mongoose"));
const pagesToPush = [];
let skipped = 0;
mongoose_1.default.connect(config_1.config.dbp)
    .then(() => {
    log_service_1.default.warning('RUN OF PAGES DELETE');
    return page_1.model.find()
        .then(pages => {
        if (pages.length) {
            return page_1.model.collection.drop();
        }
        return Promise.resolve(false);
    });
})
    .then((data) => {
    log_service_1.default.info(`DELETED:`);
    log_service_1.default.info(`  ${data}`);
    return mongoose_1.default.disconnect();
});
