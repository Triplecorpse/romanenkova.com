import {iPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";
import {config} from "../server/config";
import mongoose, {DocumentQuery} from "mongoose";
import {Cursor} from "mongodb";

const pagesToPush: Array<iPage> = [];
let skipped: number = 0;

mongoose.connect(config.dbp)
    .then((): Promise<boolean> => {
        log.warning('RUN OF PAGES DELETE');

        return Page.find()
            .then(pages => {
                if (pages.length) {
                    return Page.collection.drop();
                }

                return Promise.resolve(false);
            })

    })
    .then((data: boolean): Promise<void> => {
        log.info(`DELETED:`);
        log.info(`  ${data}`);

        return mongoose.disconnect();
    });
