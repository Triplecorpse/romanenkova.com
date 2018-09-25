import IMail from "../../interfaces/iMail";
require('dotenv').config();

const apiKey: string = process.env.MAILGUN_API_KEY as string;
const domain: string = 'mail.romanenkova.com';
const mailgun = require('mailgun-js')({apiKey, domain, host: 'api.eu.mailgun.net'});

export function sendEmail(message: IMail) {
    message.from = message.from || 'Irina Romanenkova <info@romanenkova.com>';

    if (!message.to) {
        return Promise.reject(new Error('Email should have TO filed'));
    }

    return new Promise((resolve, reject) => {
        mailgun.messages().send(message, function (error: any, body: any) {
            if (error || !body) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
}
