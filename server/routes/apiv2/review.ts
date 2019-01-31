import IRequest from "../../interfaces/iRequest";
import {Response} from "express-serve-static-core";
import {validateRecaptcha} from "../../services/security-services/recaptcha-validator";
import {errorMessages, successMessages} from "../../const/const";
import {createReview} from "../../services/db-middleware/review";
import {sendEmail} from "../../services/user-services/email-service";

export default function getReviewRouter(router: any) {
  router.post('/', async (req: IRequest, res: Response) => {
    const name = req.body.name || 'Anonymous';

    await validateRecaptcha(req.body.recaptcha).catch((e: any) => {
      res.status(400).json(errorMessages.captcha[req.body.language]);
      throw e;
    });
    await createReview(req.body).catch((e: any) => {
      res.status(400).json({m: 'review cannot be added'});
      throw e;
    });
    await sendEmail({
      to: 'info@romanenkova.com',
      from: `${name} <info@mail.romanenkova.com>`,
      subject: 'A feedback was left for you',
      text: `
              FROM: ${req.body.name},
              EMAIL: ${req.body.email},
              -----------------------------------
              FEEDBACK: ${req.body.body}
            `
    }).catch((e: any) => {
      res.status(400).json(errorMessages.email[req.body.language]);
      throw e;
    });

    const header = successMessages.review.header[req.body.language];
    const body = successMessages.review.body[req.body.language];

    return res.json({header, body});
  });

  return router;
}
