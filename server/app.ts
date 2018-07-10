import {app} from './server';
import {config} from './config';
import log from './services/log-service';
import mongoose = require('mongoose');

const port: string | number = process.env.PORT || config.port;

// mongoose.connect(process.env.MONGODB_URI || config.dbp);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
});
