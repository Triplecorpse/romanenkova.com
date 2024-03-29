import {Request, Response} from 'express';
import {validateRecaptcha} from '../../services/security-services/recaptcha-validator';
import {errorMessages, successMessages} from '../../const/const';
import {createReview} from '../../services/db-middleware/review';
// import {sendEmail} from '../../services/user-services/email-service';
// import {writeFile} from '../../services/file-service';

export default async function getReviewHandler(req: Request, res: Response) {
  // const name = req.body.name || 'Anonymous';

  await validateRecaptcha(req.body.recaptcha).catch((e: any) => {
    res.status(400).json(errorMessages.captcha[req.body.language]);
    throw e;
  });
  await createReview(req.body).catch((e: any) => {
    res.status(400).json({m: 'review cannot be added'});
    throw e;
  });
  let to = 'info@romanenkova.com';
  if (req.body.email) {
    to += `, ${req.body.email}`;
  }

  // const htmlLetter = `
  //             FROM: ${req.body.name},
  //             EMAIL: ${req.body.email},
  //             -----------------------------------
  //             FEEDBACK: ${req.body.body}
  //           `;
  // if (!req.isLocalhost) {
  //   await sendEmail({
  //     to,
  //     from: `${name} <info@mail.romanenkova.com>`,
  //     subject: 'A feedback was left',
  //     text: htmlLetter
  //   }).catch((e: any) => {
  //     res.status(400).json(errorMessages.email[req.body.language]);
  //     throw e;
  //   });
  // } else {
  //   await writeFile('./email-last-review.html', htmlLetter);
  // }

  const header = successMessages.review.header[req.body.language];
  const body = successMessages.review.body[req.body.language];

  return res.json({header, body});
}
