import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";
import indexData from "../server/const/indexData";

export function getMainPageData(): Promise<Array<IPage>> {
    const data = [
        {
            entityId: 'main',
            header: 'Online Counseling & Therapy',
            language: 'en',
            pageData: indexData.en
        }, {
            entityId: 'main',
            header: 'Онлайн консультации и терапия',
            language: 'ru',
            pageData: indexData.ru
        }, {
            entityId: 'main',
            header: 'Онлайн консультації та терапія',
            language: 'uk',
            pageData: indexData.uk
        }, {
            entityId: 'main',
            header: 'Consultation et thérapie en ligne',
            language: 'fr',
            pageData: indexData.fr
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: 'main'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: main', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
