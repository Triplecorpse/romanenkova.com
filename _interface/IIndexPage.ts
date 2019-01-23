import {ILanguageObject} from "./ILanguageObject";
import {INavItem} from "./INavItem";
import {IPageMetadata} from "./IPageMetadata";
import {IAppointmentModal} from "./IAppointmenntModal";
import {IOverview} from "./IOverview";
import {IContactBlock} from "./IContactBlock";
import {IReviewModal} from "./IReviewModal";

export interface IIndexPage {
  nav: Array<INavItem>,
  language: ILanguageObject,
  pageMetadata: IPageMetadata,
  appointment: IAppointmentModal,
  diplomas: IOverview,
  about: IOverview,
  review: IOverview,
  contact: IContactBlock,
  reviewModal: IReviewModal,
}
