import * as crypto from "crypto";

export function encryptString(rawString: string): string {
    return crypto.createHash('md5').update(rawString).digest('hex');
}

export function compareHashedString(rawString: string, encryptedString: string): boolean {
    return encryptedString === encryptString(rawString);
}
