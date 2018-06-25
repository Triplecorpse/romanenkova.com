const articleLanguageService = require('./article-language-container-service');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('../../config');

describe('Article Service', function () {
    let articleId;
    let languageContainerId;

    before(done => {
        mongoose.connect(config.dbt)
            .then(() => {
                done();
            })
            .catch(err => {
                done(err);
            })
    });
    after(done => {
        mongoose.disconnect()
            .then(() => {
                done()
            })
            .catch(err => {
                done(err);
            })
    });

    it('should create a new article language container', done => {
        done(1)
    });
});
