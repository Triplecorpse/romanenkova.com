import IRequest from "../../interfaces/iRequest";
import getInterface from "../../const/interface";
import {Response} from "express-serve-static-core";

export default function getInterfaceRouter(router: any) {
  router.get('/:lang/:page', async (req: IRequest, res: Response) => {
    const result = await getInterface(req.params.page, req.params.lang)
      .catch(err => {
        throw res.status(400).send(err.message);
      });

    return res.json(result);
  });
  
  return router;
}
