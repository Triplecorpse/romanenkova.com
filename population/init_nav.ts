require('dotenv').config();

import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getNavPageData(): Promise<Array<IPage>> {
    const data = [
        {
            pageData: [
                {name: ["Online", "psychologist"], anchor: "main"},
                {name: "Make an appointment", anchor: "appointment"},
                {name: ["Psychologist", "Irina", "Romanenkova"], anchor: "name"},
                {name: "About me", anchor: "about"},
                {name: "Services", anchor: "services"},
                {name: "Diplomas", anchor: "diplomas"},
                // {name: "Articles", anchor: "articles"},
                {name: "Contacts", anchor: "contacts"}
            ],
            language: 'en',
            entityId: 'nav',
            header: 'Main menu'
        },
        {
            pageData: [
                {name: ["Онлайн", "психолог"], anchor: "main"},
                {name: "Записаться на приём", anchor: "appointment"},
                {name: ["Психолог", "Ирина", "Романенкова"], anchor: "name"},
                {name: "Обо мне", anchor: "about"},
                {name: "Услуги", anchor: "services"},
                {name: "Дипломы", anchor: "diplomas"},
                // {name: "Статьи", anchor: "articles"},
                {name: "Контакты", anchor: "contacts"}
            ],
            language: 'ru',
            entityId: 'nav',
            header: 'Главное меню'
        },
        {
            pageData: [
                {name: ["Онлайн", "психолог"], anchor: "main"},
                {name: "Записатися на прийом", anchor: "appointment"},
                {name: ["Психолог", "Ірина", "Романенкова"], anchor: "name"},
                {name: "Про мене", anchor: "about"},
                {name: "Послуги", anchor: "services"},
                {name: "Дипломи", anchor: "diplomas"},
                // {name: "Статті", anchor: "articles"},
                {name: "Контакти", anchor: "contacts"}
            ],
            language: 'uk',
            entityId: 'nav',
            header: 'Головне меню'
        },
        {
            pageData: [
                {name: ["En ligne", "Psychologue"], anchor: "main"},
                {name: "Prendre rendez-vous", anchor: "appointment"},
                {name: ["Psychologue", "Irina", "Romanenkova"], anchor: "name"},
                {name: "Sur moi", anchor: "about"},
                {name: "Services", anchor: "services"},
                {name: "Diplômes", anchor: "diplomas"},
                // {name: "Articles", anchor: "articles"},
                {name: "Contacts", anchor: "contacts"}
            ],
            language: 'fr',
            entityId: 'nav',
            header: 'Головне меню'
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: 'nav'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: nav', result.n, 'pages', data);
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
