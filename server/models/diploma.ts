import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    picture: {type: String, required: true},
    header: {type: String, required: true},
    receivedAt: {type: Date, required: true},
    language: {type: String, require: true},
    entityId: {type: String, required: true}
}, {timestamps: {createdAt: 'createdAt', updatedAt: 'updatedAt'}});

export const model = mongoose.model('Diploma', schema);
