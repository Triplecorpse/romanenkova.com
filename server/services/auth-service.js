const jwt = require('jsonwebtoken');
const fs = require('fs');
const fileService = require('./file-service');

function getToken(data) {
    if (!data || !data.login || !data.password) {
        return Promise.reject({message: 'data should have properties login and password'});
    }

    return new Promise((resolve, reject) => {
        fileService.readFile('./server/auth/jwtRS256.key')
            .then(file => {
                resolve(jwt.sign(data, file, {algorithm: 'RS256'}));
            })
            .catch(err => {
                reject(Error(err));
            });
    });
}

function validate(token) {
    return new Promise((resolve, reject) => {
        fileService.readFile('./server/auth/jwtRS256.key.pub')
            .then(file => {
                jwt.verify(token, file, {algorithms: ['RS256']}, (err, decoded) => {
                    if (err) {
                        reject(Error(err));
                    } else {
                        resolve(decoded);
                    }
                });
            })
            .catch(err => {
                reject(Error(err));
            });
    });
}

module.exports = {getToken, validate};