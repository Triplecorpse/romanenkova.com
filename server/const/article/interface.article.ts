import {TLanguage} from '../../../_interface/types';
import interfaceArticleEn from './interface.article.en';
import interfaceArticleRu from './interface.article.ru';
import interfaceArticleUk from './interface.article.uk';
import interfaceArticleFr from './interface.article.fr';

export const configObj: any = {
  en: interfaceArticleEn,
  ru: interfaceArticleRu,
  uk: interfaceArticleUk,
  fr: interfaceArticleFr
};

export async function getArticleInterface(lang: TLanguage) {
  return configObj[lang];
}
