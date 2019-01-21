import {Service} from "../server/models/service";

require('dotenv').config();

import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getReviewPageData(): Promise<Array<IPage>> {
    const data = [
        {
            entityId: 'review',
            header: 'Feedback',
            language: 'en',
            pageData: {
                submit: 'Leave feedback...',
                noReviews: 'There is no feedback left from the English version of the site. Why not be the first one?',
                anon: 'Anonymous'
            }
        }, {
            entityId: 'review',
            header: 'Отзывы',
            language: 'ru',
            pageData: {
                submit: 'Добавить отзыв...',
                noReviews: 'Пока что нет отзывов, оставленных с русской версии сайта. Будьте первым!',
                anon: 'Аноним'
            }
        }, {
            entityId: 'review',
            header: 'Відгуки',
            language: 'uk',
            pageData: {
                submit: 'Додати відгук...',
                noReviews: 'Поки що немає відгуків, залишених з української версії сайту. Будьте першим!',
                anon: 'Анонім'
            }
        }, {
            entityId: 'review',
            header: 'Retour d\'information',
            language: 'fr',
            pageData: {
                submit: 'Ajouter un commentaire...',
                noReviews: 'Il n\'y a plus de commentaires de la version française du site. Soyez le premier!',
                anon: 'Anonymous'
            }
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: 'review'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: review', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
