import striptags from 'striptags';

export function stripString(str: string): Promise<string> {
    return Promise.resolve(striptags(str));
}

export function removeTagsFromObject<T>(obj: T): Promise<T> {
    if (typeof obj !== 'object') {
        return Promise.reject(new Error('Input value must be an object or a string'));
    }

    return Promise.resolve(_removeTagsFromObject(obj) as any);
}

function _removeTagsFromObject(obj: any): any {
    if (typeof obj === 'string') {
        return striptags(obj);
    }

    if (typeof obj !== 'object') {
        return obj;
    }

    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            obj[i] = _removeTagsFromObject(obj[i]);
        }
    }

    return JSON.parse(JSON.stringify(obj)) as any;
}