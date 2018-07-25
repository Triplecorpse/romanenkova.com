import {iPage} from "../models/page";
import {tPageId} from "./tPageId";

export interface IPageLanguageContainer {
    en?: iPage;
    ru?: iPage;
    uk?: iPage;
}

export interface IPageSubmit {
    id: tPageId;
    page: IPageLanguageContainer;
    media?: Array<string>;
}