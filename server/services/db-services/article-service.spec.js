const articleService = require('./article-service');
const articleLanguageContainerService = require('./article-language-container-service');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('../../config');

describe('Article Service', function () {
    let articleId;
    let languageContainerId;

    before(done => {
        mongoose.connect(config.dbt)
            .then(() => {
                return articleLanguageContainerService.create('New Article')
            })
            .then(container => {
                languageContainerId = container._id;
                done();
            })
            .catch(err => {
                done(err);
            })
    });
    after(done => {
        articleLanguageContainerService.remove(languageContainerId)
            .then(() => {
                mongoose.connection.db.dropCollection('articlelanguagecontainers');
                mongoose.connection.db.dropCollection('articles');

                return mongoose.disconnect();
            })
            .then(() => {
                done()
            })
            .catch(err => {
                done(err);
            })
    });

    it('should create a new article in existing container', done => {
        const articleStub = {
            header: 'Test Article Header',
            body: 'Test Article Body',
            logo: 'Test Article Image Url',
            language: 'ru'
        };

        articleService.create(articleStub, languageContainerId)
            .then(article => {
                expect(article).to.deep.include(articleStub);
                articleId = article.id;
                done();
            })
            .catch(err => {
                done(err)
            })
    });

    it('should not create a new article if no container specified', done => {
        const articleStub = {
            header: 'Test Article Header',
            body: 'Test Article Body',
            logo: 'Test Article Image Url',
            language: 'ru'
        };

        articleService.create(articleStub)
            .then(article => {
                done(article);
            })
            .catch(err => {
                expect(err.message).to.be.equal('Single article should be in language container');
                done();
            })
    });

    it('should not create a new article if a container is already filled with correspondent language', done => {
        const articleStub = {
            header: 'Test Article Header',
            body: 'Test Article Body',
            logo: 'Test Article Image Url',
            language: 'ru'
        };

        articleService.create(articleStub, languageContainerId)
            .then(() => {
                return articleService.create(articleStub, languageContainerId);
            })
            .then(article => {
                done(article);
            })
            .catch(err => {
                expect(err.message).to.be.equal(`Language ru for container named New Article is already filled`);
                done();
            })
    });

    it('should not create a new article if not all necessary fields are filled', done => {
        const articleStub = {
            body: 'New Test Article Body',
            logo: 'some_image'
        };

        articleService.create(articleStub)
            .then(article => {
                done(article);
            })
            .catch(err => {
                expect(err.message).to.equal('Header, body, logo and language are required for article');
                done()
            })
    });

    it('should update an existing article', done => {
        const articleStub = {
            header: 'New Test Article 2',
            body: 'New Test Article Body 2',
            logo: 'Test Article Image Url 2',
            language: 'en'
        };

        articleService.update(articleId, articleStub)
            .then(article => {
                expect(article).to.deep.include(articleStub);
                done();
            })
            .catch(err => {
                done(err)
            })
    });

    it('should reject updating an article with an id that doen\'t exist', done => {
        const articleStub = {
            header: 'New Test Article 2',
            body: 'New Test Article Body 2',
            logo: 'Test Article Image Url 2',
            language: 'ru'
        };

        articleService.update('5b310825adeaa01810b2f34a', articleStub)
            .then(article => {
                done(article);
            })
            .catch(err => {
                expect(err.message).to.equal(`No article was modified. Maybe, an article with id 5b310825adeaa01810b2f34a was not found`);
                done()
            })
    });

    it('should reject updating an article with no id', done => {
        const articleStub = {
            header: 'New Test Article 2',
            body: 'New Test Article Body 2',
            logo: 'Test Article Image Url 2'
        };

        articleService.update(null, articleStub)
            .then(article => {
                done(article);
            })
            .catch(err => {
                expect(err.message).to.equal('No id specified for article update');
                done()
            })
    });

    it('should reject updating an article with an invalid id', done => {
        const articleStub = {
            header: 'New Test Article 2',
            body: 'New Test Article Body 2',
            logo: 'Test Article Image Url 2'
        };

        articleService.update(articleStub)
            .then(article => {
                done(article);
            })
            .catch(err => {
                expect(err.message).to.equal('First argument {id} should be string');
                done()
            })
    });

    it('should read single saved article', done => {
        articleService.read(articleId)
            .then(article => {
                expect(article._id.toString()).to.equal(articleId);
                done();
            })
            .catch(err => {
                done(err);
            })
    });

    it('should read all articles', done => {
        articleService.read(null, true)
            .then(articles => {
                expect(articles).to.be.an('array');
                done();
            })
            .catch(err => {
                done(err);
            })
    });

    it('should read articles that are not deleted and are published', done => {
        articleService.read()
            .then(articles => {
                let err;
                articles.forEach(article => {
                    if (article.isDeleted || !article.isPublished) {
                        err = true;
                    }
                });

                done(err);
            })
            .catch(err => {
                done(err);
            })
    });

    it('should delete an existing article', done => {
        articleService.remove(articleId)
            .then(article => {
                expect(article).to.deep.include({n: 1});
                done();
            })
            .catch(err => {
                done(err)
            })
    });

    it('should reject deleting an article with an id that doen\'t exist', done => {
        articleService.remove('5b310825adeaa01810b2f34a')
            .then(article => {
                done(article);
            })
            .catch(err => {
                expect(err.message).to.equal(`No article was deleted. Maybe, an article with id 5b310825adeaa01810b2f34a was not found`);
                done()
            })
    });
});
