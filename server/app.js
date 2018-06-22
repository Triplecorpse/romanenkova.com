const app = require('./app');
const config = require('./config');
const log = require('./services/log-service');
const port = process.env.port || config.port;
const mongoose = require('mongoose');
const dbConnectionQ = mongoose.connect('mongodb://localhost/test');


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
});
