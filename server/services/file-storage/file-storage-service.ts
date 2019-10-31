import util = require('util');
import fs = require('fs');
import sharp = require('sharp');
import {encryptString} from '../security-services/crypto-service';
import {IPhotoPreview} from '../../../_interface/IPhotoPreview';
import {IPhotoArticle} from '../../../_interface/IPhotoArticle';

export function uploadImage(path: string): Promise<IPhotoPreview> {
  const patharr = path.split('/');
  const filename = patharr.pop() as string;
  const extension = filename.split('.').pop();
  const newFilename = `${encryptString(filename)}.${extension}`;

  return sharp(path)
    .resize(500, 500)
    .toFile(`./front/assets/500_${newFilename}`)
    .then(() => util.promisify(fs.copyFile)(path, `./front/assets/${newFilename}`))
    .then(() => ({
      image: `/assets/${newFilename}`,
      preview: `/assets/500_${newFilename}`
    }));
}

export function uploadImageForArticle(path: string): Promise<IPhotoArticle> {
  const patharr = path.split('/');
  const filename = patharr.pop() as string;
  const extension = filename.split('.').pop();

  const logo$ = util.promisify(fs.copyFile)(path.replace('@replaceString', 'logo'), `./front/assets/${filename}_logo.${extension}`);
  const imageXl$ = sharp(path.replace('_@replaceString', ''))
    .resize(2048, 960, {withoutEnlargement: true, fit: 'cover'})
    .toFile(`./front/assets/${filename}_xl.${extension}`);
  const imageMd$ = sharp(path.replace('_@replaceString', ''))
    .resize(1150, 540)
    .toFile(`./front/assets/${filename}_md.${extension}`);


  return Promise.all([logo$, imageMd$, imageXl$])
    .then(() => ({
      logo: `./assets/${filename}_logo.${extension}`,
      imageMd: `./assets/${filename}_md.${extension}`,
      imageXl: `./assets/${filename}_xl.${extension}`
    }));
}
