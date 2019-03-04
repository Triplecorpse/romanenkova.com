import mongoose = require('mongoose');
import {TLanguage} from "../../_interface/types";
import {languages} from "../const/const";
import {stripString} from "../services/security-services/strip-html";

function validateLanguage(lang: TLanguage): boolean {
    return languages.indexOf(lang) > -1;
}

function secureHtmlString(input: string): string {
    return stripString(input);
}

const schema = new mongoose.Schema({
    header: {type: String, required: true, set: secureHtmlString},
    description: {type: String, required: false, set: secureHtmlString},
    image: {type: String, required: true},
    language: {type: String, required: true, validate: validateLanguage},
    price: {type: Number, required: false},
    currency: {type: String, required: false},
    entityId: {type: String, required: true, set: secureHtmlString},
    title: {type: String, required: true, set: secureHtmlString},
    period: {type: String, required: false, set: secureHtmlString},
    noPriceValue: {type: String, required: false, set: secureHtmlString},
    priceLabel: {type: String, required: true, set: secureHtmlString},
    isPublished: {type: Boolean, default: true, required: false}
});


export const Service = mongoose.model('Service', schema);
