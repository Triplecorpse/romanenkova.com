import {TLanguage} from "../../types/types";

import interfaceArticlesEn from "./interface.articles.en";
import interfaceArticlesFr from "./interface.articles.fr";
import interfaceArticlesRu from "./interface.articles.ru";
import interfaceArticlesUk from "./interface.articles.uk";
import {readService} from "../../services/db-middleware/service";

export const configObj: any = {
  en: interfaceArticlesEn,
  ru: interfaceArticlesRu,
  uk: interfaceArticlesUk,
  fr: interfaceArticlesFr
};

export async function getArticlesInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];

  interfaceObj.items = await readService(lang);

  return interfaceObj;
}
