const mongoose = require('mongoose');
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

module.exports = mongoose.model('Article', schema);
