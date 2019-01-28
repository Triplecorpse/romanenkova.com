import {TLanguage} from "../../types/types";
import {readInterface} from "../../services/db-middleware/interface";

import interfaceMainEn from "./interface.main.en";
import interfaceMainFr from "./interface.main.fr";
import interfaceMainRu from "./interface.main.ru";
import interfaceMainUk from "./interface.main.uk";
import {readDiploma} from "../../services/db-middleware/diploma";
import {getReviews} from "../../services/db-middleware/review";
import {Page} from "../../../_interface/IPage";
import {readAbout} from "../../services/db-middleware/aboutPage";

export const configObj: any = {
  en: interfaceMainEn,
  ru: interfaceMainRu,
  uk: interfaceMainUk,
  fr: interfaceMainFr
};

export async function getMainInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];

  interfaceObj.diploma.items = await readDiploma();
  interfaceObj.review.items = await getReviews(5, {language: lang});

  const about: Page.IAboutPage = await readAbout(lang);
  const firstImage = about.items ? about.items[0] : null;

  interfaceObj.about.items = [];

  if (firstImage) {
    interfaceObj.about.items.push(firstImage);
  }

  interfaceObj.about.body = about.body.split('\n')[0];

  interfaceObj = {...interfaceObj};

  return interfaceObj;
}
