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
    .toFile(`../imgs/services/500_${newFilename}`)
    .then(() => util.promisify(fs.copyFile)(path, `../imgs/services/${newFilename}`))
    .then(() => ({
      image: `/services/${newFilename}`,
      preview: `/services/500_${newFilename}`
    }));
}

export function uploadImageForArticle(path: string): Promise<IPhotoArticle> {
  const patharr = path.split(/(\\)|(\/)/);
  const filename = patharr.pop() as string;
  const extension = filename.split('.').pop();

  const logo$ = util.promisify(fs.copyFile)(path.replace('@replaceString', 'logo'), `../imgs/articles/${filename}_logo.${extension}`);
  const imageXl$ = sharp(path.replace('_@replaceString', ''))
    .resize(2048, 960, {withoutEnlargement: true, fit: 'cover'})
    .toFile(`../imgs/articles/${filename}_xl.${extension}`);
  const imageMd$ = sharp(path.replace('_@replaceString', ''))
    .resize(1150, 540)
    .toFile(`../imgs/articles/${filename}_md.${extension}`);


  return Promise.all([logo$, imageMd$, imageXl$])
    .then(() => ({
      logo: `/articles/${filename}_logo.${extension}`,
      imageMd: `/articles/${filename}_md.${extension}`,
      imageXl: `/articles/${filename}_xl.${extension}`
    }));
}
