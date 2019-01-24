import {IOverview} from "./IOverview";
import {Database} from "./IMongooseSchema";
import {IReviewModal} from "./IReviewModal";
import {IReviewOverview} from "./IReviewOverview";

interface IPage<T = any> {
  header: string;
  items?: Array<T>
}

export namespace Page {
  export interface IMainPage extends IPage {
    diploma: IOverview<Database.IDiploma>,
    about: IOverview<IAboutPage>,
    review: IReviewOverview,
    reviewModal: IReviewModal
  }

  export interface IAboutPage extends IPage<string> {
    body: string;
    fullName?: string;
    position?: string;
  }

  export interface IArticlesPage extends IPage<Database.IArticle> {

  }

  export interface IDiplomaPage extends IPage<Database.IDiploma> {

  }

  export interface IServicesPage extends IPage<Database.IService> {

  }
}
