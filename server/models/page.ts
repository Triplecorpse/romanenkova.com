import mongoose = require('mongoose');
import {iMongooseSchema} from "./iMongooseSchema";

export interface iNav extends iMongooseSchema {
    name: string;
    anchor: string;
}

export interface iPage extends iMongooseSchema {
    header?: string;
    body?: string;
    entityId?: string;
}

const schema = new mongoose.Schema({
    header: {type: String, required: false},
    body: {type: String, required: false, strict: false},
    language: {type: String, required: true, maxlength: 2},
    entityId: {type: String, required: true, lowercase: true},
}, {strict: false});

export const model = mongoose.model('Page', schema);
