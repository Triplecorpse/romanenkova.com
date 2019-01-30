import mongoose = require('mongoose');

const schema = new mongoose.Schema({
    language: {type: String, required: false},
    name: {type: String, required: false},
    body: {type: String, required: true},
    isPublished: {type: Boolean, required: true, default: false}
});

export const Review = mongoose.model('Review', schema);
