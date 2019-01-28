import {IPage, Page as Page} from "../server/models/page";
import log from '../server/services/log-service'
import {AboutPage} from "../server/models/aboutPage";

const fs = require('fs');
const util = require('util');

export function getAboutPageDataV2(): Promise<Array<IPage>> {
    return new Promise((resolve: any, reject: any) => {
        let images: Array<string> = ['https://res.cloudinary.com/hladvnf07/image/upload/v1546549649/v4bhnydnrrrklelbjm9u.jpg', 'https://res.cloudinary.com/hladvnf07/image/upload/v1546549649/rygktlemg9u9iy9trbhu.jpg'];

        AboutPage.find()
            .then((aboutPages: any) => {
                if (aboutPages && aboutPages.length && aboutPages[0].images) {
                    images = aboutPages[0].images;
                }

                return AboutPage.deleteMany({})
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
                    items: images
                }, {
                    header: 'Обо мне',
                    language: 'ru',
                    body: textes.ru,
                    items: images
                }, {
                    header: 'Про мене',
                    language: 'uk',
                    body: textes.uk,
                    items: images
                }, {
                    header: 'A propos de moi',
                    body: textes.fr,
                    language: 'fr',
                    items: images
                }]);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
