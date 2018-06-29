import {iPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";
import {config} from "../server/config";
import mongoose, {DocumentQuery} from "mongoose";

const pagesToPush: Array<iPage> = [];

mongoose.connect(config.dbp)
    .then((): DocumentQuery<any, any> => {
        log.warning('RUN OF PAGES CREATE');

        return Page.find({entityId: 'main'});
    })
    .then((pages: Array<any>): DocumentQuery<any, any> => {
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
                language: 'ua'
            });
        }

        return Page.find({entityId: 'about'});
    })
    .then((pages: Array<any>): DocumentQuery<any, any> => {
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
                language: 'ua'
            });
        }

        return Page.find({entityId: 'service'});
    })
    .then((pages: Array<any>): DocumentQuery<any, any> => {
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
                language: 'ua'
            });
        }

        return Page.find({entityId: 'diploma'});
    })
    .then((pages: Array<any>): DocumentQuery<any, any> => {
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
                language: 'ua'
            });
        }

        return Page.find({entityId: 'article'});
    })
    .then((pages: Array<any>): DocumentQuery<any, any> => {
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
                language: 'ua'
            });
        }

        return Page.find({entityId: 'contacts'});
    })
    .then((pages: Array<any>): DocumentQuery<any, any> => {
        log.warning('RUN OF CONTACTS CREATE', pages.length);

        if (!pages.length) {
            pagesToPush.push({
                entityId: 'contacts',
                header: 'Contacts',
                language: 'en'
            }, {
                entityId: 'contacts',
                header: 'Контакты',
                language: 'ru'
            }, {
                entityId: 'contacts',
                header: 'Контакти',
                language: 'ua'
            });
        }

        return Page.find()
    })
    .then((data: Array<any>): Promise<mongoose.Document[] | never> => {
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
