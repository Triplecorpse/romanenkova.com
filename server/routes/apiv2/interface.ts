import IRequest from "../../interfaces/iRequest";
import getInterface from "../../const/interface";
import {Response} from "express-serve-static-core";

export default async function getInterfaceHandler(req: IRequest, res: Response) {
  if (req.params.lang === 'auto' || req.params.lang === 'undefined' || req.params.lang === 'null') {
    req.params.lang = req.language;
  }

  const result = await getInterface(req.params.page, req.params.lang)
    .catch(err => {
      throw res.status(400).send(err.message);
    });

  return res.json(result);
}
