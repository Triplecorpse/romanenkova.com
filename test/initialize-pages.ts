import {iPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";
import {config} from "../server/config";
import mongoose, {DocumentQuery} from "mongoose";
import {Cursor} from "mongodb";

const pagesToPush: Array<iPage> = [];

mongoose.connect(config.dbp)
    .then((): DocumentQuery<any, any> => {
        log.warning('RUN OF PAGES CREATE');

        return Page.find({entityId: 'nav'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF NAVIGATION CREATE', pages.length);

        pagesToPush.push({
            body: JSON.stringify([
                    {name: "Online psychology", anchor: "main"},
                    {name: "About me", anchor: "about"},
                    {name: "Services", anchor: "services"},
                    {name: "Diplomas", anchor: "diplomas"},
                    {name: "Articles", anchor: "articles"},
                    {name: "Contacts", anchor: "contacts"}
                ]),
            language: 'en',
            entityId: 'nav'
        }, {
            body: JSON.stringify([
                    {name: "Онлайн психология", anchor: "main"},
                    {name: "Обо мне", anchor: "about"},
                    {name: "Услуги", anchor: "services"},
                    {name: "Дипломы", anchor: "diplomas"},
                    {name: "Статьи", anchor: "articles"},
                    {name: "Контакты", anchor: "contacts"}
                ]),
            language: 'ru',
            entityId: 'nav'
        }, {
            body: JSON.stringify([
                    {name: "Онлайн психологія", anchor: "main"},
                    {name: "Про мене", anchor: "about"},
                    {name: "Послуги", anchor: "services"},
                    {name: "Дипломи", anchor: "diplomas"},
                    {name: "Статті", anchor: "articles"},
                    {name: "Контакти", anchor: "contacts"},
                ]),
            language: 'uk',
            entityId: 'nav'
        });

        return Page.find({entityId: 'main'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF MAIN CREATE', pages.length);

        if (!pages.length) {
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
        }

        return Page.find({entityId: 'about'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF ABOUT CREATE', pages.length);

        if (!pages.length) {
            pagesToPush.push({
                entityId: 'about',
                header: 'About',
                body: 'To be filled',
                language: 'en'
            }, {
                entityId: 'about',
                header: 'Обо мне',
                body: 'Будет заполнено',
                language: 'ru'
            }, {
                entityId: 'about',
                header: 'Про мене',
                body: 'Буде заповнено',
                language: 'uk'
            });
        }

        return Page.find({entityId: 'service'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF SERVICE CREATE', pages.length);

        if (!pages.length) {
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
        }

        return Page.find({entityId: 'diploma'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF DIPLOMA CREATE', pages.length);

        if (!pages.length) {
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
        }

        return Page.find({entityId: 'article'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF ARTICLE CREATE', pages.length);

        if (!pages.length) {
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
        }

        return Page.find({entityId: 'contacts'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF CONTACTS CREATE', pages.length);

        if (!pages.length) {
            pagesToPush.push({
                entityId: 'contacts',
                header: 'Contacts',
                body: '[{name: "Skype", account: "ira"}, {name: "Phone", account: "+380000000000"}, {name: "E-mail", account: "info@romanenkova.com"}]',
                language: 'en'
            }, {
                entityId: 'contacts',
                header: 'Контакты',
                body: '[{name: "Skype", account: "ira"}, {name: "Телефон", account: "+380000000000"}, {name: "E-mail", account: "info@romanenkova.com"}]',
                language: 'ru'
            }, {
                entityId: 'contacts',
                header: 'Контакти',
                body: '[{name: "Skype", account: "ira"}, {name: "Телефон", account: "+380000000000"}, {name: "E-mail", account: "info@romanenkova.com"}]',
                language: 'uk'
            });
        }

        return Page.find()
    })
    .then((data: Array<Cursor<iPage>>): Promise<mongoose.Document[] | never> => {
        if (data && data.length && pagesToPush.length) {
            log.error('Some data found in pages, for security reasons delete it by hand. No overwrite will be performed');
            return Promise.reject();
        }

        return Page.insertMany(pagesToPush);
    })
    .then((data: Array<any>): Promise<void> => {
        log.info('PAGES THAT WERE SAVED', data);

        return mongoose.disconnect();
    });
