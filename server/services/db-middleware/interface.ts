import mongoose, {DocumentQuery} from 'mongoose';
import log from './../log-service';
import {iNav, iPage, model as Page} from '../../models/page';
import {UpdateWriteOpResult} from "mongodb";

export function read(entityId: string, language: string | Array<string>): Promise<Array<iPage>> {
    return Page.find({entityId, language})
        .then((pages: any) => {
            return pages.map((page: iPage) => {
                let body: any = page.body;
                let language: any = page.language;

                if (typeof page.body === 'object') {
                    page.body = JSON.parse(page.body).map((navItem: iNav) => {
                        delete navItem._id;
                        delete navItem.__v;
                    });
                }

                return {
                    header: page.header,
                    id: page.entityId,
                    body,
                    language
                }
            });
        });
}

export function update(entityId: string, language: string, page: iPage): Promise<iPage> {
    return Page.updateOne({entityId, language}, page)
        .then(() => {
            return read(entityId, language);
        })
        .then((result: Array<iPage>) => result[0]);
}
