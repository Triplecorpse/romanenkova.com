import {TLanguage, TPageId} from "../types/types";
import {ILanguageObject} from "../interfaces/iLanguageObject";

export const langObjects: Array<ILanguageObject> = [
    {codeISO2: 'ru', locale: 'RU', languageName: 'Русский'},
    {codeISO2: 'uk', locale: 'UA', languageName: 'Українська'},
    {codeISO2: 'en', locale: 'UK', languageName: 'English'},
    {codeISO2: 'fr', locale: 'FR', languageName: 'Français'}
];

export const languages: Array<TLanguage> = langObjects.map((langObj: ILanguageObject): TLanguage => langObj.codeISO2);
export const pagesId: Array<TPageId> = ['nav', 'contacts', 'about', 'diploma', 'service', 'article', 'main', 'review', '[modal] appointment', '[modal] review'];
export const languageObjs: Array<{code: TLanguage, name: string}> =
    langObjects.map((langObj: ILanguageObject): {code: TLanguage, name: string} => ({code: langObj.codeISO2, name: langObj.languageName}) );
export const errorMessages: any = {
    appointment: {
        name: {
            ru: 'Пожалуйста, введите Ваше имя.',
            en: 'Please enter your name.',
            uk: 'Будь ласка, введіть своє ім\'я.',
            fr: 'S\'il vous plaît entrez votre nom.'
        },
        contact: {
            ru: 'Укажите хотя бы одну из ваших контактных данных или сообщений.',
            en: 'Please enter at least one of your contact data or message.',
            uk: 'Будь ласка, введіть принаймні один з ваших контактних даних або повідомлення.',
            fr: 'Veuillez entrer au moins une de vos données de contact ou message.'
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
            fr: 'La demande de réception a été envoyée.'
        },
        body: {
            ru: 'Пожалуйста, подождите, пока я не свяжусь с вами.',
            en: 'Please wait until I will contact you.',
            uk: 'Будь ласка, зачекайте, поки я зв\'яжусь з вами.',
            fr: 'Veuillez attendre que je vous contacte.'
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
            en: 'Feedback will appear on the English version of the site as soon as it is verified.',
            uk: 'Відгук з\'явиться на україномовній версії сайту, як тільки він буде перевірений.',
            fr: 'Les commentaires apparaîtront sur la version française du site dès que celle-ci aura été vérifiée.'
        }
    }
};
export const templateVars: any = {
    en: {description: 'Personal website of online psychologist'},
    ru: {description: 'Персональный сайт онлайн-психолога'},
    uk: {description: 'Особистий сайт онлайн-психолога'},
    fr: {description: 'Site personnel du psychologue en ligne'},
};
