import {TLanguage} from "../../../_interface/types";

import interfaceServicesEn from "./interface.services.en";
import interfaceServicesFr from "./interface.services.fr";
import interfaceServicesRu from "./interface.services.ru";
import interfaceServicesUk from "./interface.services.uk";
import {readService} from "../../services/db-middleware/service";

export const configObj: any = {
  en: interfaceServicesEn,
  ru: interfaceServicesRu,
  uk: interfaceServicesUk,
  fr: interfaceServicesFr
};

export async function getServicesInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];

  interfaceObj.items = await readService(lang).catch(e => {
    throw new Error(e.message);
  });

  return interfaceObj;
}
