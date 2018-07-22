import striptags from 'striptags';

export function stripHtml(html: string): Promise<string> {
    return Promise.resolve(striptags(html));
}
