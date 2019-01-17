import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getContactsPageData(): Promise<Array<IPage>> {
    const contacts = [{
        entityId: 'contacts',
        header: 'Contacts',
        pageData: [
            {
                name: 'Telegram',
                account: 'irina_romanenkova',
                type: 'telegram'
            },
            {
                name: 'Viber',
                account: '+380664809701',
                type: 'viber'
            },
            {
                name: 'Skype',
                account: 'iren.romanenkova1986',
                type: 'skype'
            },
            {
                name: 'Phone',
                account: '+380664809701',
                type: 'phone',
            },
            {
                name: 'E-mail',
                account: 'info@romanenkova.com',
                type: 'email'
            },
            {
                name: 'Facebook',
                account: 'romanenkovagestalt',
                type: 'facebook'
            },
            {
                name: 'Instagram',
                account: 'irinaromanenkova31',
                type: 'instagram'
            }
        ],
        language: 'en'
    }, {
        entityId: 'contacts',
        header: 'Контакты',
        pageData: [
            {
                name: 'Telegram',
                account: 'irina_romanenkova',
                type: 'telegram'
            },
            {
                name: 'Viber',
                account: '+380664809701',
                type: 'viber'
            },
            {
                name: 'Skype',
                account: 'iren.romanenkova1986',
                type: 'skype'
            },
            {
                name: 'Телефон',
                account: '+380664809701',
                type: 'phone',
            },
            {
                name: 'E-mail',
                account: 'info@romanenkova.com',
                type: 'email'
            },
            {
                name: 'Facebook',
                account: 'romanenkovagestalt',
                type: 'facebook'
            },
            {
                name: 'Instagram',
                account: 'irinaromanenkova31',
                type: 'instagram'
            }
        ],
        language: 'ru'
    }, {
        entityId: 'contacts',
        header: 'Контакти',
        pageData: [
            {
                name: 'Telegram',
                account: 'irina_romanenkova',
                type: 'telegram'
            },
            {
                name: 'Viber',
                account: '+380664809701',
                type: 'viber'
            },
            {
                name: 'Skype',
                account: 'iren.romanenkova1986',
                type: 'skype'
            },
            {
                name: 'Телефон',
                account: '+380664809701',
                type: 'phone',
            },
            {
                name: 'E-mail',
                account: 'info@romanenkova.com',
                type: 'email'
            },
            {
                name: 'Facebook',
                account: 'romanenkovagestalt',
                type: 'facebook'
            },
            {
                name: 'Instagram',
                account: 'irinaromanenkova31',
                type: 'instagram'
            }
        ],
        language: 'uk'
    }, {
        entityId: 'contacts',
        header: 'Contacts',
        pageData: [
            {
                name: 'Telegram',
                account: 'irina_romanenkova',
                type: 'telegram'
            },
            {
                name: 'Viber',
                account: '+380664809701',
                type: 'viber'
            },
            {
                name: 'Skype',
                account: 'iren.romanenkova1986',
                type: 'skype'
            },
            {
                name: 'Téléphone',
                account: '+380664809701',
                type: 'phone',
            },
            {
                name: 'E-mail',
                account: 'info@romanenkova.com',
                type: 'email'
            },
            {
                name: 'Facebook',
                account: 'romanenkovagestalt',
                type: 'facebook'
            },
            {
                name: 'Instagram',
                account: 'irinaromanenkova31',
                type: 'instagram'
            }
        ],
        language: 'fr'
    }];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: 'contacts'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: contacts', result.n, 'pages');
                resolve(contacts);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
