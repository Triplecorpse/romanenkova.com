import {ILanguageObject} from "./ILanguageObject";
import {INavItem} from "./INavItem";
import {IPageMetadata} from "./IPageMetadata";
import {IAppointmentModal} from "./IAppointmenntModal";
import {IContactBlock} from "./IContactBlock";
import {Database} from "./IMongooseSchema";

export interface IIndexData {
  nav: Array<INavItem>,
  language: ILanguageObject,
  pageMetadata: IPageMetadata,
  appointment: IAppointmentModal,
  contact: IContactBlock,
  services: Array<Database.IService>
}
