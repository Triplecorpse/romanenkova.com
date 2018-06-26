const mongoose = require('mongoose');
const model = {
    name: String,
    entity: String,
    ru: String,
    en: String,
    ua: String
};

module.exports = mongoose.model('ArticleLanguageContainer', model);
