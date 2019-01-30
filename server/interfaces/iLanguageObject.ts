import {TLanguage} from "../../_interface/types";

export interface IPageMetadata {
    description: string;
    position: string;
    firstName: string;
    lastName: string;
    rootPageTitle: string;
}

export interface ILanguageObject {
    codeISO2: TLanguage;
    locale: string;
    languageName: string;
    pageMetadata: IPageMetadata
}
