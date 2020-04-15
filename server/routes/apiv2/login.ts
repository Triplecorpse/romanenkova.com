import * as express from 'express';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import {isPasswordCorrect, User} from '../../models/user';

passport.use(new LocalStrategy.Strategy(
  function (username, password, done) {
    User.findOne({login: username}, function (err, user) {
      if (err) {
        return done(err);
      }

      if (!user) {
        return done({message: 'Incorrect username.'}, false);
      }

      if (!isPasswordCorrect(user as any, password)) {
        return done({message: 'Incorrect password.'}, false);
      }

      return done(null, user);
    });
  }
));

passport.serializeUser(function (user, done) {
  if (user) {
    done(null, user);
  }
});

passport.deserializeUser(function (id, done) {
  done(null, id);
});

export default async function loginHandler(req: express.Request, res: express.Response, next: express.NextFunction) {
  passport.authenticate('local', (error, user) => {
    if (error) {
      return res.status(400).json({message: error});
    }
    req.login(user, function (err) {
      if (err) {
        return res.status(401).json({message: err});
      }

      delete user.password;

      res.status(200).json({message: user});
    });
  })(req, res, next);
}
