const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use('/', require('./routes/'));
app.use(express.static('./front/dist'));
app.use(bodyParser.json({type: 'application/json'}));

module.exports = app;
