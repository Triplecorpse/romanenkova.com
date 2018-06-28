import * as mongoose from 'mongoose';
const schema = new mongoose.Schema({
    name: String,
    ru: String,
    en: String,
    ua: String
});

export const model = mongoose.model('LanguageContainer', schema);
