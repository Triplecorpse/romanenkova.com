import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getServicePageData(): Promise<Array<IPage>> {
    const data = [
        {
            entityId: 'service',
            header: 'Services',
            language: 'en',
        }, {
            entityId: 'service',
            header: 'Услуги',
            language: 'ru',
        }, {
            entityId: 'service',
            header: 'Послуги',
            language: 'uk',
        }, {
            entityId: 'service',
            header: 'Services',
            language: 'fr',
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: 'service'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: service', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
