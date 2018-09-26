import {IPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getMainPageData(): Promise<Array<IPage>> {
    const data = [
        {
            entityId: 'main',
            header: 'Online consult of psychologist',
            language: 'en',
            pageData: {
                index: ["Online", "psychology"],
                attend: "Make an appointment",
                name: ["Irina", "Romanenkova"],
                position: "Psychologist",
                notificationEmail: "benzin.a95@gmail.com"
            }
        }, {
            entityId: 'main',
            header: 'Онлайн консультации психолога',
            language: 'ru',
            pageData: {
                index: ["Онлайн", "психология"],
                attend: "Записаться на приём",
                name: ["Ирина", "Романенкова"],
                position: "Психолог",
                notificationEmail: "benzin.a95@gmail.com"
            }
        }, {
            entityId: 'main',
            header: 'Онлайн консультації психолога',
            language: 'uk',
            pageData: {
                index: ["Онлайн", "психологія"],
                attend: "Записатися на прийом",
                name: ["Ірина", "Романенкова"],
                position: "Психолог",
                notificationEmail: "benzin.a95@gmail.com"
            }
        }, {
            entityId: 'main',
            header: 'Psychologue en ligne',
            language: 'fr',
            pageData: {
                index: ["en ligne", "Psychologie"],
                attend: "Prendre rendez-vous",
                name: ["Irina", "Romanenkova"],
                position: "Psychologue",
                notificationEmail: "benzin.a95@gmail.com"
            }
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: 'main'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: main', result.n, 'pages');
                resolve(data);
            })
            .catch(() => {
                resolve(data);
            });
    })
}
