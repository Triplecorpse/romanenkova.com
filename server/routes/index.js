const router = require('express').Router();
const fileService = require('../services/file-service');
const log = require('./../services/log-service');

router.use('/api', require('./api'));

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