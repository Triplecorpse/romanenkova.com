import getInterface from '../../const/interface';
import {Request, Response} from 'express';
import {TLanguage, TPageId} from '../../../_interface/types';

export default async function getInterfaceHandler(req: Request, res: Response) {
  if (req.params.lang === 'auto' || req.params.lang === 'undefined' || req.params.lang === 'null') {
    req.params.lang = req.language as TLanguage;
  }

  const result = await getInterface(req.params.page as TPageId, req.params.lang as TLanguage)
    .catch((err: any) => {
      throw res.status(400).send(err.message);
    });

  return res.json(result);
}
