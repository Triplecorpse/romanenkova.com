import {TLanguage} from "../../types/types";
import {readInterface} from "../../services/db-middleware/interface";

import interfaceServicesEn from "./interface.services.en";
import interfaceServicesFr from "./interface.services.fr";
import interfaceServicesRu from "./interface.services.ru";
import interfaceServicesUk from "./interface.services.uk";
import {readService} from "../../services/db-middleware/service";

export const configObj = {
  en: interfaceServicesEn,
  ru: interfaceServicesRu,
  uk: interfaceServicesUk,
  fr: interfaceServicesFr
};

export async function getServicesInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];

  interfaceObj.items = await readService(lang);

  return interfaceObj;
}
