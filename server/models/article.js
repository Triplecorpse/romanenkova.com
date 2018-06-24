const mongoose = require('mongoose');
const model = {
    logo: String,
    header: String,
    body: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    isPublished: Boolean,
    isDeleted: Boolean,
    url: String,
    language: String
};

module.exports = mongoose.model('Article', model);
