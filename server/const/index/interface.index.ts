import {TLanguage} from "../../../_interface/types";

import interfaceIndexEn from "./interface.index.en";
import interfaceIndexFr from "./interface.index.fr";
import interfaceIndexRu from "./interface.index.ru";
import interfaceIndexUk from "./interface.index.uk";
import {ILanguageObject} from "../../../_interface/ILanguageObject";
import {Database} from "../../../_interface/IMongooseSchema";
import {readContact} from "../../services/db-middleware/contact";
import {readService} from "../../services/db-middleware/service";
import {readSchedule} from "../../services/db-middleware/schedule";

export const availableLanguages: Array<ILanguageObject> = [
  {
    codeISO2: 'ru',
    locale: 'RU',
    nativeName: 'Русский'
  },
  {
    codeISO2: 'uk',
    locale: 'UA',
    nativeName: 'Українська'
  },
  {
    codeISO2: 'en',
    locale: 'GB',
    nativeName: 'English'
  },
  {
    codeISO2: 'fr',
    locale: 'FR',
    nativeName: 'Français'
  }
];

export const configObj: any = {
  en: interfaceIndexEn,
  ru: interfaceIndexRu,
  uk: interfaceIndexUk,
  fr: interfaceIndexFr
};

export async function getIndexInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];
  const dbitems = await Promise.all([readContact(), readService(lang), readSchedule()]);
  const contact: Array<Database.IContact> = dbitems[0];
  const services: Array<Database.IService> = dbitems[1];
  const schedule: Array<Database.ISchedule> = dbitems[2];

  services.forEach((service: Database.IService) => {
    if (service.price) {
      service.headerAndPrice = `${service.header} - ${service.currency} ${service.price}/${service.period}`;
    } else {
      service.headerAndPrice = `${service.header} - ${service.noPriceValue}/${service.period}`;
    }
  });

  interfaceObj = {
    ...interfaceObj,
    availableLanguages,
    services,
    schedule,
    contact: {
      ...interfaceObj.contact,
      items: contact
    }
  };

  return interfaceObj;
}
