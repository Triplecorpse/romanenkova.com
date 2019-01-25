import {IPage, Page as Page} from "../server/models/page";
import log from '../server/services/log-service'

const fs = require('fs');
const util = require('util');

export function getAboutPageDataV2(): Promise<Array<IPage>> {
    return new Promise((resolve: any, reject: any) => {
        let images: Array<string> = [];

        Page.find({entityId: 'about'})
            .then((aboutPages: any) => {
                if (aboutPages && aboutPages.length && aboutPages[0].images) {
                    images = aboutPages[0].images;
                }

                return Page.deleteMany({entityId: 'about'})
            })
            .then((pages: any) => {
                log.warning('\x1b[31m', 'DELETED: about', pages.n, 'pages');
                return util.promisify(fs.readFile)('./population/assets/about.json', 'UTF8');
            })
            .then((textes: any) => {
                textes = JSON.parse(textes);
                resolve([{
                    header: 'About me',
                    language: 'en',
                    body: textes.en,
                    images
                }, {
                    header: 'Обо мне',
                    language: 'ru',
                    body: textes.ru,
                    images
                }, {
                    header: 'Про мене',
                    language: 'uk',
                    body: textes.uk,
                    images
                }, {
                    header: 'A propos de moi',
                    pageData: textes.fr,
                    body: 'fr',
                    images
                }]);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
