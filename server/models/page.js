"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    header: { type: String, required: false },
    body: { type: String, required: false, strict: false },
    language: { type: String, required: true, maxlength: 2 },
    entityId: { type: String, required: true, lowercase: true },
}, { strict: false });
exports.model = mongoose.model('Page', schema);
