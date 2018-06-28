import mongoose from 'mongoose';
export interface iPage {
    header: string;
    body?: string;
    entityId: string;
    language: 'ru' | 'en' | 'ua';
}
const schema = new mongoose.Schema({
    header: {type: String, required: true},
    body: String,
    language: {type: String, required: true, maxlength: 2},
    entityId: {type: String, required: true, lowercase: true},
}, {strict: false});

export const model = mongoose.model('Page', schema);
