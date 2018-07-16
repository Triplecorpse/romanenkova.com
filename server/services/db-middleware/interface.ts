import log from './../log-service';
import {iPage, model as Page} from '../../models/page';

export function read(entityId: string | Array<string>, language: string | Array<string>): Promise<Array<iPage>> {
    return Page.find({entityId, language})
        .then((pages: any) => {
            return pages.map((page: iPage): iPage => {
                    // console.log(entityId, language, pages);
                    let pageBody: string = page.pageData as string;
                    let pageLanguage: 'en' | 'ru' | 'uk' = page.language;

                    return {
                        header: page.header,
                        entityId: page.entityId,
                        pageData: pageBody,
                        language: pageLanguage
                    }
                })
            }
        );
}

export function update(entityId: string, language: string, page: iPage): Promise<iPage> {
    return Page.updateOne({entityId, language}, page)
        .then(() => {
            return read(entityId, language);
        })
        .then((result: Array<iPage>) => result[0]);
}
