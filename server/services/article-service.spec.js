const articleService = require('./article-service');
const authService = require('./auth-service');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('./../config');

describe('Article Service', function () {
    let token;
    let articleId;
    let articleIds;

    before(done => {
        mongoose.connect(config.db)
            .then(() => {
                const articleStubs = [{
                    header: 'New Test Article',
                    body: 'New Test Article Body',
                    logo: 'some_image',
                    isDeleted: true
                }, {
                    header: 'New Test Article',
                    body: 'New Test Article Body',
                    logo: 'some_image',
                    isPublished: false
                }, {
                    header: 'New Test Article',
                    body: 'New Test Article Body',
                    logo: 'some_image',
                    isPublished: true
                }];

                articleStubs.forEach(articleStub => {
                    articleService.create(articleStub)
                        .then(article => {
                            articleIds.push(article.url);
                            done();
                        })
                        .catch(err => {
                            done(err);
                        })
                });

                return authService.getToken({login: 'Triplecorpse', password: 'Password'})
            })
            .then(data => {
                token = data;
                done();
            })
            .catch(err => {
                done(err);
            })
    });
    after(done => {
        articleIds.forEach(articleId => {
            articleService.delete(articleId)
                .catch(err => {
                    done(err);
                })
        });
        mongoose.disconnect()
            .then(() => {
                done()
            })
            .catch(err => {
                done(err);
            })
    });

    it('should create a new article', done => {
        const articleStub = {
            header: 'New Test Article',
            body: 'New Test Article Body',
            logo: 'some_image'
        };

        articleService.create(articleStub)
            .then(article => {
                expect(article).to.have.property(articleStub);
                articleId = article.url;
                done();
            })
            .catch(err => {
                done(err)
            })
    });

    it('should update an existing article', done => {
        const articleStub = {
            header: 'New Test Article 2',
            body: 'New Test Article Body 2',
            logo: 'some_image2'
        };

        articleService.update(articleId, articleStub)
            .then(article => {
                expect(article).to.have.property(articleStub);
                articleId = article.url;
                done();
            })
            .catch(err => {
                done(err)
            })
    });

    it('should read an existing article', done => {
        articleService.read(articleId)
            .then(() => {
                done();
            })
            .catch(err => {
                done(err)
            })
    });

    it('should delete an existing article', done => {
        articleService.delete(articleId)
            .then(article => {
                expect(article).to.have.property({isDeleted: true});
                done();
            })
            .catch(err => {
                done(err)
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
            .catch(() => {
                done()
            })
    });

    it('should not update an non-existing article', done => {
        const articleStub = {
            header: 'New Test Article 2',
            body: 'New Test Article Body 2',
            logo: 'some_image2'
        };

        articleService.update(articleId.replace('a', 'o'), articleStub)
            .then(article => {
                done(article);
            })
            .catch(() => {
                done()
            })
    });

    it('should not read a non-existing article', done => {
        articleService.read(articleId)
            .then(article => {
                done(article);
            })
            .catch(() => {
                done()
            })
    });

    it('should not delete an non-existing article', done => {
        articleService.delete(articleId)
            .then(article => {
                done(article);
            })
            .catch(() => {
                done()
            })
    });

    it('should read existing published non-deleted articles', done => {
        articleService.read()
            .then(articles => {
                articles.forEach(article => {
                    if (article.isDeleted || !article.isPublished) {
                        done(article);
                    }
                });
                done();
            })
            .catch(err => {
                done(err)
            })
    });
});