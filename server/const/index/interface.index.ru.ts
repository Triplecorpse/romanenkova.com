import {IIndexData} from "../../../_interface/IIndexData";

export default {
  nav: [
    {name: 'Онлайн|психолог', anchor: 'main'},
    {name: 'Обо мне', anchor: 'about'},
    {name: 'Услуги', anchor: 'services'},
    {name: 'Дипломы', anchor: 'diplomas'},
    // {name: 'Статьи', anchor: 'articles'},
    {name: 'Контакты', anchor: 'contacts'}
  ],
  language: {
    codeISO2: 'ru',
    locale: 'RU',
    nativeName: 'Русский'
  },
  pageMetadata: {
    description: 'Персональный сайт онлайн-психолога',
    position: 'Психолог',
    firstName: 'Ирина',
    lastName: 'Романенкова',
    rootPageTitle: 'Главная'
  },
  appointment: {
    name: 'Имя и фамилия',
    phone: 'Телефон',
    phoneOption: 'Телефон (любой мессенджер)',
    nickname: 'Ник',
    contact: 'Контакт',
    contactOption: 'Телефон / ник',
    email: 'Email',
    date: 'Дата',
    datesubscr: 'Ориентировочная',
    time: 'Местное время',
    service: 'Вид консультации',
    message: 'Сообщение',
    checkbox: 'С правилами сайта ознакомлен',
    submit: 'Записаться',
    instructions: 'Необходимые поля: имя и любая контактная информация.',
    header: 'Записаться на приём...',
    explanation: 'Дата и время первой пробной консультации являются ориентировочными и могут измениться по обоюдной договорённости.\nНикакие личные данные, введённые в этой форме, не сохраняются на сайте и не передаются третьим лицам в рекламных целях.\nКонтактная информация используется только для контакта с вами и сохраняется только в моём личном почтовом ящике.',
    selectClear: 'Очистить выбор'
  },
  contact: {
    header: 'Контакты',
    phoneLabel: 'Телефон',
    items: []
  },
  availableLanguages: [],
  services: []
} as IIndexData;
