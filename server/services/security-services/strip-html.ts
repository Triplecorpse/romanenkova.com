import striptags from 'striptags';
import {IStriptagsOptions} from "../../interfaces/iStriptagsOptions";

export function stripString(str: string, opts?: any): string {
    return striptags(str, opts);
}

export function removeTagsFromObject<T>(obj: T, options: IStriptagsOptions): Promise<T> {
    if (typeof obj !== 'object') {
        return Promise.reject(new Error('Input value must be an object or a string'));
    }

    return Promise.resolve(_removeTagsFromObject(obj, options) as any);
}

function _removeTagsFromObject(obj: any, options: IStriptagsOptions): any {
    if (typeof obj === 'string') {
        return striptags(obj, options.allowedTags);
    }

    if (typeof obj !== 'object') {
        return obj;
    }

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            obj[i] = _removeTagsFromObject(obj[i], options);
        }
    }

    return JSON.parse(JSON.stringify(obj)) as any;
}