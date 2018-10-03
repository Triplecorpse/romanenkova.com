import {Service} from "../server/models/service";

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
                tooltips: {
                    name: 'Required.',
                    phone: '',
                    email: '',
                    date: '',
                    time: '',
                    service: '',
                    message: ''
                },
                selectClear: 'Clear selection'
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
                tooltips: {
                    name: 'Обязательное поле. Напишите ваше имя.',
                    phone: 'Обязательное поле 1 из 3: телефон, электронная почта или любые другие контакты в сообщении. Нужно для связи с вами.',
                    email: 'Обязательное поле 1 из 3: телефон, электронная почта или любые другие контакты в сообщении. Нужно для связи с вами. Если заполнено, то на эту почту придёт письмо с уведомлением о записи.',
                    date: 'Предполагаемая дата ознакомительного сеанса.',
                    time: 'Предполагаемое время ознакомительного сеанса.',
                    service: 'Вид сеанса.',
                    message: 'Обязательное поле 1 из 3: телефон, электронная почта или любые другие контакты в сообщении. Нужно для связи с вами и/или для дополнительной информации (например, по номеру телефона писать в Вайбер или Телеграм).'
                },
                selectClear: 'Очистить выбор\n'
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
                tooltips: {
                    name: 'Required.',
                    phone: '',
                    email: '',
                    date: '',
                    time: '',
                    service: '',
                    message: ''
                },
                selectClear: 'Очистити вибір'
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
                tooltips: {
                    name: 'Required.',
                    phone: '',
                    email: '',
                    date: '',
                    time: '',
                    service: '',
                    message: ''
                },
                selectClear: 'Effacer la sélection'
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
            .catch((err: any) => {
                reject(err);
            });
    })
}
