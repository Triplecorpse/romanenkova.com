import {IReview} from './iReview';

export interface IReviewPage {
  submit: string;
  [key: number]: IReview;
  reviews: Array<IReview>;
  noReviews: string;
  anon: string;
}
