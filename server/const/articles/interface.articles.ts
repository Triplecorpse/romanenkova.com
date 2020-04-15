import {TLanguage} from '../../../_interface/types';

import interfaceArticlesEn from './interface.articles.en';
import interfaceArticlesFr from './interface.articles.fr';
import interfaceArticlesRu from './interface.articles.ru';
import interfaceArticlesUk from './interface.articles.uk';
import {readArticlesPreviews} from '../../services/db-middleware/article';

export const configObj: any = {
  en: interfaceArticlesEn,
  ru: interfaceArticlesRu,
  uk: interfaceArticlesUk,
  fr: interfaceArticlesFr
};

export async function getArticlesInterface(lang: TLanguage) {
  const interfaceObj: any = configObj[lang];

  interfaceObj.items = await readArticlesPreviews();

  return interfaceObj;
}
