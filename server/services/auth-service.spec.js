const authService = require('./auth-service');
const expect = require('chai').expect;

describe('Auth Service', function () {
    let token;

    it('should give token on valid data', (done) => {
        authService.getToken({login: 'Triplecorpse', password: 'Password'})
            .then(data => {
                expect(data).to.be.string;
                expect(data.length).to.equal(805);
                token = data;
                done();
            })
            .catch(err => {
                done(err);
            })
    });

    it('should throw an error on invalid data', (done) => {
        authService.getToken({ligin: 'Triplecorpse', password: 'Password'})
            .then(data => {
                done(data);
            })
            .catch(() => {
                done();
            })
    });

    it('should validate valid token', (done) => {
        authService.validate(token)
            .then(data => {
                expect(data.message).to.be.string;
                done();
            })
            .catch(err => {
                done(err);
            })
    });

    it('should not validate invalid token', (done) => {
        authService.validate(token.replace('o', 'a'))
            .then(data => {
                done(data);
            })
            .catch(err => {
                expect(err.message).to.be.string;
                done();
            })
    });
});