import * as mongoose from 'mongoose';
const schema = new mongoose.Schema({
    picture: {type: String, required: true},
    header: {type: String, required: true},
    body: {type: String, required: true},
    isPublished: {type: Boolean, require: true},
    language: {type: String, require: true},
    createdAt: {type: Date, require: true, default: new Date()},
    updatedAt: {type: Date},
    deletedAt: {type: Date},
    isDeleted: {type: Boolean, default: false},
    url: {type: String, required: true, lowercase: true},
    entityId: {type: String, required: true}
});

export const model = mongoose.model('Article', schema);
