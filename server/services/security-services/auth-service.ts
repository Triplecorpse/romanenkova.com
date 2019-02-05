import jwt = require('jsonwebtoken');
import {readFile} from '../file-service';
import {Database} from "../../../_interface/IMongooseSchema";
import {readUser} from "../db-middleware/user";

const util = require('util');

export function getToken(data: { login: string; password: string }): Promise<string> {
    let user: Database.IUser;

    if (!data || !data.login || !data.password) {
        return Promise.reject(new Error('Missing login or password.'));
    }

    return new Promise((resolve, reject) => {
        resolve('dummy')
    })
}

export function validateToken(token: string): Promise<Database.IUser> {
    if (!token) {
        return Promise.reject(new Error('Token is missing'))
    }

    return new Promise((resolve, reject) => {
        readFile('./server/auth/jwtRS256.key.pub')
            .then((file: string) => util.promisify(jwt.verify)(token, file, {algorithms: ['RS256']}))
            .then(() => {
                const payload = (jwt.decode(token, {complete: true, json: true}) as any).payload;
                resolve(readUser());
            })
            .catch((err: any) => {
                reject(new Error('Error in token validation'));
                throw new Error();
            });
    });
}
