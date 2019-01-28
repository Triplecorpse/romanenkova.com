import {IIndexData} from "../../../_interface/IIndexData";

export default {
  rootLink: ['Онлайн', 'психолог'],
  nav: [
    {header: 'Про мене', anchor: 'about'},
    {header: 'Послуги', anchor: 'services'},
    {header: 'Дипломи', anchor: 'diplomas'},
    {header: 'Статті', anchor: 'articles'},
    {header: 'Контакти', anchor: 'contacts'}
  ],
  language: {
    codeISO2: 'uk',
    locale: 'UA',
    nativeName: 'Українська'
  },
  pageMetadata: {
    description: 'Особистий сайт онлайн-психолога',
    position: 'Психолог',
    firstName: 'Ірина',
    lastName: 'Романенкова',
    rootPageTitle: 'Головна'
  },
  appointment: {
    header: 'Записатися на прийом...',
    name: 'Ім\'я та прізвище *',
    phone: 'Телефон',
    phoneOption: 'Інший месенджер',
    contact: 'Контакт',
    nickname: 'Нік',
    contactOption: 'Телефон / Нік',
    email: 'Email *',
    date: 'Дата',
    datesubscr: 'Орієнтовна',
    time: 'Місцевий час',
    service: 'Послуга',
    message: 'Повідомлення',
    checkbox: 'З правилами ознайомлений',
    submit: 'Записатися',
    instructions: 'Необхідні поля: ім\'я та будь-яка контактна інформація.',
    explanation: 'Дата і час першої пробної консультації є орієнтовними і можуть змінитися за обопільною домовленістю.\nНіякі особисті дані, які були введені у цій формі, не зберігаються на сайті і не передаються третім особам у рекламних цілях.\nКонтактна інформація використовується тільки для контакта з вами і зберігається тільки у моїй особистій поштовій скринці.',
    selectClear: 'Очистити вибір'
  },
  contact: {
    header: 'Контакти',
    phoneLabel: 'Телефон',
    items: []
  },
  availableLanguages: [],
  services: []
} as IIndexData;
