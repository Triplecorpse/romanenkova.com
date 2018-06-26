const mongoose = require('mongoose');
const model = {
    name: String,
    ru: String,
    en: String,
    ua: String
};

module.exports = mongoose.model('LanguageContainer', model);
