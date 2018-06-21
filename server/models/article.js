const mongoose = require('mongoose');
const model = {
    logo: String,
    header: String,
    description: String,
    body: String
};

module.exports = mongoose.model('Article', model);