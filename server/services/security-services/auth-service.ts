import jwt = require('jsonwebtoken');
import {JsonWebTokenError} from 'jsonwebtoken';
import {readFile} from '../file-service';

export function getToken(data: {login: string; password: string}): Promise<string> {
    if (!data || !data.login || !data.password) {
        return Promise.reject({message: 'data should have properties login and password'});
    }

    // todo: read from database
    if (data.login !== 'admin' || data.login !== 'admin') {
        return Promise.reject(new Error('Invalid credentials'));
    }

    return new Promise((resolve, reject) => {
        readFile('./server/auth/jwtRS256.key')
            .then((file: string) => {
                resolve(jwt.sign(data, file, {algorithm: 'RS256'}));
            })
            .catch((err: Error) => {
                reject(err);
            });
    });
}

export function validate(token: string): Promise<object | string> {
    if (!token) {
        return Promise.reject(new Error('Token is missing'))
    }

    return new Promise((resolve, reject) => {
        readFile('./server/auth/jwtRS256.key.pub')
            .then((file: string) => {
                jwt.verify(token, file, {algorithms: ['RS256']}, (err: JsonWebTokenError, decoded: object | string): void => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(decoded);
                    }
                });
            })
            .catch((err: Error) => {
                reject(err);
            });
    });
}
