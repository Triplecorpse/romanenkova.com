import {IPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getContactsPageData(): Promise<Array<IPage>> {
    const contacts = [{
        entityId: 'contacts',
        header: 'Contacts',
        pageData: [
            {
                name: 'Telegram',
                account: 'triplecorpse',
                type: 'telegram'
            },
            {
                name: 'Viber',
                account: 'microbenz',
                type: 'viber'
            },
            {
                name: 'Skype',
                account: 'microbenz',
                type: 'skype'
            },
            {
                name: 'Phone',
                account: '+380971499115',
                type: 'phone',
            },
            {
                name: 'E-mail',
                account: 'eldar.khaitov@gmail.com',
                type: 'email'
            },
            {
                name: 'Facebook',
                account: 'eldar.khaitov',
                type: 'facebook'
            },
            {
                name: 'Instagram',
                account: 'triplecorpse',
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
                account: 'triplecorpse',
                type: 'telegram'
            },
            {
                name: 'Viber',
                account: 'microbenz',
                type: 'viber'
            },
            {
                name: 'Skype',
                account: 'microbenz',
                type: 'skype'
            },
            {
                name: 'Телефон',
                account: '+380971499115',
                type: 'phone',
            },
            {
                name: 'E-mail',
                account: 'eldar.khaitov@gmail.com',
                type: 'email'
            },
            {
                name: 'Facebook',
                account: 'eldar.khaitov',
                type: 'facebook'
            },
            {
                name: 'Instagram',
                account: 'triplecorpse',
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
                account: 'triplecorpse',
                type: 'telegram'
            },
            {
                name: 'Viber',
                account: 'microbenz',
                type: 'viber'
            },
            {
                name: 'Skype',
                account: 'microbenz',
                type: 'skype'
            },
            {
                name: 'Телефон',
                account: '+380971499115',
                type: 'phone',
            },
            {
                name: 'E-mail',
                account: 'eldar.khaitov@gmail.com',
                type: 'email'
            },
            {
                name: 'Facebook',
                account: 'eldar.khaitov',
                type: 'facebook'
            },
            {
                name: 'Instagram',
                account: 'triplecorpse',
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
                account: 'triplecorpse',
                type: 'telegram'
            },
            {
                name: 'Viber',
                account: 'microbenz',
                type: 'viber'
            },
            {
                name: 'Skype',
                account: 'microbenz',
                type: 'skype'
            },
            {
                name: 'Téléphone',
                account: '+380971499115',
                type: 'phone',
            },
            {
                name: 'E-mail',
                account: 'eldar.khaitov@gmail.com',
                type: 'email'
            },
            {
                name: 'Facebook',
                account: 'eldar.khaitov',
                type: 'facebook'
            },
            {
                name: 'Instagram',
                account: 'triplecorpse',
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
            .catch(() => {
                resolve(contacts);
            });
    })
}
