import express = require('express');
import getInterfaceRouter from "./interface";
import IRequest from "../../interfaces/iRequest";
import {NextFunction, Response} from "express-serve-static-core";
import {validateToken} from "../../services/security-services/auth-service";
import getReviewRouter from "./review";

const router = express.Router();

router.use('*', (req: IRequest, res: Response, next: NextFunction) => {
  if (/romanenkova.com|localhost|romanenkova.herokuapp.com|romanenkova-staging.herokuapp.com/i.test(req.hostname)) {
    res.header('Access-Control-Allow-Origin', req.get('origin') || '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

    let token = req.query.token;
    if (req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'put' || req.method.toLowerCase() === 'options') {
      token = req.body.token;
    }

    if (token) {
      validateToken(token)
        .then(() => {
          req.isTokenValid = true;
          next();
        });
    } else {
      next();
    }
  } else {
    res.status(403).json({m: `Request from domain romanenkova.com only`});
  }
});

router.use('/interface', getInterfaceRouter(router));
router.use('/review', getReviewRouter(router));

export default router;
