const ArticleLanguageContainer = require('../../models/article-language-container');

function read(id, all = false) {

}

function create(name) {
    return new ArticleLanguageContainer({name}).save();
}

function update(id, body) {

}

function remove(id) {
    return ArticleLanguageContainer.deleteOne({_id: id});
}

module.exports = {create, read, update, remove};
