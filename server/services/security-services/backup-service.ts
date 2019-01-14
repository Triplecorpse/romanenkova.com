import Timer = NodeJS.Timer;
import {readDir, removeFile} from "../file-service";
import {getMilliseconds} from "../base";

require('dotenv').config();

const dbrestore = require('mongodb-restore');
const dbbackup = require('mongodb-backup');
const MONGODB_URI = process.env.MONGODB_URI;
const basePath = './../backups';
let intervalId: number;

export function restoreDatabase(v: string): Promise<any> {
    return new Promise((resolve, reject) => {
        dbrestore({
            uri: MONGODB_URI,
            root: `${basePath}/${v}`,
            callback(d: any, e: any) {
                resolve(d);
            }
        });
    })
}

export function backupDatabase() {
    const filename = new Date().toISOString();
    return new Promise((resolve, reject) => {
        dbbackup({
            uri: MONGODB_URI,
            root: basePath,
            logger: `${basePath}/.log`,
            tar: `${filename}.tar`,
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
    intervalId = +setInterval(() => {
        backupDatabase();
        readDir(basePath)
            .then((files) => {
                files = files.filter((file: string): boolean => file !== '.file' && file !== '.log');
                files.forEach((file: string) => {
                    let filename: any = file.split('.');
                    filename.length = filename.length - 1;
                    filename = filename.join('.');
                    const fileCreated = new Date(filename);
                    if (fileCreated.getTime() < new Date().getTime() - getMilliseconds(5, 'minutes')) {
                        removeFile(`${basePath}/${file}`);
                    }
                });
            })
    }, interval);
}

export function stopRegularBackups() {
    clearInterval(intervalId)
}