import * as mongoose from 'mongoose';
import {iMongooseSchema} from "./iMongooseSchema";

export interface iArticle extends iMongooseSchema {
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

const schema = new mongoose.Schema({
    logo: {type: String, required: true},
    header: {type: String, required: true},
    body: {type: String, required: true},
    isPublished: {type: Boolean, default: false},
    language: {type: String, require: true},
    deletedAt: {type: Date},
    isDeleted: {type: Boolean, default: false},
    url: {type: String, required: true, lowercase: true},
    entityId: {type: String, required: true}
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

export const model = mongoose.model('Article', schema);
