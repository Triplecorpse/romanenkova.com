//#!/usr/bin/env node

import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {startRegularBackups} from "./services/security-services/backup-service";
import {app} from './server';
import log from './services/log-service';
import mongoose = require('mongoose');
import {generateSiteMap} from "./services/file-service";
import {getMilliseconds} from "./services/base";
import {startMonitoring} from "./monitor";
import http from 'http';

http.globalAgent.maxSockets = 50;

// startMonitoring();

const cluster = require('cluster');

require('dotenv').config();

const port: string = process.env.PORT as string;

mongoose.connect(process.env.MONGODB_URI as string, {useNewUrlParser: true})
    .then(startRegularBackups.bind(this, getMilliseconds(1, 'days')));

generateSiteMap();

const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker: any, code: any, signal: any) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
  });

  console.log(`Worker ${process.pid} started`);
}


