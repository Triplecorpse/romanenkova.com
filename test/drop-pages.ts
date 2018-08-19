require('dotenv').config();

import {model as Page} from "../server/models/page";
import log from "../server/services/log-service";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI as string)
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
