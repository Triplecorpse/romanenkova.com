import util = require('util');
import fs = require('fs');
import path = require('path');
import sharp = require('sharp');
import {IPhotoPreview} from '../../../_interface/IPhotoPreview';
import {IPhotoArticle} from '../../../_interface/IPhotoArticle';

export function uploadImage(filePath: string, prefix: string): Promise<IPhotoPreview> {
  const basename = path.basename(filePath);

  return sharp(filePath)
    .resize(500, 500)
    .toFile(`../imgs/${prefix}/500_${basename}`)
    .then(() => util.promisify(fs.copyFile)(filePath, `../imgs/${prefix}/${basename}`))
    .then(() => ({
      image: `/${prefix}/${basename}`,
      preview: `/${prefix}/500_${basename}`
    }));
}

export function uploadImageForArticle(filePath: string): Promise<IPhotoArticle> {
  const extension = path.extname(filePath);
  const filename = path.basename(filePath, extension);
  const logo$ = util.promisify(fs.copyFile)(filePath.replace('@replaceString', 'logo'), `../imgs/articles/${filename}_logo${extension}`);
  const imageXl$ = sharp(filePath.replace('_@replaceString', ''))
    .resize(2048, 960, {withoutEnlargement: true, fit: 'cover'})
    .toFile(`../imgs/articles/${filename}_xl${extension}`);
  const imageMd$ = sharp(filePath.replace('_@replaceString', ''))
    .resize(1150, 540)
    .toFile(`../imgs/articles/${filename}_md${extension}`);


  return Promise.all([logo$, imageMd$, imageXl$])
    .then(() => ({
      logo: `/articles/${filename}_logo.${extension}`,
      imageMd: `/articles/${filename}_md.${extension}`,
      imageXl: `/articles/${filename}_xl.${extension}`
    }));
}
