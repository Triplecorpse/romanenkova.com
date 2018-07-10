"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("../../models/page");
function read(entityId, language) {
    return page_1.model.find({ entityId, language })
        .then((pages) => {
        const page = pages[0];
        let body = page.body;
        if (typeof page.body === 'object') {
            body = JSON.parse(page.body).map((navItem) => {
                delete navItem._id;
                delete navItem.__v;
            });
        }
        return {
            header: page.header,
            body
        };
    });
}
exports.read = read;
function update(entityId, language, page) {
    return page_1.model.updateOne({ entityId, language }, page)
        .then((result) => {
        return read(entityId, language);
    });
}
exports.update = update;
