import {IPage, model as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getContactsPageData(): Promise<Array<IPage>> {
    const contacts = [{
        entityId: 'contacts',
        header: 'Contacts',
        pageData: [
            {name: "Skype", account: "ira", linkto: 'skype:ira?chat', type: 'skype'},
            {name: "Phone", account: "+380000000000", linkto: 'tel:+380000000000', type: 'phone'},
            {
                name: "E-mail",
                account: "infoAromanenkova.com",
                linkto: 'mailto:infoAromanenkova.com',
                type: 'email'
            }
        ],
        language: 'en'
    }, {
        entityId: 'contacts',
        header: 'Контакты',
        pageData: [
            {name: "Skype", account: "ira", linkto: 'skype:ira?chat', type: 'skype'},
            {name: "Телефон", account: "+380000000000", linkto: 'tel:+380000000000', type: 'phone'},
            {name: "E-mail", account: "infoAromanenkova.com", linkto: 'mailto:infoAromanenkova.com', type: 'email'}
        ],
        language: 'ru'
    }, {
        entityId: 'contacts',
        header: 'Контакти',
        pageData: [
            {name: "Skype", account: "ira", linkto: 'skype:ira?chat', type: 'skype'},
            {name: "Телефон", account: "+380000000000", linkto: 'tel:+380000000000', type: 'phone'},
            {name: "E-mail", account: "infoAromanenkova.com", linkto: 'mailto:infoAromanenkova.com', type: 'email'}
        ],
        language: 'uk'
    }, {
        entityId: 'contacts',
        header: 'Contacts',
        pageData: [
            {name: "Skype", account: "ira", linkto: 'skype:ira?chat', type: 'skype'},
            {name: "Téléphone", account: "+380000000000", linkto: 'tel:+380000000000', type: 'phone'},
            {name: "E-mail", account: "infoAromanenkova.com", linkto: 'mailto:infoAromanenkova.com', type: 'email'}
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
