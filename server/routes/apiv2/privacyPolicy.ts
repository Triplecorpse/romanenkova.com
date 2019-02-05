import IRequest from "../../interfaces/iRequest";
import {Response} from "express-serve-static-core";
import {getPrivacyPolicy} from "../../const/privacy-policy/policy";
import {TLanguage} from "../../../_interface/types";

export default async function getPrivacyPolicyHandler(req: IRequest, res: Response) {
  const policy = await getPrivacyPolicy(req.language as TLanguage);

  return res.json(policy);
}
