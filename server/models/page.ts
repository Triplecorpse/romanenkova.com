import mongoose = require('mongoose');
import {iMongooseSchema} from "./iMongooseSchema";
import {DocumentQuery, HookNextFunction, Model, Query, Schema} from "mongoose";

export interface iNav {
    name: string;
    anchor: string;
}

interface iContact {
    name: string;
    account: string;
}

export interface iPage extends iMongooseSchema {
    header: string;
    pageData?: string | Array<iNav> | Array<iContact>;
    entityId: 'nav' | 'contacts' | 'about' | 'diploma' | 'service' | 'article' | 'main';
}

function validateLanguage(lang: string): boolean {
    const langs = ['en', 'ru', 'uk'];

    return langs.indexOf(lang) > -1;
}

function validateId(id: string): boolean {
    const ids = ['nav', 'contacts', 'about', 'diploma', 'service', 'article', 'main'];

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
    language: {type: String, required: true, validate: validateLanguage},
    entityId: {type: String, required: true, lowercase: true, validate: validateId},
}, {strict: false});


export const model = mongoose.model('Page', schema);
