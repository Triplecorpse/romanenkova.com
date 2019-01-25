import {TLanguage} from "../server/types/types";

export interface ILanguageObject {
  codeISO2: TLanguage;
  locale: string;
  nativeName: string;
  href?: string;
}
