import log from '../server/services/log-service';
import {Database} from '../_interface/IMongooseSchema';
import {Article} from '../server/models/article';
import {uploadImage} from '../server/services/file-storage/file-storage-service';
import {IPhotoPreview} from '../_interface/IPhotoPreview';

export function getServiceItemData(): Promise<Array<Database.IService>> {
  const data: Array<Database.IArticle> = [
    {
      isDeleted: false,
      updatedAt: new Date(),
      createdAt: new Date(),
      isPublished: true,
      header: 'Гештальт-терапия',
      language: 'ru',
      logo: 'celebration-couple-enjoyment-1587646sq.jpg',
      imageMd: 'celebration-couple-enjoyment-1587646@0,33x.jpg',
      imageXl: 'celebration-couple-enjoyment-1587646.jpg',
      entityId: 'article',
      url: ''
    }
  ];

  return new Promise((resolve: any, reject: any) => {
    let logos$: Array<IPhotoPreview>;
    let imagesMd$: Array<IPhotoPreview>;
    let imagesXl$: Array<IPhotoPreview>;

    Article.deleteMany({})
      .then((result: any) => {
        log.warning('\x1b[31m', 'DELETED: article', result.n, 'pages');
      })
      .then(() => {
        const logos = data
          .map(i => i.logo)
          .map(img => uploadImage(`./population/assets/${img}`));

        return Promise.all(logos);
      })
      .then((logos) => {
        logos$ = logos;
        const imagesMd = data
          .map(i => i.imageMd)
          .map(img => uploadImage(`./population/assets/${img}`));

        return Promise.all(imagesMd);
      })
      .then((imagesMd) => {
        imagesMd$ = imagesMd;
        const imagesXl = data
          .map(i => i.imageXl)
          .map(img => uploadImage(`./population/assets/${img}`));

        return Promise.all(imagesXl);
      })
      .then((imagesXl) => {
        imagesXl$ = imagesXl;
      })
      .then(() => {
        data.forEach((item: Database.IArticle, index: number): void => {
          item.logo = `/assets/${logos$[index].image}`;
          item.imageMd = `/assets/${imagesMd$[index].image}`;
          item.imageXl = `/assets/${imagesXl$[index].image}`;
        });

        resolve(data);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}
