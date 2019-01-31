import {Request} from "express-serve-static-core";
import {TLanguage} from "../../_interface/types";

export default interface IRequest extends Request {
    language?: TLanguage;
    files?: any;
    isTokenValid?: boolean;
}
