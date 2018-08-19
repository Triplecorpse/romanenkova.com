require('dotenv').config();

import {model as Page} from "../server/models/page";
import log from "../server/services/log-service";
import mongoose, {} from "mongoose";


mongoose.connect(process.env.MONGODB_URI as string)
    .then((): Promise<any> => {
        log.warning('RUN OF MODAL PAGES DELETE');

        return Page.remove({entityId: '[modal] appointment'})
            .then(data => {
                log.info(`DELETED:`);
                log.info(`  ${data}`);

                return mongoose.disconnect();
            })

    });
