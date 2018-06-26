const articleLanguageService = require('./article-language-container-service');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('../../config');

describe('Article Language Container Service', function () {
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
        mongoose.connection.db.dropCollection('articlelanguagecontainers');
        mongoose.disconnect()
            .then(() => {
                done()
            })
            .catch(err => {
                done(err);
            })
    });

    describe('CREATE', () => {
        it('should create container with given parameters', done => {
            articleLanguageService.create('container')
                .then(container => {
                    expect(container.name).to.be.equal('container');
                    languageContainerId = container.id;
                    done();
                })
                .catch(err => {
                    done(err);
                })
        });

        it('should reject creating container if name is not specified', done => {});
    });

    describe('UPDATE', () => {
        it('should update container with given parameters', done => {});

        it('should reject updating container if name is not specified', done => {});

        it('should reject updating container if id is not specified', done => {});

        it('should reject updating container if a container with current id was not found', done => {});
    });

    describe('READ', () => {
        it('should read container with specified id', done => {});

        it('should read all the containers', done => {});

        it('should reject reading container if id is not specified', done => {});

        it('should reject reading container if a container with current id was not found', done => {});
    });

    describe('DELETE', () => {
        it('should delete a container with given parameters', done => {
            articleLanguageService.remove(languageContainerId)
                .then(result => {
                    expect(result.n).to.be.equal(1);
                    done()
                })
                .catch(err => {
                    done(err);
                })
        });

        it('should reject deleting a container if id is not specified', done => {});

        it('should reject deleting a container if a container with current id was not found', done => {});
    });
});
