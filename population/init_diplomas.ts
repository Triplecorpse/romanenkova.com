import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getDiplomaPageData(): Promise<Array<IPage>> {
  const data = [
    {
      entityId: 'diploma',
      header: 'Diplomas',
      language: 'en',
      pageData: {
        overview: {
          header: 'Diplomas and certificates',
          button: 'View All'
        }
      }
    }, {
      entityId: 'diploma',
      header: 'Дипломы',
      language: 'ru',
      pageData: {
        overview: {
          header: 'Дипломы и сертификаты',
          button: 'Посмотреть все'
        }
      }
    }, {
      entityId: 'diploma',
      header: 'Дипломи',
      language: 'uk',
      pageData: {
        overview: {
          header: 'Дипломи та сертифікати',
          button: 'Подивитися усі'
        }
      }
    }, {
      entityId: 'diploma',
      header: 'Diplômes',
      language: 'fr',
      pageData: {
        overview: {
          header: 'Diplômes et certificats',
          button: 'Voir tout'
        }
      }
    }
  ];

  return new Promise((resolve: any, reject: any) => {
    Page.deleteMany({entityId: 'diploma'})
      .then((result: any) => {
        log.warning('\x1b[31m', 'DELETED: diploma', result.n, 'pages');
        resolve(data);
      })
      .catch((err: any) => {
        reject(err);
      });
  })
}
