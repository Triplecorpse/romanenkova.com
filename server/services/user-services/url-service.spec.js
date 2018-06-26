const urlService = require('./url-service');
const expect = require('chai').expect;

describe('URL SERVICE', () => {
    it('should encode string with special characters', () => {
        const encoded = urlService.encode('askj d92457*()*)#%&@*#_)sdfsdf');
        expect(encoded).to.equal('askj-d92457-sdfsdf');
    });

    it('should encode string with cyrillic characters', () => {
        const encoded = urlService.encode('вааффіва897фів іфвлод івф');
        expect(encoded).to.equal('vaaffiva897fiv-ifvlod-ifd');
    });
});