import {TLanguage} from "../../types/types";
import {readInterface} from "../../services/db-middleware/interface";

import interfaceIndexEn from "./interface.index.en";
import interfaceIndexFr from "./interface.index.fr";
import interfaceIndexRu from "./interface.index.ru";
import interfaceIndexUk from "./interface.index.uk";
import {ILanguageObject} from "../../../_interface/ILanguageObject";
import {Database} from "../../../_interface/IMongooseSchema";
import {readContact} from "../../services/db-middleware/contact";
import {readService} from "../../services/db-middleware/service";

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

  const contact: Array<Database.IContact> = await readContact();
  const services: Array<Database.IService> = await readService(lang);

  interfaceObj = {
    ...interfaceObj,
    availableLanguages,
    services,
    contact: {
      ...interfaceObj.contact,
      items: contact
    }
  };

  return interfaceObj;
}
