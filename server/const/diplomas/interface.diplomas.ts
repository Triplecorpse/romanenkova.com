import {TLanguage} from "../../types/types";

import interfaceDiplomasEn from "./interface.diplomas.en";
import interfaceDiplomasFr from "./interface.diplomas.fr";
import interfaceDiplomasRu from "./interface.diplomas.ru";
import interfaceDiplomasUk from "./interface.diplomas.uk";
import {readDiploma} from "../../services/db-middleware/diploma";

export const configObj = {
  en: interfaceDiplomasEn,
  ru: interfaceDiplomasRu,
  uk: interfaceDiplomasUk,
  fr: interfaceDiplomasFr
};

export async function getDiplomasInterface(lang: TLanguage) {
  let interfaceObj: any = configObj[lang];

  interfaceObj.items = await readDiploma();

  return interfaceObj;
}
