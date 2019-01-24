import log from "../server/services/log-service";
import {Database} from "../_interface/IMongooseSchema";
import {Contact} from "../server/models/contact";

export function getNewContactsPageData(): Promise<Database.IContact> {
  const contacts = [
      {
        value: 'irina_romanenkova',
        key: 'telegram'
      },
      {
        value: '+380664809701',
        key: 'viber'
      },
      {
        value: 'iren.romanenkova1986',
        key: 'skype'
      },
      {
        value: '+380664809701',
        key: 'phone',
      },
      {
        value: 'info@romanenkova.com',
        key: 'email'
      },
      {
        value: 'romanenkovagestalt',
        key: 'facebook'
      },
      {
        value: 'irinaromanenkova31',
        key: 'instagram'
      }
    ];

  return new Promise((resolve: any, reject: any) => {
    Contact.deleteMany({})
      .then((result: any) => {
        log.warning('\x1b[31m', 'DELETED: new contact', result.n, 'pages');
        resolve(contacts);
      })
      .catch((err: any) => {
        reject(err);
      });
  })
}
