import {Request, Response} from 'express';
import {getPrivacyPolicy} from '../../const/privacy-policy/policy';
import {TLanguage} from '../../../_interface/types';

export default async function getPrivacyPolicyHandler(req: Request, res: Response) {
  const policy = await getPrivacyPolicy(req.language as TLanguage);

  return res.json(policy);
}
