import {TLanguage} from '../../_interface/types';

declare global {
  namespace Express {
    interface Request {
      language?: TLanguage;
      files?: any;
      isTokenValid?: boolean;
      isLocalhost?: boolean;
      isQa?: boolean;
    }
  }
}
