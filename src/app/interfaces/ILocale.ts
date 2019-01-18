import {TLanguage} from "./types";

export interface IPageMetadata {
  description: string;
  position: string;
  firstName: string;
  lastName: string;
  rootPageTitle: string;
}

export interface ILocale {
  codeISO2: TLanguage;
  locale: string;
  languageName: string;
  pageMetadata: IPageMetadata
}
