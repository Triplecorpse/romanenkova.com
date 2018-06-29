import mongoose, {DocumentQuery} from 'mongoose';
import log from './../log-service';
import {iNav, iPage, model as Page} from '../../models/page';
import {UpdateWriteOpResult} from "mongodb";

export function read(entityId: string, language: string): Promise<iPage> {
    return Page.find({entityId, language})
        .then((pages: Array<mongoose.Document>) => {
            const page: any = pages[0];
            let body: any = page.body;

            if (typeof page.body === 'object') {
                body = JSON.parse(page.body).map((navItem: iNav) => {
                    delete navItem._id;
                    delete navItem.__v;
                });
            }

            return {
                header: page.header,
                body
            }
        });
}

export function update(entityId: string, language: string, page: iPage): Promise<iPage> {
    return Page.updateOne({entityId, language}, page)
        .then((result: UpdateWriteOpResult) => {
            console.log(result);
            return read(entityId, language);
        });
}
