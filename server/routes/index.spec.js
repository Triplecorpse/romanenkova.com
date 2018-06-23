const index = require('./index');
const expect = require('chai').expect;
const server = require('./../server.js');
const config = require('./../config.js');
const request = require('supertest');

describe('Server', function () {
    let app;

    before((done) => {
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

    it('should return a string on login path', (done) => {
        request(server)
            .post('/login')
            .send({login: 'john', password: 'pwd'})
            .expect(200, (err, res) => {
                if (err) {
                    return done(err);
                }
                expect(res.body.success).to.be.true;
                done();
            });
    })
});
