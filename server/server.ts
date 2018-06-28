import express from 'express';
import bodyParser from 'body-parser';

export const app = express();

app.use('/', require('./routes/'));
app.use(express.static('./front/dist'));
app.use(bodyParser.json({type: 'application/json'}));
