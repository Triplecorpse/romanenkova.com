import express = require('express');
import IRequest from "../../interfaces/iRequest";

const router = express.Router();
import {Response} from "express-serve-static-core";
import {checkUser, getUser, getUsers, updateUser} from "../../services/db-middleware/user";
import {IUser} from "../../models/user";
import {validateToken} from "../../services/security-services/auth-service";
import log from "../../services/log-service";

router
    .route('/:nickname?')
    .post(function (req, res) {
        res.status(501).json({v: '0.1', b: req.body, m: req.method});
    })
    .put(function (req, res) {
        validateToken(req.body.token)
            .then((user: IUser) => {
                if (req.body.password && req.body.password === req.body.curPassword) {
                    throw new Error('Current password and new password cannot be the same');
                }

                return user;
            })
            .then((user: IUser) => {
                if (req.body.curPassword) {
                    return checkUser(user.nickName, req.body.curPassword)
                }

                return user;
            })
            .catch(error => {
                log.info('Seems that auth validation has been failed');

                res.status(401).json({m: error.message});
                throw error;
            })
            .then((user: IUser) => {
                if (user.isFirstLogin && !req.body.password) {
                    throw new Error('Password should be changed after first login');
                }

                if (user.isFirstLogin && req.body.password) {
                    req.body.isFirstLogin = false;
                }

                Object.keys(req.body).forEach((key: string): void => {
                    if (!req.body[key]) {
                        delete req.body[key];
                    }
                });

                return updateUser(user.nickName, req.body);
            })
            .then((user: IUser) => {
                return res.json(user);
            })
            .catch(error => {
                console.log(error.stack);
                res.status(500).json({m: error.message});
                throw new Error(error.message);
            })
    })
    .get(function (req: IRequest, res: Response) {
        if (!req.query.nickname) {
            return getUsers()
                .then((users: Array<IUser>) => {
                    res.json(users);
                })
                .catch((err: any) => {
                    res.status(500).json(err);
                })
        }

        validateToken(req.query.token)
            .catch((err: any) => {
                res.status(401).json(err);
            })
            .then(() => getUser(req.query.nickname))
            .then((user: IUser) => {
                res.json(user);
            })
            .catch((err: any) => {
                res.status(500).json(err);
            })
    })
    .delete(function (req, res) {
        res.status(501).json({v: '0.1', r: req.params, m: req.method});
    });

export default router;
