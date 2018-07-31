import mongoose = require('mongoose');
import {iMongooseSchema} from "./iMongooseSchema";
import {TPageId} from "../types/types";

export interface iNav {
    name: string;
    anchor: string;
}

interface iContact {
    name: string;
    account: string;
    linkto?: 'mailto:' | 'skype:' | 'tel:'
}

export interface iPage extends iMongooseSchema {
    header?: string;
    pageData?: string | Array<iNav> | Array<iContact>;
    entityId: TPageId;
    images?: string[]
}

function validateLanguage(lang: string): boolean {
    const langs = ['en', 'ru', 'uk'];

    return langs.indexOf(lang) > -1;
}

function validateId(id: TPageId): boolean {
    const ids: Array<TPageId> = ['nav', 'contacts', 'about', 'diploma', 'service', 'article', 'main', 'review'];

    return ids.indexOf(id) > -1;
}

function setBody(body: string | Array<iNav> | Array<iContact>): string {
    if (typeof body === 'object') {
        return JSON.stringify(body);
    }

    return body;
}

function getBody(body: string): string {
    try {
        return JSON.parse(body);
    } catch(e) {
    }

    return body;
}

const schema = new mongoose.Schema({
    header: {type: String, required: true},
    pageData: {type: String, required: false, set: setBody, get: getBody},
    images: {type: [String], required: false},
    language: {type: String, required: true, validate: validateLanguage},
    entityId: {type: String, required: true, lowercase: true, validate: validateId},
}, {strict: false});


export const model = mongoose.model('Page', schema);
