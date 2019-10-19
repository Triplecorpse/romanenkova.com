import express = require('express');
import bodyParser = require('body-parser');
import routes from './routes';
import {ngExpressEngine} from '@nguniversal/express-engine';
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';
import {enableProdMode} from '@angular/core';
import {join} from 'path';

export const app = express();

enableProdMode();

const DIST_FOLDER = join(process.cwd(), 'front');

const {AppServerModuleNgFactory, LAZY_MODULE_MAP} = require('./../dist/main');

app.engine('html', ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}) as any);

app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

app.use('/', routes);
app.use(bodyParser.json({type: 'application/json'}));
