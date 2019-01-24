import {TLanguage} from "../types/types";
import {readInterface} from "../services/db-middleware/interface";

import interfaceMainEn from "./interface.main.en";
import interfaceMainFr from "./interface.main.fr";
import interfaceMainRu from "./interface.main.ru";
import interfaceMainUk from "./interface.main.uk";
import {readDiploma} from "../services/db-middleware/diploma";
import {getReviews} from "../services/db-middleware/review";

export const configObj = {
  en: interfaceMainEn,
  ru: interfaceMainRu,
  uk: interfaceMainUk,
  fr: interfaceMainFr
};

export async function getMainInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];

  interfaceObj.diploma.items = await readDiploma();
  interfaceObj.review.items = await getReviews(5, {language: lang});
  const about = await readInterface('about', lang);
  interfaceObj.about.items = [{
    body: about[0].pageData.split('\n')[0],
    fullName: 'Irina Romanenkova',
    position: 'Psychologist',
    images: about[0].images
  }];

  interfaceObj = {...interfaceObj};

  return interfaceObj;
}
