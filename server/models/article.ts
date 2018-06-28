import * as mongoose from 'mongoose';
const schema = new mongoose.Schema({
    logo: String,
    header: String,
    body: String,
    isPublished: Boolean,
    language: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    isDeleted: Boolean,
    url: String
});

export const model = mongoose.model('Article', schema);
