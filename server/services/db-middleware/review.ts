import {IReviewOptions} from "../../interfaces/iReviewOptions";
import {IReview, Review} from "../../models/review";
import {Database} from "../../../_interface/IMongooseSchema";
import {TLanguage} from "../../types/types";

export function getReviews(count: number = 0, options: IReviewOptions = {}): Promise<Array<IReview>> {
    const query: any = {
        language: options.language
    };

    if (!options.language) {
        delete query.language;
    }

    if (!options.all) {
        query.isPublished = true;
    }

    return Review.find(query).limit(count)
        .then((result: Array<any>): Array<IReview> => {
            return result.map((review: IReview): IReview => ({
                name: review.name,
                language: review.language,
                email: review.language,
                review: review.review,
                isPublished: review.isPublished,
                _id: options.all ? review._id : undefined
            }));
        })
        .then((result: Array<IReview>): Array<IReview> => {
            if (!options.random) {
                return result;
            }

            const newResult = [];
            while (result.length > 0) {
                const randomIndex = Math.floor(Math.random() * result.length);
                newResult.push(result[randomIndex]);
                result.splice(randomIndex, 1);
            }

            return newResult;
        });
}

export function setReview(review: IReview): Promise<IReview> {
    review.isPublished = false;
    return Review.create(review)
        .then((newReview: any): IReview => ({
            name: newReview.name,
            review: newReview.review,
            language: newReview.language,
            email: newReview.email
        }))
        .catch((err: any) => {
            throw console.log(err);
        })
}

export function removeReview(id: string): Promise<any> {
    return Review.findByIdAndRemove(id)
        .then((result: any) => {
            return result;
        })
}

export function publishReview(id: string) {
    return pubUnpubReview(id, true);
}

export function unpublishReview(id: string) {
    return pubUnpubReview(id, false);
}

function pubUnpubReview(id: string, value: boolean): Promise<IReview> {
    return Review.updateOne({_id: id}, {isPublished: value})
        .then((result: any): IReview => ({
            name: result.name,
            language: result.language,
            review: result.review,
            isPublished: result.isPublished,
            email: result.isPublished
        }));
}


export function createReview() {

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
        review: review.review,
        name: name
      }
    }

    return review;
  }));
}
export function updateReview() {

}

export function deleteReview() {

}
