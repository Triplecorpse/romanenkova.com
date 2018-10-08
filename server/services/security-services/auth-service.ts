import jwt = require('jsonwebtoken');
import {JsonWebTokenError} from 'jsonwebtoken';
import {readFile} from '../file-service';
import {checkUser} from "../db-middleware/user";

const util = require('util');

export function getToken(data: {login: string; password: string}): Promise<string> {
    if (!data || !data.login || !data.password) {
        return Promise.reject({message: 'data should have properties login and password'});
    }

    return checkUser(data.login, data.password)
        .catch((err: any) => {
            throw new Error('User doesn\'t exist');
        })
        .then((result: boolean) => readFile('./server/auth/jwtRS256.key'))
        .catch((err: any) => {
            throw new Error('Error in reading key file');
        })
        .then((file: string) => jwt.sign(data, file, {algorithm: 'RS256'}))
        .catch((err: Error) => {
            throw new Error('Cannot create token');
        });
}

export function validate(token: string): Promise<boolean> {
    if (!token) {
        return Promise.reject(new Error('Token is missing'))
    }

    return readFile('./server/auth/jwtRS256.key.pub')
        .then((file: string) => util.promisify(jwt.verify)(token, file, {algorithms: ['RS256']}))
        .then(() => {
            const payload = (jwt.decode(token, {complete: true, json: true}) as any).payload;
            return checkUser(payload.login, payload.password)
        })
        .catch((err: any) => {
            throw new Error('Error in token validation');
        });
}
