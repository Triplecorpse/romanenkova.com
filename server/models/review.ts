import mongoose = require('mongoose');
import {TLanguage} from "../types/types";
import {IMongooseSchema} from "./IMongooseSchema";

export interface IReview extends IMongooseSchema {
    name?: string;
    review: string;
    email?: string;
    isPublished?: boolean;
}

const schema = new mongoose.Schema({
    language: {type: String, required: false},
    name: {type: String, required: false},
    review: {type: String, required: true},
    email: {type: String, required: false},
    isPublished: {type: Boolean, required: true, default: false}
});

export const Review = mongoose.model('Review', schema);
