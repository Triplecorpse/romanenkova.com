const mongoose = require('mongoose');
const model = {
    header: String,
    ru: String,
    en: String,
    ua: String
};

module.exports = mongoose.model('ArticleLanguageContainer', model);
