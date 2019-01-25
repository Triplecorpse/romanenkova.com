import log from "../server/services/log-service";
import {Database} from "../_interface/IMongooseSchema";
import {Contact} from "../server/models/contact";

export function getNewContactsPageData(): Promise<Database.IContact> {
  const contacts = [
      {
        name: 'Telegram',
        value: 'irina_romanenkova',
        key: 'telegram'
      },
      {
        name: 'Viber',
        value: '+380664809701',
        key: 'viber'
      },
      {
        name: 'Skype',
        value: 'iren.romanenkova1986',
        key: 'skype'
      },
      {
        name: '',
        value: '+380664809701',
        key: 'phone',
      },
      {
        name: 'Email',
        value: 'info@romanenkova.com',
        key: 'email'
      },
      {
        name: 'Facebook',
        value: 'romanenkovagestalt',
        key: 'facebook'
      },
      {
        name: 'Instagram',
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
