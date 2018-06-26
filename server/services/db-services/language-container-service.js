const ArticleLanguageContainer = require('../../models/article-language-container');
const log = require('./../log-service');

function read(id) {
    if (id && typeof id === 'string') {
        return ArticleLanguageContainer.findById(id)
            .then(container => {
                if (!container) {
                    return Promise.reject(new Error(`Container with id ${id} was not found`))
                }

                return container;
            });
    }

    return ArticleLanguageContainer.find();
}

function create(name) {
    if (!name) {
        return Promise.reject(new Error('Language container should have a name'));
    }

    return new ArticleLanguageContainer({name}).save();
}

function update(id, body) {
    if (!id) {
        return Promise.reject(new Error('Container update should have id'));
    }

    if (!body || !Object.keys(body).length) {
        return Promise.reject(new Error('Container update should have body'));
    }

    return ArticleLanguageContainer.updateOne({_id: id}, body)
        .then(result => {
            if (!result.nModified) {
                return Promise.reject(new Error('Container with given id was not found'));
            }

            return ArticleLanguageContainer.findById(id);
        });
}

function remove(id) {
    if (!id) {
        return Promise.reject(new Error('Container delete should have an Id'));
    }

    return ArticleLanguageContainer.deleteOne({_id: id})
        .then(result => {
            if (!result.n) {
                return Promise.reject(new Error(`Container with id ${id} was not found`));
            }

            return result;
        });
}

module.exports = {create, read, update, remove};
