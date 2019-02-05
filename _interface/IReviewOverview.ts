import {IOverview} from "./IOverview";
import {Database} from "./IMongooseSchema";

export interface IReviewOverview extends IOverview<Database.IReview> {
  noReviews: string;
  anonymous: string;
}
