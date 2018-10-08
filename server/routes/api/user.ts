import express = require('express');
import IRequest from "../../interfaces/iRequest";

const router = express.Router();
import {Response} from "express-serve-static-core";
import {checkUser, getUser, getUsers} from "../../services/db-middleware/user";
import {IUser} from "../../models/user";
import {validateToken} from "../../services/security-services/auth-service";

router
    .route('/:nickname?')
    .post(function (req, res) {
        res.status(501).json({v: '0.1', b: req.body, m: req.method});
    })
    .put(function (req, res) {
        res.status(501).json({v: '0.1', r: req.params, b: req.body, m: req.method});
    })
    .get(function (req: IRequest, res: Response) {
        console.log(req.body.nickName, req.body.password);
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
