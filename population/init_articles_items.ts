import log from '../server/services/log-service';
import {Database} from '../_interface/IMongooseSchema';
import {Article} from '../server/models/article';
import {uploadFile, uploadImage} from '../server/services/file-storage/file-storage-service';
import {IPhotoPreview} from '../_interface/IPhotoPreview';
import {readFile} from '../server/services/file-service';
import IArticle = Database.IArticle;

export function getServiceItemData(): Promise<Array<Database.IService>> {
  const data: Array<Database.IArticle> = [
    {
      isDeleted: false,
      updatedAt: new Date(),
      createdAt: new Date(),
      isPublished: true,
      header: 'Гештальт-терапия',
      body: '',
      language: 'ru',
      logo: 'celebration-couple-enjoyment-1587646sq.jpg',
      imageMd: 'celebration-couple-enjoyment-1587646@0,33x.jpg',
      imageXl: 'celebration-couple-enjoyment-1587646.jpg',
      entityId: 'article',
      url: 'what-is-gestalt'
    }
  ];

  return new Promise((resolve: any, reject: any) => {
    Article.deleteMany({})
      .then((result: any) => {
        log.warning('\x1b[31m', 'DELETED: article', result.n, 'pages');
      })
      .then(() => {
        data.forEach((item: Database.IArticle, index: number): void => {
          const {logo, imageMd, imageXl, body} = item;
          const newItems = [];

          Promise.all([
            uploadImage(`./population/assets/${logo}`),
            uploadImage(`./population/assets/${imageMd}`),
            uploadImage(`./population/assets/${imageXl}`),
            uploadFile(`./population/assets/${body}`)
          ]).then((result) => {
            newItems[index] = {
              ...item,
              logo: result[0],
              imageMd: result[1],
              imageXl: result[2],
              body: result[3]
            };
          });

          if (isAllLoaded(data, newItems)) {
            resolve(newItems);
          }
        });

      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

function isAllLoaded(items: Array<IArticle>, newItems: Array<IArticle>): boolean {
  if (items.length !== newItems.length) {
    return;
  }

  return newItems.every((item: IArticle) => !!item);
}
