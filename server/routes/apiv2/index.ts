import express = require('express');
import bodyParser = require('body-parser');
import getInterfaceHandler from './interface';
import {NextFunction, Request, Response} from 'express-serve-static-core';
import {validateToken} from '../../services/security-services/auth-service';
import getReviewHandler from './review';
import getAppointmentHandler from './appointment';
import getPrivacyPolicyHandler from './privacyPolicy';
import getArticleHandler from './article';

const router = express.Router();

router.use(bodyParser.json({type: 'application/json'}));
router.use('*', (req: Request, res: Response, next: NextFunction) => {
  if (/romanenkova.com|localhost|psydp.com.ua/i.test(req.hostname)) {
    res.header('Access-Control-Allow-Origin', req.get('origin') || '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');

    let token: string = req.query.token as string;
    if (req.method.toLowerCase() === 'post' || req.method.toLowerCase() === 'put' || req.method.toLowerCase() === 'options') {
      token = req.body ? token || req.body.token : token;
    }

    if (token) {
      validateToken(token)
        .then(() => {
          req.isTokenValid = true;
          next();
        })
        .catch((e: Error) => {
          res.sendStatus(401);
          throw new Error(e.message);
        });
    } else {
      next();
    }
  } else {
    res.status(403).json({m: `Request allowed from domain romanenkova.com only`});
  }
});

// todo: as far router is shared object, only first post is fired
router.route('/appointment').post(getAppointmentHandler);
router.route('/review').post(getReviewHandler);
router.route('/:lang/:page/').get(getInterfaceHandler);
router.route('/article/:url/').get(getArticleHandler);
router.route('/privacy-policy').get(getPrivacyPolicyHandler);

export default router;
