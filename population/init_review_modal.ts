import {Service} from "../server/models/service";

require('dotenv').config();

import {IPage, Page as Page} from "../server/models/page";
import log from "../server/services/log-service";

export function getReviewModalPageData(): Promise<Array<IPage>> {
    const data = [
        {
            entityId: '[modal] review',
            header: 'Leave a feedback',
            pageData: {
                name: 'Full name',
                namesubscr: 'If you don\'t want to publish your name, leave it blank or enter your nickname',
                email: 'Email',
                emailsubscr: 'Is not published',
                review: 'Feedback',
                submit: 'Submit feedback',
                explanation: 'The email field is not published and is not stored in the site database. However, it can be stored in my personal mailbox and will be used only for possible communication with you.\nYour name will be displayed on the website in the "Reviews" block exactly as it was entered by you. If you wish to remain incognito, leave the field blank or enter your nickname.',
            },
            language: 'en'
        }, {
            entityId: '[modal] review',
            header: 'Оставить отзыв',
            pageData: {
                name: 'Имя и фамилия',
                namesubscr: 'Если вы не хотите публиковать имя, оставьте это полу пустым или введите ваш ник',
                email: 'Email',
                emailsubscr: 'Не публикуется',
                review: 'Отзыв',
                submit: 'Оставить отзыв',
                explanation: 'Поле email не публикуется и не сохраняется в базе данных сайта. Однако, может быть сохранено в моём личном почтовом ящике и будет использоваться только для возможной связи с вами.\nВаше имя будет отображаться на сайте в блоке "Отзывы" точно так, как оно было введено вами. Если вы желаете оставаться инкогнито, оставьте поле пустым или введите ваш ник.',
            },
            language: 'ru'
        }, {
            entityId: '[modal] review',
            header: 'Залишити відгук',
            pageData: {
                name: 'Ім\'я та прізвище',
                namesubscr: 'Якщо ви не хочете публікувати свлє ім\'я, залиште це поле порожнім або введіть ваш нік',
                email: 'Email',
                emailsubscr: 'Не буде опубліковано',
                review: 'Відгук',
                submit: 'Залишити відгук',
                explanation: 'Поле email не буде опубліковано і не буде збережено у базі даних сайту. Однак, може бути збережено в моїй особистій поштовій скринці і буде використовуватися тільки для можливого зв\'язку з вами.\nВаше ім\'я буде відображатися на сайті в блоці "Відгуки" точно так, як воно було введено вами. Якщо ви бажаєте залишатися інкогніто, залиште поле порожнім або введіть ваш нік.',
            },
            language: 'uk'
        }, {
            entityId: '[modal] review',
            header: 'Laisser des commentaires',
            pageData: {
                name: 'Nom complet',
                namesubscr: 'Si vous ne souhaitez pas publier votre nom, laissez-le vide ou entrez votre pseudo.',
                email: 'Email',
                emailsubscr: 'N\'est pas publié',
                review: 'Revue',
                submit: 'Soumettre un commentaire',
                explanation: 'Le champ email n\'est pas publié et n\'est pas stocké dans la base de données du site. Cependant, il peut être stocké dans ma boîte aux lettres personnelle et ne sera utilisé que pour une éventuelle communication avec vous.\nVotre nom sera affiché sur le site Web dans le bloc "Retour d\'information" exactement tel que vous l\'avez entré. Si vous souhaitez rester incognito, laissez le champ vide ou entrez votre pseudo.',
            },
            language: 'fr'
        }
    ];

    return new Promise((resolve: any, reject: any) => {
        Page.deleteMany({entityId: '[modal] review'})
            .then((result: any) => {
                log.warning('\x1b[31m', 'DELETED: modalreview', result.n, 'pages');
                resolve(data);
            })
            .catch((err: any) => {
                reject(err);
            });
    })
}
