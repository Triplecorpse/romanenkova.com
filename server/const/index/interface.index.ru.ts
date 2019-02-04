import {IIndexData} from "../../../_interface/IIndexData";

export default {
  rootLink: ['Онлайн', 'психотерапевт'],
  nav: [
    {header: 'Обо мне', anchor: 'about'},
    {header: 'Услуги', anchor: 'services'},
    {header: 'Дипломы', anchor: 'diplomas'},
    // {header: 'Статьи', anchor: 'articles'},
    {header: 'Контакты', anchor: 'contacts'}
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
    name: 'Имя и фамилия *',
    phone: 'Телефон',
    phoneOption: 'Другой мессенджер',
    nickname: 'Ник',
    contact: 'Контакт',
    contactOption: 'Телефон / Ник',
    email: 'Email *',
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
  services: [],
  schedule: [],
  cookies: {
    header: 'Вы бы хотели разрешить использование cookies?',
    options: [
      {
        header: 'Разрешить отслеживание Google Analytics',
        subscr: 'Если с вашего согласия был предыдущий сеанс, файлы cookie для Google Analytics будут сохранены. Тем не менее, вы не будете отслежены. На Google Analytics будет отправлена анонимная статистика',
        items: ['Ваша геолокация, основанная на IP', 'Ваши системные характеристики (ОС, браузер, платформа и т.д.)'],
        model: true,
        entityId: 'ga'
      },
      {
        header: 'Разрешить cookies сайта',
        subscr: 'Сохранять выбранный язык',
        model: true,
        entityId: 'site'
      },
      {
        header: 'Не спрашивать в течение 1 недели',
        subscr: 'Требуется запись в куки',
        model: true,
        entityId: 'save'
      }
    ],
    privacyPolicy: 'Пожалуйста, внимательно прочтите нашу политику конфиденциальности что иметь полное понимание того, как мы собираем, храним и используем персональные данные.'
  },
  footer: {
    designed: 'Дизайн разработан: <strong><a href="https://www.behance.net/Aleksandr_Gaidai" target="_blank">Александр Гайдай</a></strong>',
    qna: 'Задать вопрос или оставить комментарий',
    termspolicy: 'Политика конфидециальности'
  },
  tcIsLoading: 'Загрузка...',
  agreepp: ['Я прочитал и согласен с', 'Политикой конфиденциальности']
} as IIndexData;
