"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_1 = require("../server/models/page");
const log_service_1 = __importDefault(require("../server/services/log-service"));
const config_1 = require("../server/config");
const mongoose_1 = __importDefault(require("mongoose"));
const pagesToPush = [];
let skipped = 0;
mongoose_1.default.connect(config_1.config.dbp)
    .then(() => {
    log_service_1.default.warning('RUN OF PAGES CREATE');
    return page_1.model.find({ entityId: 'nav' });
})
    .then((pages) => {
    log_service_1.default.warning('RUN OF NAVIGATION CREATE');
    pagesToPush.push({
        body: JSON.stringify([
            { name: "Online psychology", anchor: "main" },
            { name: "About me", anchor: "about" },
            { name: "Services", anchor: "services" },
            { name: "Diplomas", anchor: "diplomas" },
            { name: "Articles", anchor: "articles" },
            { name: "Contacts", anchor: "contacts" }
        ]),
        language: 'en',
        entityId: 'nav'
    }, {
        body: JSON.stringify([
            { name: "Онлайн психология", anchor: "main" },
            { name: "Обо мне", anchor: "about" },
            { name: "Услуги", anchor: "services" },
            { name: "Дипломы", anchor: "diplomas" },
            { name: "Статьи", anchor: "articles" },
            { name: "Контакты", anchor: "contacts" }
        ]),
        language: 'ru',
        entityId: 'nav'
    }, {
        body: JSON.stringify([
            { name: "Онлайн психологія", anchor: "main" },
            { name: "Про мене", anchor: "about" },
            { name: "Послуги", anchor: "services" },
            { name: "Дипломи", anchor: "diplomas" },
            { name: "Статті", anchor: "articles" },
            { name: "Контакти", anchor: "contacts" },
        ]),
        language: 'uk',
        entityId: 'nav'
    });
    return page_1.model.find({ entityId: 'main' });
})
    .then((pages) => {
    log_service_1.default.warning('RUN OF MAIN CREATE');
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
    else {
        skipped += 3;
    }
    return page_1.model.find({ entityId: 'about' });
})
    .then((pages) => {
    log_service_1.default.warning('RUN OF ABOUT CREATE');
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
    else {
        skipped += 3;
    }
    return page_1.model.find({ entityId: 'service' });
})
    .then((pages) => {
    log_service_1.default.warning('RUN OF SERVICE CREATE');
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
    else {
        skipped += 3;
    }
    return page_1.model.find({ entityId: 'diploma' });
})
    .then((pages) => {
    log_service_1.default.warning('RUN OF DIPLOMA CREATE');
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
    else {
        skipped += 3;
    }
    return page_1.model.find({ entityId: 'article' });
})
    .then((pages) => {
    log_service_1.default.warning('RUN OF ARTICLE CREATE');
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
    else {
        skipped += 3;
    }
    return page_1.model.find({ entityId: 'contacts' });
})
    .then((pages) => {
    log_service_1.default.warning('RUN OF CONTACTS CREATE');
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
    else {
        skipped += 3;
    }
    return page_1.model.find();
})
    .then((data) => {
    if (data && data.length && !pagesToPush.length) {
        log_service_1.default.error('Some data found in pages, for security reasons delete it by hand. No overwrite will be performed');
        return Promise.reject();
    }
    return page_1.model.insertMany(pagesToPush);
})
    .then((data) => {
    log_service_1.default.info(`CREATED:`);
    log_service_1.default.info(`  ${data.length} DOCUMENTS`);
    log_service_1.default.info(`SKIPPED:`);
    log_service_1.default.info(`  ${skipped} DOCUMENTS`);
    return mongoose_1.default.disconnect();
});
