import {TLanguage} from "../types/types";
import {readInterface} from "../services/db-middleware/interface";

import interfaceIndexEn from "./interface.index.en";
import interfaceIndexFr from "./interface.index.fr";
import interfaceIndexRu from "./interface.index.ru";
import interfaceIndexUk from "./interface.index.uk";
import {ILanguageObject} from "../../_interface/ILanguageObject";

const availableLanguages: Array<ILanguageObject> = [
  {
    codeISO2: 'ru',
    locale: 'RU',
    languageName: 'Русский'
  },
  {
    codeISO2: 'uk',
    locale: 'UA',
    languageName: 'Українська'
  },
  {
    codeISO2: 'en',
    locale: 'GB',
    languageName: 'English'
  },
  {
    codeISO2: 'fr',
    locale: 'FR',
    languageName: 'Français'
  }
];

export const configObj = {
  en: interfaceIndexEn,
  ru: interfaceIndexRu,
  uk: interfaceIndexUk,
  fr: interfaceIndexFr
};

export async function getIndexInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];
  interfaceObj.about.position = interfaceObj.pageMetadata.position;
  interfaceObj.about.fullName = `${interfaceObj.pageMetadata.firstName} ${interfaceObj.pageMetadata.lastName}`;

  const contact = await readInterface(['contacts', 'about'], lang);

  interfaceObj = {...interfaceObj, contact, availableLanguages};

  return interfaceObj;
}
