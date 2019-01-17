import mongoose = require('mongoose');
import {IMongooseSchema} from "./IMongooseSchema";
import {TLanguage, TPageId} from "../types/types";
import {languages, pagesId} from "../const/const";
import {stripString} from "../services/security-services/strip-html";

export interface IService extends IMongooseSchema {
    header: string;
    description: string;
    image: string;
    price?: number;
    currency?: string;
    priceLabel: string;
    entityId: string;
    title: string;
    period?: string;
    noPriceValue?: string;
}

function validateLanguage(lang: TLanguage): boolean {
    return languages.indexOf(lang) > -1;
}

function secureHtmlString(input: string): string {
    return stripString(input);
}

function validateUrl(url: string): boolean {
    return url.startsWith('http');
}

const schema = new mongoose.Schema({
    header: {type: String, required: true, set: secureHtmlString},
    description: {type: String, required: false, set: secureHtmlString},
    image: {type: String, required: true, validate: validateUrl},
    language: {type: String, required: true, validate: validateLanguage},
    price: {type: Number, required: false},
    currency: {type: String, required: false},
    entityId: {type: String, required: true, set: secureHtmlString},
    title: {type: String, required: true, set: secureHtmlString},
    period: {type: String, required: false, set: secureHtmlString},
    noPriceValue: {type: String, required: false, set: secureHtmlString},
    priceLabel: {type: String, required: true, set: secureHtmlString}
});


export const Service = mongoose.model('Service', schema);
