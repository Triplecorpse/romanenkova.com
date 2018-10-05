import mongoose = require('mongoose');
import {stripStringAsync} from "../services/security-services/strip-html";
import crypto from 'crypto';

export interface IUser {
    firstName?: string;
    lastName?: string;
    nickName: string;
    email?: string;
    password?: string;
    canEditUsers: boolean;
    canCreateUsers: boolean;
    canEditArticles: boolean;
    canAddArticles: boolean;
    canApproveReviews: boolean;
    canEditContacts: boolean;
    canEditServices: boolean;
    canAddServices: boolean;
}

function validateEmail(email: string): boolean {
    return /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(email);
}

function secureHtmlString(input: string): string {
    return stripStringAsync(input);
}

function setPassword(password: string): string {
    return crypto.createHash('md5').update(password).digest('hex');
}

function getPassword(): void {

}

const schema = new mongoose.Schema({
    firstName: {type: String, set: secureHtmlString},
    lastName: {type: String, set: secureHtmlString},
    nickName: {type: String, required: true, set: secureHtmlString},
    email: {type: String, required: true, validate: validateEmail, set: secureHtmlString},
    password: {type: String, required: true, set: setPassword, get: getPassword},
    canEditUsers: {type: Boolean},
    canCreateUsers: {type: Boolean},
    canEditArticles: {type: Boolean},
    canAddArticles: {type: Boolean},
    canApproveReviews: {type: Boolean},
    canEditContacts: {type: Boolean},
    canAddServices: {type: Boolean},
    canEditServices: {type: Boolean}
});

export const User = mongoose.model('User', schema);
