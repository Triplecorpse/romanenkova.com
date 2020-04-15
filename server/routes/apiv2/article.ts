import {readArticle} from '../../services/db-middleware/article';
import {Request, Response} from 'express';

export default async function getArticleHandler(req: Request, res: Response) {
  const result = await readArticle(req.params.url).catch((err: any) => {
    throw res.status(400).send(err.message);
  });

  return res.json(result);
}
