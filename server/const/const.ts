import {TLanguage, TPageId} from "../types/types";

export const languages: Array<TLanguage> = ['en', 'ru', 'uk', 'fr'];
export const pagesId: Array<TPageId> = ['nav', 'contacts', 'about', 'diploma', 'service', 'article', 'main', 'review', '[modal] appointment', '[modal] review'];
export const languageObjs: Array<{code: TLanguage, name: string}> = [{code: 'en', name: 'English'}, {code: 'ru', name: 'Русский'}, {code: 'uk', name: 'Українська'}, {code: 'fr', name: 'Français'}];
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
    captcha: {
        ru: 'Recaptcha не может быть подтверждена.',
        en: 'Recaptcha cannot be validated.',
        uk: 'Recaptcha не може бути перевірена.',
        fr: 'Recaptcha ne peut être validé.'
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
    }
};
