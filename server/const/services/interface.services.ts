import {TLanguage} from "../../../_interface/types";

import interfaceServicesEn from "./interface.services.en";
import interfaceServicesFr from "./interface.services.fr";
import interfaceServicesRu from "./interface.services.ru";
import interfaceServicesUk from "./interface.services.uk";
import {readService} from "../../services/db-middleware/service";
import {Database} from "../../../_interface/IMongooseSchema";

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

  interfaceObj.items.forEach((service: Database.IService) => {
    if (service.price) {
      service.headerAndPrice = `${service.header} - ${service.currency} ${service.price}/${service.period}`;
    } else {
      service.headerAndPrice = `${service.header} - ${service.noPriceValue}/${service.period}`;
    }
  });

  return interfaceObj;
}
