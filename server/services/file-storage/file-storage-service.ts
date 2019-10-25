import util = require('util');
import fs = require('fs');
import sharp = require('sharp');
import {encryptString} from '../security-services/crypto-service';
import {IPhotoPreview} from '../../../_interface/IPhotoPreview';

export function uploadImage(path: string): Promise<IPhotoPreview> {
  const patharr = path.split('/');
  const filename = patharr.pop() as string;
  const extension = filename.split('.').pop();
  const newFilename = `${encryptString(filename)}.${extension}`;

  return sharp(path)
    .resize(500, 500, {withoutEnlargement: true, fit: 'outside'})
    .toFile(`./front/assets/500_${newFilename}`)
    .then(() => util.promisify(fs.copyFile)(path, `./front/assets/${newFilename}`))
    .then(() => ({
      image: `/assets/${newFilename}`,
      preview: `/assets/500_${newFilename}`
    }));
}
