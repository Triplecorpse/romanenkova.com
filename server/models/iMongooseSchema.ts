import {TLanguage} from "../types/types";

export interface iMongooseSchema {
    _id?: string;
    __v?: string;
    language: TLanguage;
}
