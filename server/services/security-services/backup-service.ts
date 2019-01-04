require('dotenv').config();

const dbrestore = require('mongodb-restore');
const dbbackup = require('mongodb-backup');
const MONGODB_URI = process.env.MONGODB_URI;

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
            root: `./backups/${dirname}`,
            logger: './backups/.log',
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