//#!/usr/bin/env node

import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {startRegularBackups} from "./services/security-services/backup-service";
import {app} from './server';
import log from './services/log-service';
import mongoose = require('mongoose');
import {generateSiteMap} from "./services/file-service";
import {getMilliseconds} from "./services/base";

require('dotenv').config();

const port: string = process.env.PORT as string;

(async () => {
  await mongoose.connect(process.env.MONGODB_URI as string);
  startRegularBackups.bind(this, getMilliseconds(1, 'days'));
  await generateSiteMap();
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
  });
})();
