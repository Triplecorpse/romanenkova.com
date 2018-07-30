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
    const mediaToAdd: Array<string> = pageMedia
        .filter((mediaObject: IPageImage): boolean => mediaObject.status === 'add')
        .map(m => m.src);
    const mediaToRemove: Array<string> = pageMedia
        .filter((mediaObject: IPageImage): boolean => mediaObject.status === 'remove')
        .map((m: IPageImage): string => m.src);

    let i: TLanguage;

    mediaToRemove.forEach((media: string) => {
        const lastIndexOfDot: number = media.lastIndexOf('.');
        const lastIndexOfSlash: number = media.lastIndexOf('/') + 1;
        const publicId: string = media.substring(lastIndexOfSlash, lastIndexOfDot);
        cloudinary.v2.uploader.destroy(publicId, function (error: any, result: any) {
            if (error) {
                log.error('error', error);
            } else {
                log.info('success', result, publicId, media);
            }
        });
    });

    if (pageMedia.length) {
        availableLanguages.forEach((lang: TLanguage): void => {
            pages[lang] = pages[lang] || {
                language: lang,
                entityId: pageObj.id
            }
        })
    }

    for (i in pages) {
        if (pages.hasOwnProperty(i) && (availableLanguages.indexOf(i) > -1 || pageMedia.length)) {
            const page = pages[i] || {entityId: pageObj.id, language: i};

            if (mediaToAdd.length) {
                pagesQ.push(updateSinglePage(pageObj.id, i, {...page, $push: {images: {$each: mediaToAdd}}}));
            }

            if (mediaToRemove.length) {
                pagesQ.push(updateSinglePage(pageObj.id, i, {...page, $pullAll: {images: mediaToRemove}}));
            }

            if (!pageMedia.length) {
                pagesQ.push(updateSinglePage(pageObj.id, i, {...page}));
            }
        }
    }

    return Promise.all(pagesQ);
}

export function updateSinglePage(entityId: string, language: string, page: any): Promise<iPage> {
    return Page.updateOne({entityId, language}, page)
        .then(() => {
            return read(entityId, language);
        })
        .then((result: Array<iPage>) => result[0]);
}
