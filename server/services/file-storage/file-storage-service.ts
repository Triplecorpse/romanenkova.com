import util = require('util');
import fs = require('fs');
import path = require('path');
import sharp = require('sharp');
import {IPhotoPreview} from '../../../_interface/IPhotoPreview';
import {IPhotoArticle} from '../../../_interface/IPhotoArticle';

export async function uploadImage(filePath: string, prefix: string): Promise<IPhotoPreview> {
  await fs.promises.mkdir(`../imgs/${prefix}`, {recursive: true});

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

export async function uploadImagesForArticle(logoPath: string, imagePath: string): Promise<IPhotoArticle> {
  await fs.promises.mkdir('../imgs/articles', {recursive: true});

  const extension = path.extname(imagePath);
  const filename = path.basename(imagePath, extension);
  const logoFilename = path.basename(logoPath, extension);
  const logo$ = util.promisify(fs.copyFile)(logoPath, `../imgs/articles/${logoFilename}${extension}`);
  const imageXl$ = sharp(imagePath)
    .resize(2048, 960, {withoutEnlargement: true, fit: 'cover'})
    .toFile(`../imgs/articles/${filename}_xl${extension}`);
  const imageMd$ = sharp(imagePath)
    .resize(1150, 540)
    .toFile(`../imgs/articles/${filename}_md${extension}`);


  return Promise.all([logo$, imageMd$, imageXl$])
    .then(() => ({
      logo: `/articles/${filename}_logo${extension}`,
      imageMd: `/articles/${filename}_md${extension}`,
      imageXl: `/articles/${filename}_xl${extension}`
    }));
}

function createFolderPath(path: string) {
  return fs.promises.mkdir(path);
}
