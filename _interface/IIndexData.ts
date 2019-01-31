import {ILanguageObject} from "./ILanguageObject";
import {INavItem} from "./INavItem";
import {IPageMetadata} from "./IPageMetadata";
import {IAppointmentModal} from "./IAppointmenntModal";
import {IContactBlock} from "./IContactBlock";
import {Database} from "./IMongooseSchema";
import {ICookiesConsentModal} from "./ICookiesConsentModal";
import {IFooter} from "./IFooter";

export interface IIndexData {
  rootLink: [string, string],
  nav: Array<INavItem>,
  language: ILanguageObject,
  availableLanguages: Array<ILanguageObject>,
  pageMetadata: IPageMetadata,
  appointment: IAppointmentModal,
  contact: IContactBlock,
  services: Array<Database.IService>,
  schedule: Array<Database.ISchedule>,
  cookies: ICookiesConsentModal,
  footer: IFooter,
  tcIsLoading: string;
}
