import {Page} from "../../../_interface/IPage";

export default {
  header: 'Онлайн консультация и терапия',
  diploma: {
    header: 'Дипломы и сертификаты',
    button: 'Посмотреть все'
  },
  about: {
    header: 'Психолог|Ирина Романенкова',
    button: 'Обо мне'
  },
  review: {
    header: 'Отзывы',
    button: 'Добавить отзыв...',
    noReviews: 'Пока что нет отзывов, оставленных с русской версии сайта. Почему бы не написать первый?',
    anonymous: 'Анонимно'
  },
  reviewModal: {
    header: 'Написать отзыв',
    name: 'Имя и фамилия',
    namesubscr: 'Если вы не хотите публиковать имя, оставьте это полу пустым или введите ваш ник',
    email: 'Email',
    emailsubscr: 'Не публикуется',
    review: 'Отзыв *',
    submit: 'Отправить отзыв',
    explanation: 'Поле email не публикуется и не сохраняется в базе данных сайта. Однако, может быть сохранено в моём личном почтовом ящике и будет использоваться только для возможной связи с вами.\nВаше имя будет отображаться на сайте в блоке "Отзывы" точно так, как оно было введено вами. Если вы желаете оставаться инкогнито, оставьте поле пустым или введите ваш ник.'
  }
} as Page.IMainPage;