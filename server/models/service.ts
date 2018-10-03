import mongoose = require('mongoose');
import {IMongooseSchema} from "./IMongooseSchema";
import {TLanguage, TPageId} from "../types/types";
import {languages, pagesId} from "../const/const";
import {stripStringAsync} from "../services/security-services/strip-html";

export interface IService extends IMongooseSchema {
    header: string;
    description: string;
    image: string;
    price: number;
    currency: string;
    priceLabel: string;
}

function validateLanguage(lang: TLanguage): boolean {
    return languages.indexOf(lang) > -1;
}

function secureHtmlString(input: string): string {
    return stripStringAsync(input);
}

function validateUrl(url: string): boolean {
    return url.startsWith('http');
}

const schema = new mongoose.Schema({
    header: {type: String, required: true, set: secureHtmlString},
    description: {type: String, required: false, set: secureHtmlString},
    image: {type: String, required: true, validate: validateUrl},
    language: {type: String, required: true, validate: validateLanguage},
    price: {type: Number, required: true},
    currency: {type: String, required: true}
});


export const Service = mongoose.model('Service', schema);
