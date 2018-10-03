import {ICloudinaryResponse} from "../../interfaces/iCloudinaryResponse";

const cloudinary = require('cloudinary');

export function uploadImage(path: string): Promise<ICloudinaryResponse> {
    return new Promise<ICloudinaryResponse>((resolve, reject) => {
        cloudinary.v2.uploader.upload(path, (error: any, result: ICloudinaryResponse) => {
            if (error) {
                reject(error);
                return;
            }

            resolve(result);
        });
    });
}
