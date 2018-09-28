import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getArticlePageData(): Promise<Array<IPage>> {
    const data = [
        {
            entityId: 'article',
            header: 'Articles',
            language: 'en',
        }, {
            entityId: 'article',
            header: 'Статьи',
            language: 'ru',
        }, {
            entityId: 'article',
            header: 'Статті',
            language: 'uk',
        }, {
            entityId: 'article',
            header: 'Articles',
            language: 'fr',
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: 'article'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: article', result.n, 'pages');
                resolve(data);
            })
            .catch(() => {
                resolve(data);
            });
    })
}
