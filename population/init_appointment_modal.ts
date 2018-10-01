require('dotenv').config();

import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getAppointmentModalPageData(): Promise<Array<IPage>> {
    const data = [
        {
            entityId: '[modal] appointment',
            header: 'Make an appointment',
            pageData: {
                name: 'First and last names',
                phone: 'Phone',
                email: 'Email',
                date: 'Date (DD.MM.YYYY)',
                time: 'Time',
                service: 'Service',
                message: 'Message',
                checkbox: 'Mark this checkbox',
                submit: 'OK',
                instructions: 'Required fields: name and any contact information.',
                explanation: 'No personal data entered in this form is stored on the site or transmitted to third parties for promotional purposes. Contact information is used only for contact with you and is saved only in my personal mail box.',
                dayLabels: {mo: 'mo', tu: 'tu', we: 'we', th: 'th', fr: 'fr', sa: 'sa', su: 'su'},
                monthLabels: {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'September', 10: 'October', 11: 'November', 12: 'December' }
            },
            language: 'en'
        }, {
            entityId: '[modal] appointment',
            header: 'Записаться на приём',
            pageData: {
                name: 'Имя и фамилия',
                phone: 'Телефон',
                email: 'Email',
                date: 'Дата',
                time: 'Время',
                service: 'Вид консультации',
                message: 'Сообщение',
                checkbox: 'С правилами сайта ознакомлен',
                submit: 'Записаться',
                instructions: 'Необходимые поля: имя и любая контактная информация.',
                explanation: 'Никакие личные данные, введённые в этой форме, не сохраняются на сайте и не передаются третьим лицам в рекламных целях. Контактная информация используется только для контакта с вами и сохраняется только в моём личном почтовом ящике.',
                dayLabels: {mo: 'пн', tu: 'вт', we: 'ср', th: 'чт', fr: 'пт', sa: 'сб', su: 'вс'},
                monthLabels: {1: 'Январь', 2: 'Февраль', 3: 'Март', 4: 'Апрель', 5: 'Май', 6: 'Июнь', 7: 'Июль', 8: 'Август', 9: 'Сентябрь', 10: 'Октябрь', 11: 'Ноябрь', 12: 'Декабрь' }
            },
            language: 'ru'
        }, {
            entityId: '[modal] appointment',
            header: 'Записатися на прийом',
            pageData: {
                name: 'Ім\'я та прізвище',
                phone: 'Телефон',
                email: 'Email',
                date: 'Дата',
                time: 'Час',
                service: 'Сервіс',
                message: 'Повідомлення',
                checkbox: 'З правилами ознайомлений',
                submit: 'Записатися',
                instructions: 'Необхідні поля: ім\'я та будь-яка контактна інформація.',
                explanation: 'Ніякі особисті дані, які були введені у цій формі, не зберігаються на сайті і не передаються третім особам у рекламних цілях. Контактна інформація використовується тільки для контакта з вамиі зберігається тільки у моїй особистій поштовій скринці.',
                dayLabels: {mo: 'пн', tu: 'вт', we: 'ср', th: 'чт', fr: 'пт', sa: 'сб', su: 'нд'},
                monthLabels: {1: 'Січень', 2: 'Лютий', 3: 'Березень', 4: 'Квітень', 5: 'Травень', 6: 'Червень', 7: 'Липень', 8: 'Серпень', 9: 'Вересень', 10: 'Жовтень', 11: 'Листопад', 12: 'Грудень' }
            },
            language: 'uk'
        }, {
            entityId: '[modal] appointment',
            header: 'Prendre rendez-vous',
            pageData: {
                name: 'Nom et prénom',
                phone: 'Numéro de téléphone',
                email: 'Email',
                date: 'Date',
                time: 'Heure',
                service: 'Type de consultation',
                message: 'Votre message',
                checkbox: 'Je lis les règles du site',
                submit: 'S\'inscrire',
                instructions: 'Champs obligatoires: nom et informations de contact.',
                explanation: 'Aucune donnée personnelle saisie dans ce formulaire n\'est stockée sur le site ou transmise à des tiers à des fins promotionnelles. Les informations de contact ne sont utilisées que pour vous contacter et sont enregistrées uniquement dans ma boîte aux lettres personnelle.',
                dayLabels: {mo: 'lu', tu: 'ma', we: 'me', th: 'je', fr: 've', sa: 'sa', su: 'di'},
                monthLabels: {1: 'Janvier', 2: 'Fevrier', 3: 'Mars', 4: 'Avril', 5: 'Mai', 6: 'Juin', 7: 'Juillet', 8: 'Aout', 9: 'Septembre', 10: 'Octobre', 11: 'Novembre', 12: 'Decembre' }
            },
            language: 'fr'
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: '[modal] appointment'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: modalappointment', result.n, 'pages');
                resolve(data);
            })
            .catch(() => {
                resolve(data);
            });
    })
}
