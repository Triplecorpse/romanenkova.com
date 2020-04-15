import mongoose = require('mongoose');
import IUser = Database.IUser;
import {stripString} from '../services/security-services/strip-html';
import * as crypto from 'crypto';
import {Database} from '../../_interface/IMongooseSchema';

function validateEmail(email: string): boolean {
    return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(email);
}

function secureHtmlString(input: string): string {
    return stripString(input);
}

function setPassword(password: string): string {
    return crypto.createHash('md5').update(password).digest('hex');
}

export function isPasswordCorrect(user: IUser, password: string) {
  const hashed = crypto.createHash('md5').update(password).digest('hex');

  return hashed === user.password;
}

const schema = new mongoose.Schema({
    firstName: {type: String, set: secureHtmlString},
    lastName: {type: String, set: secureHtmlString},
    login: {type: String, required: true, set: secureHtmlString},
    email: {type: String, required: true, validate: validateEmail, set: secureHtmlString},
    password: {type: String, required: true, set: setPassword},
    canEditUsers: {type: Boolean},
    canCreateUsers: {type: Boolean},
    canEditArticles: {type: Boolean},
    canAddArticles: {type: Boolean},
    canApproveReviews: {type: Boolean},
    canEditContacts: {type: Boolean},
    canAddServices: {type: Boolean},
    canEditServices: {type: Boolean},
    isFirstLogin: {type: Boolean, default: true}
});

export const User = mongoose.model('User', schema);
