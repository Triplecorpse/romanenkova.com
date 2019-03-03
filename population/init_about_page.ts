import log from '../server/services/log-service'
import {AboutPage} from "../server/models/aboutPage";
import {Page} from "../_interface/IPage";
import {uploadImage} from "../server/services/file-storage/file-storage-service";
import {ICloudinaryResponse} from "../server/interfaces/iCloudinaryResponse";

const fs = require('fs');
const util = require('util');

export function getAboutPageDataV2(): Promise<Array<Page.IAboutPage>> {
    return new Promise((resolve: any, reject: any) => {
        let resolvedImages: Array<string>;

        AboutPage.deleteMany({})
            .then((pages) => {
                log.warning('\x1b[31m', 'DELETED: about', pages.n, 'pages');

                return Promise.all([
                    uploadImage('./population/assets/_DSC0011.jpg'),
                    uploadImage('./population/assets/_DSC0032.jpg'),
                    uploadImage('./population/assets/_DSC0055.jpg'),
                    uploadImage('./population/assets/_DSC0326.jpg')
                ]);
            })
            .then((images: any) => {
                resolvedImages = images.map((image: string) => image);
                return util.promisify(fs.readFile)('./population/assets/about.json', 'UTF8');
            })
            .then((textes: any) => {
                textes = JSON.parse(textes);
                resolve([{
                    header: 'About me',
                    language: 'en',
                    body: textes.en,
                    items: resolvedImages
                }, {
                    header: 'Обо мне',
                    language: 'ru',
                    body: textes.ru,
                    items: resolvedImages
                }, {
                    header: 'Про мене',
                    language: 'uk',
                    body: textes.uk,
                    items: resolvedImages
                }, {
                    header: 'A propos de moi',
                    body: textes.fr,
                    language: 'fr',
                    items: resolvedImages
                }]);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
