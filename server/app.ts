#!/usr/bin/env node

import {startRegularBackups} from "./services/security-services/backup-service";

require('dotenv').config();
import {app} from './server';
import log from './services/log-service';
import mongoose = require('mongoose');
import {generateSiteMap} from "./services/file-service";

const port: string = process.env.PORT as string;

mongoose.connect(process.env.MONGODB_URI as string)
    .then(startRegularBackups.bind(this, 2 * 24 * 60 * 60 * 1000));

generateSiteMap();

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
});
