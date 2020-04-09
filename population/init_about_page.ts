import log from '../server/services/log-service';
import {AboutPage} from '../server/models/aboutPage';
import {Page} from '../_interface/IPage';
import {uploadImage} from '../server/services/file-storage/file-storage-service';
import {IPhotoPreview} from '../_interface/IPhotoPreview';

const fs = require('fs');
const util = require('util');

export function getAboutPageDataV2(): Promise<Array<Page.IAboutPage>> {
    return new Promise((resolve: (data: any) => void, reject: (data: any) => void) => {
        let resolvedImages: Array<IPhotoPreview>;

        AboutPage.deleteMany({})
            .then((pages) => {
                log.warning('\x1b[31m', 'DELETED: about', pages.n, 'pages');

                return Promise.all([
                    uploadImage('./population/assets/photos/_DSC0011.jpg', 'photos'),
                    uploadImage('./population/assets/photos/_DSC0032.jpg', 'photos'),
                    uploadImage('./population/assets/photos/_DSC0055.jpg', 'photos'),
                    uploadImage('./population/assets/photos/_DSC0326.jpg', 'photos')
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
    });
}
