import mongoose = require('mongoose');

const schema = new mongoose.Schema({
    header: {type: String, required: true},
    body: {type: String, required: true},
    items: {type: [String], required: false},
    language: {type: String, required: true}
});

export const AboutPage = mongoose.model('AboutPage', schema);
