const mongoose = require('mongoose');
const model = {
    ru: String,
    en: String,
    ua: String
};

module.exports = mongoose.model('Article', model);
