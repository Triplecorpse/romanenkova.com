import fs from 'fs';
import log from './log-service';

export function readFile(path: string, options: object | string = 'UTF8'): Promise<string> {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, options, (err: Error, data: object | string) => {
            if (err) {
                reject(err);
                log.error(`Error reading file ${path}`, err);
            } else {
                resolve(data as string);
                log.info(`File ${path} was read successfully`);
            }
        });
    });
}
