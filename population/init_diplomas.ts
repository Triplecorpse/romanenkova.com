import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getDiplomaPageData(): Promise<Array<IPage>> {
    const data = [
        {
            entityId: 'diploma',
            header: 'Diplomas',
            language: 'en',
        }, {
            entityId: 'diploma',
            header: 'Дипломы',
            language: 'ru',
        }, {
            entityId: 'diploma',
            header: 'Дипломи',
            language: 'uk',
        }, {
            entityId: 'diploma',
            header: 'Diplômes',
            language: 'fr',
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: 'diploma'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: diploma', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
