import mongoose = require('mongoose');

import {IMongooseSchema} from "./IMongooseSchema";
import {stripString} from "../services/security-services/strip-html";
import {TLanguage} from "../types/types";
import {languages} from "../const/const";

export interface IArticle extends IMongooseSchema {
    logo: string;
    header: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date,
    deletedAt?: Date,
    isDeleted: boolean,
    url: string,
    entityId: string
}

function secureHtmlString(input: string): string {
    return stripString(input);
}

function validateUrl(url: string) {
    return url.startsWith('http');
}

function validateLanguage(lang: TLanguage): boolean {
    return languages.indexOf(lang) > -1;
}

const schema = new mongoose.Schema({
    logo: {type: String, required: true, validate: validateUrl},
    header: {type: String, required: true, set: secureHtmlString},
    body: {type: String, required: true, set: secureHtmlString},
    isPublished: {type: Boolean, default: false},
    language: {type: String, require: true, validate: validateLanguage},
    deletedAt: {type: Date},
    isDeleted: {type: Boolean, default: false},
    url: {type: String, required: true, lowercase: true},
    entityId: {type: String, required: true}
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

export const Article = mongoose.model('Article', schema);
