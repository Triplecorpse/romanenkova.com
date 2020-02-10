import {readArticle} from '../../services/db-middleware/article';
import IRequest from '../../interfaces/iRequest';
import {Response} from 'express-serve-static-core';

export default async function getArticleHandler(req: IRequest, res: Response) {
  console.log('req.params.url', req.params.url);
  const result = await readArticle(req.params.url).catch((err: any) => {
    throw res.status(400).send(err.message);
  });

  return res.json(result);
}
