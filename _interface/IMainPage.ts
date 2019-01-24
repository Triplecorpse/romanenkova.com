import {IOverview} from "./IOverview";
import {IReviewModal} from "./IReviewModal";
import {Database} from "./IMongooseSchema";

export interface IMainPage {
  diploma: IOverview<Database.IDiploma>,
  about: IOverview<Database.IAboutPage>,
  review: IOverview<Database.IReview>,
  reviewModal: IReviewModal
}
