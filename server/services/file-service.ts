import fs = require('fs');
import log from './log-service';
import {languages} from "../const/const";
import {TLanguage} from "../../_interface/types";

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

export function writeFile(path: string, data: string, options: object | string = 'UTF8'): Promise<string> {
    return new Promise ((resolve, reject) => {
        fs.writeFile(path, data, options, (err: Error) => {
            if (err) {
                reject(err);
                log.error(`Error writing file ${path}`, err);
            } else {
                resolve();
                log.info(`File ${path} was written successfully`);
            }
        });
    });
}

export function removeFile(path: string): Promise<string> {
    return new Promise ((resolve, reject) => {
        fs.unlink(path, (err: Error) => {
            if (err) {
                reject(err);
                log.error(`Error removing file ${path}`, err);
            } else {
                resolve();
                log.info(`File ${path} was removed successfully`);
            }
        });
    });
}

export function readDir(path: string, options: object | string = 'UTF8'): Promise<Array<string>> {
    return new Promise ((resolve, reject) => {
        fs.readdir(path, (err: Error, files: Array<string>) => {
            if (err) {
                reject(err);
                log.error(`Error reading directoru ${path}`, err);
            } else {
                resolve(files);
                log.info(`Directory ${path} was read successfully`);
            }
        });
    });
}

export function generateSiteMap(): Promise<string> {
    const routes = ['', 'about', 'services', 'diplomas'];
    const urlTag = '<url>\n<loc>https://www.romanenkova.com/@content</loc>\n<priority>@priority</priority>\n</url>';
    return readFile('./static/sitemap.base.xml')
        .then((template: string): string => {
            let templateContent = '';
            languages.forEach((lang: TLanguage) => {
                routes.forEach((route: string) => {
                    let urlContent = lang;
                    let priority;
                    if (route) {
                        urlContent += `/${route}/`;
                        priority = '0.8';
                    } else {
                        urlContent += '/';
                        priority = '0.9';
                    }
                    templateContent += urlTag
                        .replace('@content', urlContent)
                        .replace('@priority', priority);
                });
            });

            return template.replace('@content', templateContent);
        })
        .then((sitemap: string): Promise<string> => {
            return writeFile('./static/sitemap.xml', sitemap);
        });
}

function _replaceRecursive(template: string, configObj: any): string {
    const keys = Object.keys(configObj);

    if (!keys.length) {
        return template;
    }

    const key = keys[0];
    template = template.replace(new RegExp(`@${key}`, 'g'), configObj[key]);
    delete configObj[key];

    return _replaceRecursive(template, configObj);
}
