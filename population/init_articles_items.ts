import log from '../server/services/log-service';
import {Database} from '../_interface/IMongooseSchema';
import {Article} from '../server/models/article';
import {uploadImageForArticle} from '../server/services/file-storage/file-storage-service';
import {readFile} from '../server/services/file-service';
import IArticle = Database.IArticle;

export function getArticleItemData(): Promise<Array<Database.IService>> {
  const data: Array<Database.IArticle> = [
    {
      isDeleted: false,
      updatedAt: new Date(2018, 11, 1),
      createdAt: new Date(2017, 11, 1),
      isPublished: true,
      header: 'Гештальт-терапия',
      body: 'what-is-gestalt.ru.html',
      language: 'ru',
      logo: '2019_05_celebration-couple-enjoyment_@replaceString.jpg',
      imageMd: '2019_05_celebration-couple-enjoyment.jpg',
      imageXl: '2019_05_celebration-couple-enjoyment.jpg',
      entityId: 'article',
      url: 'what-is-gestalt',
      imageAuthor: 'Luis Quintero',
      imageUrl: 'https://www.lifeofpix.com/photo/temp-celebration-couple-enjoyment-1587646-jpg/'
    }/*,
    {
      isDeleted: false,
      updatedAt: new Date(2018, 11, 1),
      createdAt: new Date(2017, 11, 1),
      isPublished: true,
      header: 'Как работать с обесцениванием',
      body: 'working-with-deprecation.ru.html',
      language: 'ru',
      logo: '2019_05_celebration-couple-enjoyment_@replaceString.jpg',
      imageMd: '2019_05_celebration-couple-enjoyment.jpg',
      imageXl: '2019_05_celebration-couple-enjoyment.jpg',
      entityId: 'article',
      url: 'working-with-deprecation',
      imageAuthor: 'Luis Quintero',
      imageUrl: 'https://www.lifeofpix.com/photo/temp-celebration-couple-enjoyment-1587646-jpg/'
    }*/
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
            uploadImageForArticle(`population/assets/${logo}`),
            readFile(`population/assets/initial_articles/${body}`)
          ]).then((result) => {
            newItems[index] = {
              ...item,
              logo: result[0].logo,
              imageMd: result[0].imageMd,
              imageXl: result[0].imageXl,
              body: result[1]
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
