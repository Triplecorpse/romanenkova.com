import log from '../server/services/log-service'
import {AboutPage} from "../server/models/aboutPage";
import {Page} from "../_interface/IPage";

const fs = require('fs');
const util = require('util');

export function getAboutPageDataV2(): Promise<Array<Page.IAboutPage>> {
    return new Promise((resolve: any, reject: any) => {
        let images: Array<string> = [
          'https://res.cloudinary.com/romanenkova/image/upload/v1549319634/_DSC0326.jpg',
          'https://res.cloudinary.com/romanenkova/image/upload/v1549319633/_DSC0011.jpg',
          'https://res.cloudinary.com/romanenkova/image/upload/v1549319634/_DSC0055.jpg',
          'https://res.cloudinary.com/romanenkova/image/upload/v1549319633/_DSC0032.jpg'];

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
