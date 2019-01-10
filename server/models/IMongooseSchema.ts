import {TLanguage} from "../types/types";

export interface IMongooseSchema {
    _id?: string;
    __v?: string;
    language: TLanguage;
}
