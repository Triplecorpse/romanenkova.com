import {IIndexData} from '../../../_interface/IIndexData';

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
  services: [],
  schedule: [],
  cookies: {
    header: 'Чи хотіли б ви дозволити cookies?',
    options: [
      {
        header: 'Дозволити відслідковування за допомогою Google Analytics',
        subscr: 'Якщо з вашою згодою були попередні сесії, файли cookie для Google Analytics залишатимуться. Однак, ви не будете відстежуватися. До Google Analytics буде надіслана анонімна статистика',
        items: ['Ваша геолокація, визначена по IP', 'Ваші системні дані (ОС, веб-переглядач, платформа тощо)'],
        model: true,
        entityId: 'ga'
      },
      {
        header: 'Дозволити cookies сайта',
        subscr: 'Зберігати обрану мову',
        model: true,
        entityId: 'site'
      },
      {
        header: 'Не показувати протягом 1 тижня',
        subscr: 'Вимагає установки cookie',
        model: true,
        entityId: 'save'
      }
    ],
    privacyPolicy: ['Будь ласка, уважно прочитайте нашу', 'політику конфіденційності,', 'щоб мати повне розуміння того, як ми збираємо, зберігаємо та використовуємо персональні дані.']
  },
  footer: {
    designed: 'Дизайн розроблений: <strong><a href="https://www.behance.net/Aleksandr_Gaidai" target="_blank">Олександр Гайдай</a></strong>',
    qna: 'Задати питання чи залишити коментар',
    termspolicy: 'Політика конфіденційності'
  },
  tcIsLoading: 'Завантаження...',
  agreepp: ['Я прочитав та погоджуюсь з', 'Політикою конфіденційності']
} as IIndexData;
