import Timer = NodeJS.Timer;
import {readDir} from "../file-service";

require('dotenv').config();

const dbrestore = require('mongodb-restore');
const dbbackup = require('mongodb-backup');
const MONGODB_URI = process.env.MONGODB_URI;
let intervalId: number;

export function restoreDatabase(v: string): Promise<any> {
    return new Promise((resolve, reject) => {
        dbrestore({
            uri: MONGODB_URI,
            root: `./backups/${v}`,
            callback(d: any, e: any) {
                console.log(d, e);
                resolve(d);
            }
        });
    })
}

export function backupDatabase() {
    const dirname = new Date().toISOString();
    return new Promise((resolve, reject) => {
        dbbackup({
            uri: MONGODB_URI,
            root: `./backups`,
            logger: './backups/.log',
            tar: `${dirname}.tar`,
            callback(err: any) {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            }
        });
    })
}

export function startRegularBackups(interval: number) {
    stopRegularBackups();
    console.log('StartedRegularBackups', interval);
    intervalId = +setInterval(() => {
        backupDatabase();
        readDir('./backups')
            .then((files) => {
                // todo: remove old backups
                console.log(files);
            })
    }, interval);
}

export function stopRegularBackups() {
    clearInterval(intervalId)
}