import log from './../log-service';
import {iPage, model as Page} from '../../models/page';
import {IPageLanguageContainer, IPageSubmit} from "../../interfaces/iPageSubmit";

export function read(entityId: string | Array<string>, language: string | Array<string>): Promise<Array<iPage>> {
    return Page.find({entityId, language})
        .then((pages: any) => pages.map((page: iPage): iPage => {
                let pageBody: string = page.pageData as string;
                let pageLanguage: 'en' | 'ru' | 'uk' = page.language;

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
    const availableLanguages: Array<string> = ['en', 'ru', 'uk'];
    const pages: IPageLanguageContainer = pageObj.page;
    let i: 'en' | 'ru' | 'uk';

    for (i in pages) {
        if (pages.hasOwnProperty(i) && availableLanguages.indexOf(i) > -1) {
            const page = pages[i] as iPage;
            page.images = pageObj.media;
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
