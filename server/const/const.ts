import {TLanguage} from "../../_interface/types";
import {ILanguageObject} from "../../_interface/ILanguageObject";
import {availableLanguages} from "./index/interface.index";

export const languages: Array<TLanguage> = availableLanguages.map((langObj: ILanguageObject): TLanguage => langObj.codeISO2);

export const errorMessages: any = {
    appointment: {
        name: {
            ru: 'Пожалуйста, введите Ваше имя.',
            en: 'Please enter your name.',
            uk: 'Будь ласка, введіть своє ім\'я.',
            fr: 'S\'il vous plaît entrez votre nom.'
        },
        email: {
            ru: 'Пожалуйста, введите ваш email.',
            en: 'Please enter your email.',
            uk: 'Будь ласка, введіть ваш email.',
            fr: 'S\'il vous plaît entrer votre email.'
        }
    },
    review: {
        review: {
            ru: 'Поле "Отзыв" обязательное.',
            en: 'The "Feedback" field is required.',
            uk: 'Поле "Відгук" обов\'язкове.',
            fr: 'Le champ "Revue" est obligatoire.'
        }
    },
    captcha: {
        ru: 'Recaptcha не может быть подтверждена.',
        en: 'Recaptcha cannot be validated.',
        uk: 'Recaptcha не може бути перевірена.',
        fr: 'Recaptcha ne peut être validé.'
    },
    email: {
        ru: 'Email не может быть отправлен.',
        en: 'Email can not be sent.',
        uk: 'Email не може бути відправлений.',
        fr: 'Email ne peut pas être envoyé.'
    },
    date: {
        ru: 'Неверный формат даты.',
        en: 'Invalid date input.',
        uk: 'Невірний формат дати.',
        fr: 'Format de date invalide.',
    }
};
export const successMessages: any = {
    appointment: {
        header: {
            ru: 'Запись на приём отправлена.',
            en: 'Appointment requested.',
            uk: 'Запис на прийом відправлено.',
            fr: 'Rendez-vous demandé.'
        },
        body: {
            ru: 'Спасибо за запись. Я с вами свяжусь при первой возможности.',
            en: 'Thank you for reaching out to me, I’ll contact you very soon.',
            uk: 'Дякую за запис. Я з вами зв\'яжуся якомога скоріше.',
            fr: 'Merci de me contacter, je vous contacterai très bientôt.'
        }
    },
    review: {
        header: {
            ru: 'Отзыв отправлен.',
            en: 'Feedback sent.',
            uk: 'Відгук відправлений.',
            fr: 'Commentaires envoyés.'
        },
        body: {
            ru: 'Отзыв появится на русскоязычной версии сайта, как только он будет проверен.',
            en: 'Your feedback will appear on the English version of the site as soon as it is verified.',
            uk: 'Відгук з\'явиться на україномовній версії сайту, як тільки він буде перевірений.',
            fr: 'Vos commentaires apparaîtront sur la version française du site dès qu\'ils auront été vérifiés.'
        }
    }
};
