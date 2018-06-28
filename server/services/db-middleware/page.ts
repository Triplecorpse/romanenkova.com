import mongoose from 'mongoose';
import log from './../log-service';
import {iPage, model as Page} from '../../models/page';

export function read(): any {
}

export function update(): any {
}

(() => {
    const pages: Array<iPage> = [];
    log.warning('RUN OF PAGES CREATE');

    const mainQ = Page.find({entityId: 'main'})
        .then((pages: Array<any>) => {
            if (!pages.length) {
                pages.push({
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
        });

    const aboutQ = Page.find({entityId: 'about'})
        .then((pages: Array<any>) => {
            if (!pages.length) {
                pages.push({
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
        });

    const serviceQ = Page.find({entityId: 'service'})
        .then((pages: Array<any>) => {
            if (!pages.length) {
                pages.push({
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
        });

    const diplomaQ = Page.find({entityId: 'diploma'})
        .then((pages: Array<any>) => {
            if (!pages.length) {
                pages.push({
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
        });

    const articleQ = Page.find({entityId: 'article'})
        .then((pages: Array<any>) => {
            if (!pages.length) {
                pages.push({
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
        });

    const contactsQ = Page.find({entityId: 'article'})
        .then((pages: Array<any>) => {
            if (!pages.length) {
                pages.push({
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
        });

    Page.find()
        .then(data => {
            if (data && data.length && pages.length) {
                log.error('Some data found in pages, for security reasons delete it by hand. No overwrite will be performed');
                return Promise.reject();
            }

            return Page.insertMany(pages);
        })
        .then(data => {
            log.info('Save of default pages was succeded');
        })
})();