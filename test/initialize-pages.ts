require('dotenv').config();

import {iPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";
import mongoose, {DocumentQuery} from "mongoose";
import {Cursor} from "mongodb";

const pagesToPush: Array<iPage> = [];
let skipped: number = 0;

console.log('process.env.MONGODB_URI', process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI as string)
    .then((): DocumentQuery<any, any> => {
        log.warning('REMOVING OLD PAGES');

        return Page.deleteMany({entityId: /nav|main|service|diploma|article/});
    })
    .then((removed: any): DocumentQuery<any, any> => {
        log.warning('REMOVED', JSON.stringify(removed));
        log.warning('RUN OF PAGES CREATE');

        return Page.find({entityId: 'nav'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF NAVIGATION CREATE');

        pagesToPush.push({
            pageData: [
                {name: "Online psychology", anchor: "main"},
                {name: "Make an appointment", anchor: "appointment"},
                {name: "About me", anchor: "about"},
                {name: "Services", anchor: "services"},
                {name: "Diplomas", anchor: "diplomas"},
                {name: "Articles", anchor: "articles"},
                {name: "Contacts", anchor: "contacts"}
            ],
            language: 'en',
            entityId: 'nav',
            header: 'Main menu'
        }, {
            pageData: [
                {name: "Онлайн психология", anchor: "main"},
                {name: "Записаться на приём", anchor: "appointment"},
                {name: "Обо мне", anchor: "about"},
                {name: "Услуги", anchor: "services"},
                {name: "Дипломы", anchor: "diplomas"},
                {name: "Статьи", anchor: "articles"},
                {name: "Контакты", anchor: "contacts"}
            ],
            language: 'ru',
            entityId: 'nav',
            header: 'Главное меню'
        }, {
            pageData: [
                {name: "Онлайн психологія", anchor: "main"},
                {name: "Записатися на прийом", anchor: "appointment"},
                {name: "Про мене", anchor: "about"},
                {name: "Послуги", anchor: "services"},
                {name: "Дипломи", anchor: "diplomas"},
                {name: "Статті", anchor: "articles"},
                {name: "Контакти", anchor: "contacts"}
            ],
            language: 'uk',
            entityId: 'nav',
            header: 'Головне меню'
        });

        return Page.find({entityId: 'main'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF MAIN CREATE');

        pagesToPush.push({
            entityId: 'main',
            header: 'Online consult',
            language: 'en'
        }, {
            entityId: 'main',
            header: 'Онлайн консультации психолога',
            language: 'ru'
        }, {
            entityId: 'main',
            header: 'Онлайн консультації психолога',
            language: 'uk'
        });

        return Page.find({entityId: 'about'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF ABOUT CREATE');

        if (!pages.length) {
            pagesToPush.push({
                entityId: 'about',
                header: 'About me',
                pageData: 'To be filled',
                language: 'en',
                images: ['i']
            }, {
                entityId: 'about',
                header: 'Обо мне',
                pageData: 'Будет заполнено',
                language: 'ru',
                images: ['i']
            }, {
                entityId: 'about',
                header: 'Про мене',
                pageData: 'Буде заповнено',
                language: 'uk',
                images: ['i']
            });
        } else {
            skipped += 3;
        }

        return Page.find({entityId: 'service'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF SERVICE CREATE');

        pagesToPush.push({
            entityId: 'service',
            header: 'Service',
            language: 'en'
        }, {
            entityId: 'service',
            header: 'Услуги',
            language: 'ru'
        }, {
            entityId: 'service',
            header: 'Послуги',
            language: 'uk'
        });

        return Page.find({entityId: 'diploma'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF DIPLOMA CREATE');

        pagesToPush.push({
            entityId: 'diploma',
            header: 'Diplomas',
            language: 'en'
        }, {
            entityId: 'diploma',
            header: 'Дипломы',
            language: 'ru'
        }, {
            entityId: 'diploma',
            header: 'Дипломи',
            language: 'uk'
        });

        return Page.find({entityId: 'review'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF REVIEW CREATE');

        pagesToPush.push({
            entityId: 'review',
            header: 'Reviews',
            language: 'en'
        }, {
            entityId: 'review',
            header: 'Reviews',
            language: 'ru'
        }, {
            entityId: 'review',
            header: 'Reviews',
            language: 'uk'
        });

        return Page.find({entityId: 'article'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF ARTICLE CREATE');

        pagesToPush.push({
            entityId: 'article',
            header: 'Articles',
            language: 'en'
        }, {
            entityId: 'article',
            header: 'Статьи',
            language: 'ru'
        }, {
            entityId: 'article',
            header: 'Статті',
            language: 'uk'
        });

        return Page.find({entityId: 'contacts'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF CONTACTS CREATE');

        if (!pages.length) {
            pagesToPush.push({
                entityId: 'contacts',
                header: 'Contacts',
                pageData: [
                    {name: "Skype", account: "ira", linkto: 'skype:'},
                    {name: "Phone", account: "+380000000000", linkto: 'callto:'},
                    {name: "E-mail", account: "info@romanenkova.com", linkto: 'mailto:'}
                ],
                language: 'en'
            }, {
                entityId: 'contacts',
                header: 'Контакты',
                pageData: [
                    {name: "Skype", account: "ira", linkto: 'skype:'},
                    {name: "Телефон", account: "+380000000000", linkto: 'callto:'},
                    {name: "E-mail", account: "info@romanenkova.com", linkto: 'mailto:'}
                ],
                language: 'ru'
            }, {
                entityId: 'contacts',
                header: 'Контакти',
                pageData: [
                    {name: "Skype", account: "ira", linkto: 'skype:'},
                    {name: "Телефон", account: "+380000000000", linkto: 'callto:'},
                    {name: "E-mail", account: "info@romanenkova.com", linkto: 'mailto:'}
                ],
                language: 'uk'
            });
        } else {
            skipped += 3;
        }

        return Page.find()
    })
    .then((data: Array<Cursor<iPage>>): Promise<mongoose.Document[] | never> => {
        if (data && data.length && !pagesToPush.length) {
            log.error('Some data found in pages, for security reasons delete it by hand. No overwrite will be performed');
            return Promise.reject();
        }

        return Page.insertMany(pagesToPush);
    })
    .then((data: Array<any>): Promise<void> => {
        log.info(`CREATED:`);
        log.info(`  ${data.length} DOCUMENTS`);

        log.info(`SKIPPED:`);
        log.info(`  ${skipped} DOCUMENTS`);

        return mongoose.disconnect();
    });
