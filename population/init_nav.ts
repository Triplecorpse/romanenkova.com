require('dotenv').config();

import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getNavPageData(): Promise<Array<IPage>> {
    const data = [
        {
            pageData: [
                {name: ["Online", "psychology"], anchor: "main"},
                {name: "Make an appointment", anchor: "appointment"},
                {name: ["Psychologist", "Irina", "Romanenkova"], anchor: "name"},
                {name: "About me", anchor: "about"},
                {name: "Services", anchor: "services"},
                {name: "Contacts", anchor: "contacts"}
            ],
            language: 'en',
            entityId: 'nav',
            header: 'Main menu'
        },
        {
            pageData: [
                {name: ["Онлайн", "психология"], anchor: "main"},
                {name: "Записаться на приём", anchor: "appointment"},
                {name: ["Психолог", "Ирина", "Романенкова"], anchor: "name"},
                {name: "Обо мне", anchor: "about"},
                {name: "Услуги", anchor: "services"},
                {name: "Контакты", anchor: "contacts"}
            ],
            language: 'ru',
            entityId: 'nav',
            header: 'Главное меню'
        },
        {
            pageData: [
                {name: ["Онлайн", "психологія"], anchor: "main"},
                {name: "Записатися на прийом", anchor: "appointment"},
                {name: ["Психолог", "Ірина", "Романенкова"], anchor: "name"},
                {name: "Про мене", anchor: "about"},
                {name: "Послуги", anchor: "services"},
                {name: "Контакти", anchor: "contacts"}
            ],
            language: 'uk',
            entityId: 'nav',
            header: 'Головне меню'
        },
        {
            pageData: [
                {name: ["en ligne", "Psychologie"], anchor: "main"},
                {name: "Prendre rendez-vous", anchor: "appointment"},
                {name: ["Psychologue", "Irina", "Romanenkova"], anchor: "name"},
                {name: "Sur moi", anchor: "about"},
                {name: "Services", anchor: "services"},
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
                log.warning('\x1b[31m', 'DELETED: nav', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
