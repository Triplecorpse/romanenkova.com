#!/usr/bin/env node

import {startRegularBackups} from "./services/security-services/backup-service";

require('dotenv').config();
import {app} from './server';
import log from './services/log-service';
import mongoose = require('mongoose');
import {generateSiteMap} from "./services/file-service";
import {getMilliseconds} from "./services/base";

const port: string = process.env.PORT as string;

mongoose.connect(process.env.MONGODB_URI as string)
    .then(startRegularBackups.bind(this, getMilliseconds(1, 'minutes')));

generateSiteMap();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
});
