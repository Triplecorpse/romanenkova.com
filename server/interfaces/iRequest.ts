import {Request} from "express-serve-static-core";

export default interface IRequest extends Request {
    language?: string;
    files?: any;
}
