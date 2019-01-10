import {Page} from "../server/models/page";
import log from "../server/services/log-service";
import mongoose from "mongoose";

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI as string)
    .then((): any => {
        log.warning('\x1b[0m', 'DBINIT :::: CONNECTED TO DATABASE :::: ' + process.env.MONGODB_URI);
        return Page.find({entityId: 'nav'});
    })
    .then((pages) => {
        log.info(pages);
    })
    .then(() => {
        return mongoose.disconnect();
    })
    .then(() => {
        log.warning('\x1b[0m', 'DBINIT :::: DISCONNECTED FROM DATABASE');
    });
