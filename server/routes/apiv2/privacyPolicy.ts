import IRequest from "../../interfaces/iRequest";
import {Response} from "express-serve-static-core";
import {getPrivacyPolicy} from "../../const/privacy-policy/policy";
import {TLanguage} from "../../../_interface/types";

export default function getPrivacyPolicyRouter(router: any) {
  router.get('/', async (req: IRequest, res: Response) => {
    const policy = await getPrivacyPolicy(req.language as TLanguage);

    return res.json(policy);
  });

  return router;
}
