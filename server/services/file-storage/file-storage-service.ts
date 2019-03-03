import util = require('util');
import fs = require('fs');
import {encryptString} from "../security-services/crypto-service";

export function uploadImage(path: string): Promise<string> {
  const patharr = path.split('/');
  const filename = patharr.pop() as string;
  const extension = filename.split('.').pop();
  const newFilename = `${encryptString(filename)}.${extension}`;

  return util.promisify(fs.copyFile)(path, `./front/assets/${newFilename}`)
    .then(() => {
      return `/assets/${newFilename}`
    })
}
