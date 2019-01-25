import {TLanguage} from "../../types/types";
import {readInterface} from "../../services/db-middleware/interface";

import interfaceAboutEn from "./interface.about.en";
import interfaceAboutFr from "./interface.about.fr";
import interfaceAboutRu from "./interface.about.ru";
import interfaceAboutUk from "./interface.about.uk";
import {readService} from "../../services/db-middleware/service";

export const configObj: any = {
  en: interfaceAboutEn,
  ru: interfaceAboutRu,
  uk: interfaceAboutUk,
  fr: interfaceAboutFr
};

export async function getAboutInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];
  const aboutPage = await readInterface('about', lang);

  interfaceObj.items = await readService(lang);

  return interfaceObj;
}
