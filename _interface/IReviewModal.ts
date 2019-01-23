import {IModal} from "./IModal";

export interface IReviewModal extends IModal {
  name: string;
  namesubscr: string;
  email: string;
  emailsubscr: string;
  review: string;
}
