const { Environment } = require('storj');

const storj = new Environment({
    bridgeUrl: 'https://api.storj.io',
    bridgeUser: process.env.STORJ_EMAIL,
    bridgePass: process.env.STORJ_PASSWORD,
    encryptionKey: 'This should ba a picture storage.',
    logLevel: 4
});

console.log(storj);

export default storj;