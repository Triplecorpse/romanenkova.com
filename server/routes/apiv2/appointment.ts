import IRequest from '../../interfaces/iRequest';
import {Response} from 'express-serve-static-core';
import {validateRecaptcha} from '../../services/security-services/recaptcha-validator';
import {errorMessages, successMessages} from '../../const/const';
import {IAppointmentModal} from '../../../_interface/IAppointmenntModal';
import {getHtmlLetter, sendEmail} from '../../services/user-services/email-service';
import {writeFile} from '../../services/file-service';

export default async function getAppointmentHandler(req: IRequest, res: Response) {
  const appointment: IAppointmentModal = req.body;

  if (!appointment.name && !appointment.email) {
    return res.status(400).json({
      name: errorMessages.appointment.name[req.body.language],
      email: errorMessages.appointment.email[req.body.language],
      lang: req.body.language
    });
  }

  if (!appointment.name) {
    return res.status(400).json({name: errorMessages.appointment.name[req.body.language], lang: req.body.language});
  }

  if (!appointment.email) {
    return res.status(400).json({email: errorMessages.appointment.contact[req.body.language], lang: req.body.language});
  }

  await validateRecaptcha(req.body.recaptcha).catch((e: any) => {
    res.status(400).json(errorMessages.captcha[req.body.language]);
    throw e;
  });
  const contactNameControl = appointment.contactNameControl ? appointment.contactNameControl.name : 'n/a';
  const htmlLetter = await getHtmlLetter('appointment', {...appointment, contactNameControl});

  if (!req.isLocalhost) {
    await sendEmail({
      to: `info@romanenkova.com, ${appointment.email}`,
      from: `${appointment.name} <info@romanenkova.com>`,
      subject: 'New Appointment From Site',
      html: htmlLetter
    });
  } else {
    await writeFile('./email-last-appointment.html', htmlLetter);
  }

  const header = successMessages.appointment.header[req.body.language];
  const body = successMessages.appointment.body[req.body.language];

  return res.json({header, body});
}
