import {TLanguage, TPageId} from "../types/types";

export const languages: Array<TLanguage> = ['en', 'ru', 'uk', 'fr'];
export const pagesId: Array<TPageId> = ['nav', 'contacts', 'about', 'diploma', 'service', 'article', 'main', 'review', '[modal] appointment', '[modal] review'];
export const languageObjs: Array<{code: TLanguage, name: string}> = [{code: 'en', name: 'English'}, {code: 'ru', name: 'Русский'}, {code: 'uk', name: 'Українська'}, {code: 'fr', name: 'Français'}];