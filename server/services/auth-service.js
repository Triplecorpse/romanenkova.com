const jwt = require('jsonwebtoken');
const fs = require('fs');

function getToken() {
    return new Promise (executor);

    function executor(resolve, reject) {
        fs.readFile('server/auth/id_rsa', (err, file) => {
            if (err) {
                reject(err)
            } else {
                resolve(jwt.sign({ foo: 'bar' }, file, { algorithm: 'RS256'}));
            }
        });
    }
}

module.exports = {getToken};