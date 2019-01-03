import jwt = require('jsonwebtoken');
import {readFile} from '../file-service';
import {checkUser} from "../db-middleware/user";
import {IUser} from "../../models/user";

const util = require('util');

export function getToken(data: { login: string; password: string }): Promise<{ token: string, user: IUser }> {
    let user: IUser;

    if (!data || !data.login || !data.password) {
        return Promise.reject(new Error('Missing login or password.'));
    }

    return new Promise((resolve, reject) => {
        checkUser(data.login, data.password)
            .catch(() => {
                reject(new Error('User with given credentials was not found.'));
                throw new Error();
            })
            .then((result: IUser) => {
                user = result;
                return readFile('./server/auth/jwtRS256.key');
            })
            .catch(() => {
                reject(new Error('Error in reading key file. Please contact your administrator.'));
                throw new Error();
            })
            .then((file: string) => {
                resolve({
                    token: jwt.sign(data, file, {algorithm: 'RS256'}),
                    user
                });
            })
            .catch(() => {
                reject(new Error('Cannot create token. Please contact your administrator.'));
                throw new Error();
            });
    })
}

export function validateToken(token: string): Promise<IUser> {
    if (!token) {
        return Promise.reject(new Error('Token is missing'))
    }

    return new Promise((resolve, reject) => {
        readFile('./server/auth/jwtRS256.key.pub')
            .then((file: string) => util.promisify(jwt.verify)(token, file, {algorithms: ['RS256']}))
            .then(() => {
                const payload = (jwt.decode(token, {complete: true, json: true}) as any).payload;
                resolve(checkUser(payload.login, payload.password));
            })
            .catch((err: any) => {
                reject(new Error('Error in token validation'));
                throw new Error();
            });
    });
}
