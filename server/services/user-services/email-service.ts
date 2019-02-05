import IMail from "../../interfaces/iMail";

require('dotenv').config();

const apiKey: string = process.env.MAILGUN_API_KEY as string;
const domain: string = 'mail.romanenkova.com';
const mailgun = require('mailgun-js')({apiKey, domain, host: 'api.eu.mailgun.net'});
import {readFile} from "../file-service";
import {IAppointment} from "../../interfaces/iAppointment";

export function sendEmail(message: IMail): Promise<any> {
    message.from = message.from || 'Iryna Romanenkova <info@romanenkova.com>';

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

export async function getHtmlLetter(tplName: string, ctx: any): Promise<string> {
    let tpl = await readFile(`./server/assets/${tplName}.tpl.html`);

    for (let i in ctx) {
      if (!ctx.hasOwnProperty(i)) {
        continue;
      }

      if (ctx[i]) {
        tpl = tpl.replace(new RegExp(`(#@${i})`, 'g'), ctx[i]);
      } else {
        tpl = tpl.replace(new RegExp(`(#@${i})`, 'g'), 'n/a');
      }
    }

    tpl = tpl.replace(new RegExp(`(#@[a-zA-Z0-9]+)`, 'g'), 'n/a');

    return tpl;
}
