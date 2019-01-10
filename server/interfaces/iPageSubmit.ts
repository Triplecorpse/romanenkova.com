import {IPage} from "../models/page";
import {TPageId, TStatus} from "../types/types";

export interface IPageLanguageContainer {
    en?: IPage;
    ru?: IPage;
    uk?: IPage;
    fr?: IPage;
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