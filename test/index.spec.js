const expect = require('chai').expect;
const server = require('./../server/server.js');
const request = require('supertest');

describe('Server', function () {
    let app;
    before(function(done) {
        app = server.listen(function(err) {
            if (err) { return done(err); }
            done();
        });
    });
    after(() => {
        app.close();
    });

    it('should be healthy', function (done) {
        request(server)
            .get('/health')
            .expect(200, function (err, res) {
                if (err) {
                    return done(err);
                }
                expect(typeof res.body.h).to.be.a('string');
                done();
            });
    });

});