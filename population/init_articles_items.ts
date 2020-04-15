import log from '../server/services/log-service';
import {Database} from '../_interface/IMongooseSchema';
import {Article} from '../server/models/article';
import {uploadImagesForArticle} from '../server/services/file-storage/file-storage-service';
import {readFile} from '../server/services/file-service';
import * as path from 'path';
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
      logo: 'articles/2019_05_celebration-couple-enjoyment_logo.jpg',
      imageMd: 'articles/2019_05_celebration-couple-enjoyment.jpg',
      imageXl: 'articles/2019_05_celebration-couple-enjoyment.jpg',
      entityId: 'article',
      url: 'what-is-gestalt',
      imageAuthor: 'Luis Quintero',
      imageUrl: 'https://www.lifeofpix.com/photo/temp-celebration-couple-enjoyment-1587646-jpg/'
    },
    {
      isDeleted: false,
      updatedAt: new Date(2018, 11, 1),
      createdAt: new Date(2017, 11, 1),
      isPublished: true,
      header: 'Как работать с обесцениванием',
      body: 'working-with-deprecation.ru.html',
      language: 'ru',
      logo: 'articles/close-up-photo-of-woman-with-her-hands-tied-with-rope-1435441_logo.jpg',
      imageMd: 'articles/close-up-photo-of-woman-with-her-hands-tied-with-rope-1435441.jpg',
      imageXl: 'articles/close-up-photo-of-woman-with-her-hands-tied-with-rope-1435441.jpg',
      entityId: 'article',
      url: 'working-with-deprecation',
      imageAuthor: 'Engin Akyurt',
      imageUrl: 'https://www.pexels.com/photo/close-up-photo-of-woman-with-her-hands-tied-with-rope-1435441/'
    }
  ];

  return new Promise((resolve: any, reject: any) => {
    Article.deleteMany({})
      .then((result: any) => {
        log.warning('\x1b[31m', 'DELETED: article', result.n, 'pages');
      })
      .then(() => {
        const newItems: Array<IArticle> = [];
        let counter = 0;

        data.forEach((item: Database.IArticle, index: number): void => {
          const {logo, body, imageMd} = item;

          Promise.all([
            uploadImagesForArticle(path.join(__dirname, `assets/${logo}`), path.join(__dirname, `assets/${imageMd}`)),
            readFile(path.join(__dirname, `assets/initial_articles/${body}`))
          ]).then((result) => {
            newItems[index] = {
              ...item,
              logo: result[0].logo,
              imageMd: result[0].imageMd,
              imageXl: result[0].imageXl,
              body: result[1]
            };

            counter++;

            if (counter === data.length) {
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
