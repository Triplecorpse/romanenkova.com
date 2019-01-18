import {TLanguage} from './types';
import {ILangItem} from './iLangItem';
import {ILocale} from "./ILocale";

export interface ILanguageResponse {
  lang: TLanguage;
  availableLangs: Array<ILocale>;
}
