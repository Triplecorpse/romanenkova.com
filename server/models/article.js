"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = __importStar(require("mongoose"));
const schema = new mongoose.Schema({
    logo: { type: String, required: true },
    header: { type: String, required: true },
    body: { type: String, required: true },
    isPublished: { type: Boolean, require: true },
    language: { type: String, require: true },
    createdAt: { type: Date, require: true, default: new Date() },
    updatedAt: { type: Date },
    deletedAt: { type: Date },
    isDeleted: { type: Boolean, default: false },
    url: { type: String, required: true, lowercase: true },
    entityId: { type: String, required: true }
});
exports.model = mongoose.model('Article', schema);
