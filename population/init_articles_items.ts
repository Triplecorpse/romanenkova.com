import log from '../server/services/log-service';
import {Database} from '../_interface/IMongooseSchema';
import {Article} from '../server/models/article';
import {uploadImage} from '../server/services/file-storage/file-storage-service';
import {readFile} from '../server/services/file-service';
import IArticle = Database.IArticle;

export function getArticleItemData(): Promise<Array<Database.IService>> {
  const data: Array<Database.IArticle> = [
    {
      isDeleted: false,
      updatedAt: new Date(),
      createdAt: new Date(),
      isPublished: true,
      header: 'Гештальт-терапия',
      body: 'what-is-gestalt.ru.html',
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
          const newItems: Array<IArticle> = [];

          Promise.all([
            uploadImage(`./population/assets/${logo}`),
            uploadImage(`./population/assets/${imageMd}`),
            uploadImage(`./population/assets/${imageXl}`),
            readFile(`./population/assets/initial_articles/${body}`)
          ]).then((result) => {
            newItems[index] = {
              ...item,
              logo: result[0].image,
              imageMd: result[1].image,
              imageXl: result[2].image,
              body: result[3]
            };

            if (isAllLoaded(data, newItems)) {
              resolve(newItems);
            }
          });

        });

      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

function isAllLoaded(items: Array<IArticle>, newItems: Array<IArticle>): boolean {
  if (items.length !== newItems.length) {
    return false;
  }

  return newItems.every((item: IArticle) => !!item);
}
