const expect = require('chai').expect;
const server = require('./../server/server.js');
const config = require('./../server/config.js');
const request = require('supertest');
const mongoose = require('mongoose');

describe('Server', function () {
    let app;

    before(function (done) {
        app = server.listen(function (err) {
            if (err) {
                return done(err);
            }
            done();
        });
    });
    after(() => {
        app.close();
    });

    it('should be healthy', (done) => {
        request(server)
            .get('/health')
            .expect(200, (err, res) => {
                if (err) {
                    return done(err);
                }
                expect(typeof res.body.h).to.be.a('string');
                done();
            });
    });

    it('should have root path', (done) => {
        request(server)
            .get('/')
            .expect(200, (err) => {
                if (err) {
                    return done(err);
                }
                done();
            });
    });

    it('should connect and disconnect the database', function (done) {
        mongoose.connect(config.db)
            .then(() => {
                mongoose.disconnect();
                mongoose.connection.on('close', () => {
                    done();
                })
            })
            .catch(err => {
                done(err);
            })
    });

    it('should return a string on login path', (done) => {
        request(server)
            .post('/login')
            .expect(200, (err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.body.success).to.be.true;
                done();
            });
    })
});