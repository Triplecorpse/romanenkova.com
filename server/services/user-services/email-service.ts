import IMail from "../../interfaces/iMail";

require('dotenv').config();

const apiKey: string = process.env.MAILGUN_API_KEY as string;
const domain: string = 'mail.romanenkova.com';
const mailgun = require('mailgun-js')({apiKey, domain, host: 'api.eu.mailgun.net'});
import {readFile} from "../file-service";
import {IAppointment} from "../../interfaces/iAppointment";

export function sendEmail(message: IMail): Promise<any> {
    message.from = message.from || 'Irina Romanenkova <info@romanenkova.com>';

    if (!message.to) {
        return Promise.reject(new Error('Email should have TO filed'));
    }

    return new Promise((resolve: (V: any) => void, reject: (V: any) => void) => {
        mailgun.messages().send(message, function (error: any, body: any) {
            if (error || !body) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
}

export function getHtmlLetter(appointmentData: IAppointment): Promise<string> {
    return readFile('./assets/appointment.tpl.html')
        .then((file: string) => {
            return file
                .replace('@name', appointmentData.name)
                .replace('@otherData', JSON.stringify(appointmentData))
        })
}