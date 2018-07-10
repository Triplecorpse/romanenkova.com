"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const file_service_1 = require("../file-service");
function getToken(data) {
    if (!data || !data.login || !data.password) {
        return Promise.reject({ message: 'data should have properties login and password' });
    }
    return new Promise((resolve, reject) => {
        file_service_1.readFile('./server/auth/jwtRS256.key')
            .then((file) => {
            resolve(jwt.sign(data, file, { algorithm: 'RS256' }));
        })
            .catch((err) => {
            reject(err);
        });
    });
}
exports.getToken = getToken;
function validate(token) {
    return new Promise((resolve, reject) => {
        file_service_1.readFile('./server/auth/jwtRS256.key.pub')
            .then((file) => {
            jwt.verify(token, file, { algorithms: ['RS256'] }, (err, decoded) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(decoded);
                }
            });
        })
            .catch((err) => {
            reject(err);
        });
    });
}
exports.validate = validate;
