const express = require('express');
const config = require('./config');
const log = require('./services/log-service');
const app = express();
const port = process.env.port || config.port;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test');

app.use('/', require('./routes/'));
app.use(express.static('./front/dist'));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
});