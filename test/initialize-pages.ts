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
                {name: ["Online", "psychology"], anchor: "main"},
                {name: "Make an appointment", anchor: "appointment"},
                {name: ["Irina", "Romanenkova"], anchor: "name"},
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
                {name: ["Онлайн", "психология"], anchor: "main"},
                {name: "Записаться на приём", anchor: "appointment"},
                {name: ["Ирина", "Романенкова"], anchor: "name"},
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
                {name: ["Онлайн", "психологія"], anchor: "main"},
                {name: "Записатися на прийом", anchor: "appointment"},
                {name: ["Ірина", "Романенкова"], anchor: "name"},
                {name: "Про мене", anchor: "about"},
                {name: "Послуги", anchor: "services"},
                {name: "Дипломи", anchor: "diplomas"},
                {name: "Статті", anchor: "articles"},
                {name: "Контакти", anchor: "contacts"}
            ],
            language: 'uk',
            entityId: 'nav',
            header: 'Головне меню'
        }, {
            pageData: [
                {name: ["en ligne", "Psychologie"], anchor: "main"},
                {name: "Prendre rendez-vous", anchor: "appointment"},
                {name: ["Irina", "Romanenkova"], anchor: "name"},
                {name: "Sur moi", anchor: "about"},
                {name: "Services", anchor: "services"},
                {name: "Diplômes", anchor: "diplomas"},
                {name: "Articles", anchor: "articles"},
                {name: "Contacts", anchor: "contacts"}
            ],
            language: 'fr',
            entityId: 'nav',
            header: 'Головне меню'
        });

        return Page.find({entityId: 'main'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF MAIN CREATE');

        pagesToPush.push({
            entityId: 'main',
            header: 'Online consult of psychologist',
            language: 'en'
        }, {
            entityId: 'main',
            header: 'Онлайн консультации психолога',
            language: 'ru'
        }, {
            entityId: 'main',
            header: 'Онлайн консультації психолога',
            language: 'uk'
        }, {
            entityId: 'main',
            header: 'Psychologue en ligne',
            language: 'fr'
        });

        return Page.find({entityId: 'about'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF ABOUT CREATE');

        pagesToPush.push({
            entityId: 'about',
            header: 'About me',
            language: 'en',
            pageData: '',
            images: []
        }, {
            entityId: 'about',
            header: 'Обо мне',
            language: 'ru',
            pageData: '',
            images: []
        }, {
            entityId: 'about',
            header: 'Про мене',
            language: 'uk',
            pageData: '',
            images: []
        }, {
            entityId: 'about',
            header: 'Sur moi',
            pageData: '',
            language: 'fr',
            images: []
        });

        return Page.find({entityId: 'service'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF SERVICE CREATE');

        pagesToPush.push({
            entityId: 'service',
            header: 'Services',
            language: 'en'
        }, {
            entityId: 'service',
            header: 'Услуги',
            language: 'ru'
        }, {
            entityId: 'service',
            header: 'Послуги',
            language: 'uk'
        }, {
            entityId: 'service',
            header: 'Services',
            language: 'fr'
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
        }, {
            entityId: 'diploma',
            header: 'Diplômes',
            language: 'fr'
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
        }, {
            entityId: 'review',
            header: 'Avis',
            language: 'fr'
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
        }, {
            entityId: 'article',
            header: 'Articles',
            language: 'fr'
        });

        return Page.find({entityId: 'contacts'});
    })
    .then((pages: Array<Cursor<iPage>>): DocumentQuery<any, any> => {
        log.warning('RUN OF CONTACTS CREATE');

        pagesToPush.push({
            entityId: 'contacts',
            header: 'Contacts',
            pageData: [
                {name: "Skype", account: "ira", linkto: 'skype:ira?chat', type: 'skype'},
                {name: "Phone", account: "+380000000000", linkto: 'tel:+380000000000', type: 'phone'},
                {
                    name: "E-mail",
                    account: "infoAromanenkova.com",
                    linkto: 'mailto:infoAromanenkova.com',
                    type: 'email'
                }
            ],
            language: 'en'
        }, {
            entityId: 'contacts',
            header: 'Контакты',
            pageData: [
                {name: "Skype", account: "ira", linkto: 'skype:ira?chat', type: 'skype'},
                {name: "Телефон", account: "+380000000000", linkto: 'tel:+380000000000', type: 'phone'},
                {name: "E-mail", account: "infoAromanenkova.com", linkto: 'mailto:infoAromanenkova.com', type: 'email'}
            ],
            language: 'ru'
        }, {
            entityId: 'contacts',
            header: 'Контакти',
            pageData: [
                {name: "Skype", account: "ira", linkto: 'skype:ira?chat', type: 'skype'},
                {name: "Телефон", account: "+380000000000", linkto: 'tel:+380000000000', type: 'phone'},
                {name: "E-mail", account: "infoAromanenkova.com", linkto: 'mailto:infoAromanenkova.com', type: 'email'}
            ],
            language: 'uk'
        }, {
            entityId: 'contacts',
            header: 'Contacts',
            pageData: [
                {name: "Skype", account: "ira", linkto: 'skype:ira?chat', type: 'skype'},
                {name: "Téléphone", account: "+380000000000", linkto: 'tel:+380000000000', type: 'phone'},
                {name: "E-mail", account: "infoAromanenkova.com", linkto: 'mailto:infoAromanenkova.com', type: 'email'}
            ],
            language: 'fr'
        });

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
