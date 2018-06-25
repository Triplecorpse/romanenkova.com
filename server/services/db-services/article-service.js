const mongoose = require('mongoose');
const Article = require('../../models/article');
const ArticleLanguageContainer = require('../../models/article-language-container');

function createLanguageContainer(header, langOptions) {
    return new ArticleLanguageContainer({header, ...langOptions}).save();
}

function read(id, all = false) {
    const options = {};
    let method = 'find';

    if (id) {
        options.url = id;
        method = 'findOne'
    }

    if (!all) {
        options.isDeleted = false;
        options.isPublished = true;
    }

    return Article[method](options);
}

function create(body, languageContainerName, isNewContainer) {
    const validationStatus = validator(body);

    if (!validationStatus.succcess) {
        return Promise.reject(validationStatus);
    }

    const now = new Date();
    const articleObj = {
        ...body,
        createdAt: now,
        updatedAt: now,
        deletedAt: null,
        isDeleted: false,
        url: 'url-stub'
    };
    const article = new Article(articleObj);

    return article.save()
        .then(article => {
            const optObj = {};
            optObj[article.language] = article._id;

            if (isNewContainer) {
                createLanguageContainer(languageContainerName, optObj);
            } else {
                ArticleLanguageContainer.updateOne({header: languageContainerName}, optObj);
            }

            return article;
        });
}

function update(id, body) {
    const validationStatus = validator(body);

    if (!id) {
        return Promise.reject(new Error('No id specified for article update'));
    }

    if (typeof id !== 'string') {
        return Promise.reject(new Error('First argument {id} should be string'));
    }

    if (!validationStatus.succcess) {
        return Promise.reject(validationStatus);
    }

    const articleObj = {
        ...body,
        updatedAt: new Date(),
        url: 'url-stub'
    };

    return Article.updateOne({_id: id}, articleObj)
        .then(result => {
            return Article.findById(id);
        })
        .catch(err => {
            throw new Error(`No article was modified. Maybe, an article with id ${id} was not found`);
        });
}

function remove(id) {
    if (!id) {
        return Promise.reject(new Error('No id specified for article delete'));
    }

    return Article.deleteOne({_id: id})
        .then(result => {
            if (!result.n) {
                throw new Error(`No article was deleted. Maybe, an article with id ${id} was not found`);
            }
            return result;
        });
}

function validator(body) {
    if (!(body && body.header && body.body && body.logo && body.language)) {
        return new Error('Header, body, logo and language are required for article');
    }

    return {succcess: true}
}

module.exports = {create, read, update, remove};
