import {Review} from "../../models/review";
import {Database} from "../../../_interface/IMongooseSchema";
import {TLanguage} from "../../../_interface/types";

export function createReview(review: Database.IReview) {
  return Review.create(review);
}

export function readReview(language: TLanguage, isAdmin: boolean = false): Promise<Array<Database.IReview>> {
  const opts = {
    isPublished: true,
    language
  };

  if (isAdmin) {
    delete opts.isPublished;
  }

  return Review.find(opts).then((r: Array<any>) => r.map((review: Database.IReview): Database.IReview => {
    if (!isAdmin) {
      return {
        body: review.body,
        name: review.name
      }
    }

    return review;
  }));
}

export function updateReview(_id: string, review: Database.IReview): Promise<any> {
  return Review.findByIdAndUpdate(_id, review).then();
}

export function deleteReview(_id: string): Promise<any> {
  return Review.findByIdAndDelete(_id).then();
}
