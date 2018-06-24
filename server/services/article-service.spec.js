const articleService = require('./article-service');
const expect = require('chai').expect;

describe('Article Service', function () {
    let token;
    let articleId;

    before(done => {
        authService.getToken({login: 'Triplecorpse', password: 'Password'})
            .then(data => {
                token = data;
                done();
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
});