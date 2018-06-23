const fileService = require('./file-service');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Auth Service', function () {
    it('should read existing text file', (done) => {
        fileService.readFile('./server/services/file-service.spec.js')
            .then(data => {
                assert(data.includes('file-service.js'), 'this file should include expected text data');
                done();
            })
            .catch(err => {
                done(err);
            })
    });

    it('should throw an error if file is not exist', (done) => {
        fileService.readFile('./server/services/file-services.spec.js')
            .then(data => {
                done(data);
            })
            .catch(() => {
                done();
            })
    });
});