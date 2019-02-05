import {TLanguage} from "./types";

export interface ILanguageObject {
  codeISO2: TLanguage;
  locale: string;
  nativeName: string;
  href?: string;
}
