const articleLanguageService = require('./language-container-service');
const expect = require('chai').expect;
const mongoose = require('mongoose');
const config = require('../../config');

describe('Article Language Container Service', () => {
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

        it('should reject creating container if name is not specified', done => {
            articleLanguageService.create()
                .then(container => {
                    done(container);
                })
                .catch(err => {
                    expect(err.message).to.equal('Language container should have a name');
                    done();
                })
        });
    });

    describe('UPDATE', () => {
        it('should update container with given parameters', done => {
            const name = 'new container name';
            const ru = 'ru';

            articleLanguageService.update(languageContainerId, {name, ru})
                .then(container => {
                    expect(container).to.deep.include({name, ru});
                    done();
                })
                .catch(err => {
                    done(err);
                })
        });

        it('should reject updating container if body is empty', done => {
            articleLanguageService.update(languageContainerId, {})
                .then(() => {
                    done(1);
                })
                .catch(err => {
                    expect(err.message).to.equal('Container update should have body');
                    done();
                })
        });

        it('should reject updating container if id is not specified', done => {
            articleLanguageService.update(null, {})
                .then(() => {
                    done(1);
                })
                .catch(err => {
                    expect(err.message).to.equal('Container update should have id');
                    done();
                })
        });

        it('should reject updating container if a container with current id was not found', done => {
            articleLanguageService.update('5b3264eebc6a4001bc47bc6b', {name: 'tratata'})
                .then(() => {
                    done(1);
                })
                .catch(err => {
                    expect(err.message).to.equal('Container with given id was not found');
                    done();
                })
        });
    });

    describe('READ', () => {
        it('should read container with specified id', done => {
            articleLanguageService.read(languageContainerId)
                .then(container => {
                    expect(container._id.toString()).to.equal(languageContainerId);
                    done();
                })
                .catch(err => {
                    done(err);
                })
        });

        it('should read all the containers', done => {
            articleLanguageService.read()
                .then(containers => {
                    expect(containers).to.be.an('array');
                    done();
                })
                .catch(err => {
                    done(err);
                })
        });

        it('should reject reading container if a container with current id was not found', done => {
            articleLanguageService.read('5b3264eebc6a4001bc47bc6b')
                .then(() => {
                    done(1);
                })
                .catch(err => {
                    expect(err.message).to.equal('Container with id 5b3264eebc6a4001bc47bc6b was not found');
                    done();
                })
        });
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

        it('should reject deleting a container if id is not specified', done => {
            articleLanguageService.remove()
                .then(() => {
                    done(1)
                })
                .catch(err => {
                    expect(err.message).to.equal('Container delete should have an Id');
                    done();
                })
        });

        it('should reject deleting a container if a container with current id was not found', done => {
            articleLanguageService.remove('5b3264eebc6a4001bc47bc6b')
                .then(() => {
                    done(1)
                })
                .catch(err => {
                    expect(err.message).to.equal('Container with id 5b3264eebc6a4001bc47bc6b was not found');
                    done();
                })
        });
    });
});
