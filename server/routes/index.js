const router = require('express').Router();
const fileService = require('../services/file-service');
const log = require('./../services/log-service');
const authService = require('./../services/auth-service');

router.use('/api', require('./api'));

router.post('/login', (req, res) => {
    authService.getToken()
        .then(data => {
            res.send(data);
        });
});
router.get('/logout', (req, res) => {});

router.get('/', function (req, res) {
    fileService.readFile('./front/dist/index.html')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

module.exports = router;