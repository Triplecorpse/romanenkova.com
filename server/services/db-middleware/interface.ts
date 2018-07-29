import log from './../log-service';
import {iPage, model as Page} from '../../models/page';
import {IPageImage, IPageLanguageContainer, IPageSubmit} from "../../interfaces/iPageSubmit";
import {TLanguage} from "../../types/types";
const cloudinary = require('cloudinary');

export function read(entityId: string | Array<string>, language: string | Array<string>): Promise<Array<iPage>> {
    return Page.find({entityId, language})
        .then((pages: any) => pages.map((page: iPage): iPage => {
                let pageBody: string = page.pageData as string;
                let pageLanguage: TLanguage = page.language;

                return {
                    header: page.header,
                    entityId: page.entityId,
                    pageData: pageBody,
                    language: pageLanguage,
                    images: page.images
                }
            })
        );
}

export function updatePageSubmitObj(pageObj: IPageSubmit): Promise<Array<iPage>> {
    const pagesQ: Array<Promise<iPage>> = [];
    const availableLanguages: Array<TLanguage> = ['en', 'ru', 'uk'];
    const pages: IPageLanguageContainer = pageObj.page;
    const pageMedia: Array<IPageImage> = pageObj.media || [];
    const mediaToAdd: Array<IPageImage> = pageMedia.filter((mediaObject: IPageImage): boolean => mediaObject.status === 'add');
    const mediaToRemove: Array<IPageImage> = pageMedia.filter((mediaObject: IPageImage): boolean => mediaObject.status === 'remove');

    let i: TLanguage;

    mediaToRemove.forEach((media: IPageImage) => {
        const lastIndexOfDot: number = media.src.lastIndexOf('.');
        const lastIndexOfSlash: number = media.src.lastIndexOf('/') + 1;
        const publicId: string = media.src.substring(lastIndexOfSlash, lastIndexOfDot);
        cloudinary.v2.uploader.destroy(publicId, function(error: any, result: any){
            if (error) {
                console.log('error', error);
            } else {
                console.log('success', result, publicId, media.src);
            }
        });
    });

    for (i in pages) {
        if (pages.hasOwnProperty(i) && (availableLanguages.indexOf(i) > -1 || pageMedia.length)) {
            const page = pages[i] as iPage;
            (page.images as Array<string>).push(...mediaToAdd.map(m => m.src));
            pagesQ.push(updateSinglePage(pageObj.id, i, page));
        }
    }

    return Promise.all(pagesQ);
}

export function updateSinglePage(entityId: string, language: string, page: iPage): Promise<iPage> {
    return Page.updateOne({entityId, language}, page)
        .then(() => {
            return read(entityId, language);
        })
        .then((result: Array<iPage>) => result[0]);
}
