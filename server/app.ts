require('dotenv').config();
import {app} from './server';
import log from './services/log-service';
import mongoose = require('mongoose');

const port: string = process.env.PORT as string;

mongoose.connect(process.env.MONGODB_URI as string);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
});
