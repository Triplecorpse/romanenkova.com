import {IPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getMainPageData(): Promise<Array<IPage>> {
    const data = [{
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
    }];

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
