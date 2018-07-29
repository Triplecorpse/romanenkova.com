import {iPage} from "../models/page";
import {TPageId, TStatus} from "../types/types";

export interface IPageLanguageContainer {
    en?: iPage;
    ru?: iPage;
    uk?: iPage;
}

export interface IPageImage {
    src: string;
    status: TStatus;
}

export interface IPageSubmit {
    id: TPageId;
    page: IPageLanguageContainer;
    media?: Array<IPageImage>;
}