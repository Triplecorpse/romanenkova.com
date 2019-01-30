import {TLanguage} from "../../../_interface/types";

import interfaceAboutEn from "./interface.about.en";
import interfaceAboutFr from "./interface.about.fr";
import interfaceAboutRu from "./interface.about.ru";
import interfaceAboutUk from "./interface.about.uk";
import {readAbout} from "../../services/db-middleware/aboutPage";

export const configObj: any = {
  en: interfaceAboutEn,
  ru: interfaceAboutRu,
  uk: interfaceAboutUk,
  fr: interfaceAboutFr
};

export async function getAboutInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];
  const aboutPage = await readAbout(lang);

  interfaceObj = {
    ...interfaceObj,
    ...aboutPage,
    header: interfaceObj.header
  };

  return interfaceObj;
}
