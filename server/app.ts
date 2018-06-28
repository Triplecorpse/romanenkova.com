import {app} from './server';
import {config} from './config';
import log from './services/log-service';
import mongoose from 'mongoose';

const port: string | number = process.env.port || config.port;

mongoose.connect(config.dbp);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
    log.info(`Server started on port ${port}`);
});
