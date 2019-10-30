import mongoose = require('mongoose');
import {stripString} from '../services/security-services/strip-html';
import {TLanguage} from '../../_interface/types';
import {languages} from '../const/const';

function secureHtmlString(input: string): string {
    return stripString(input);
}

function validateUrl(url: string) {
    return url.startsWith('http') || url.startsWith('/') || url.startsWith('./');
}

function validateLanguage(lang: TLanguage): boolean {
    return languages.indexOf(lang) > -1;
}

const schema = new mongoose.Schema({
    logo: {type: String, required: true, validate: validateUrl},
    imageMd: {type: String, required: true, validate: validateUrl},
    imageXl: {type: String, required: true, validate: validateUrl},
    imageAuthor: {type: String, required: true},
    imageUrl: {type: String, required: true},
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
