import {TLanguage} from "../types/types";
import {readInterface} from "../services/db-middleware/interface";

import interfaceIndexEn from "./interface.index.en";

export const configObj = {
  en: interfaceIndexEn,
  ru: {
    diplomas: {
      header: 'Дипломы и сертификаты',
      button: 'Посмотреть все'
    }
  },
  uk: {
    diplomas: {
      header: 'Дипломи та сертифікати',
      button: 'Подивитися усі'
    }
  },
  fr: {
    diplomas: {
      header: 'Diplômes et certificats',
      button: 'Voir tout'
    }
  }
};

export async function getIndexInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];
  interfaceObj.about.position = interfaceObj.pageMetadata.position;
  interfaceObj.about.fullName = `${interfaceObj.pageMetadata.firstName} ${interfaceObj.pageMetadata.lastName}`;

  const contact = await readInterface(['contacts', 'about'], lang);

  interfaceObj = {...interfaceObj, contact};

  return interfaceObj;
}
