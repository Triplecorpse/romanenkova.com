const router = require('express').Router();
const fileService = require('../services/file-service');
const log = require('./../services/log-service');
const authService = require('./../services/auth-service');

router.use('/api', require('./api'));

router.post('/login', (req, res) => {
    authService.getToken()
        .then(data => {
            res.json({token: data, success: true});
        })
        .catch(err => {
            res.status(401).send(err);
        });
});
router.get('/logout', (req, res) => {});
router.get('/health', (req, res) => {
    res.json({h: new Date().toISOString()})
});


router.get('/', (req, res) => {
    fileService.readFile('./front/dist/index.html')
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send(err);
        })
});

module.exports = router;