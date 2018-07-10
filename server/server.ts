import express = require('express');
import bodyParser = require('body-parser');
import routes from './routes';

export const app = express();

app.use('/', routes);
app.use(express.static('./front/dist'));
app.use(bodyParser.json({type: 'application/json'}));

