const router = require('express').Router();
const fileService = require('../services/file-service');
const log = require('./../services/log-service');
const authService = require('../services/security-services/auth-service');
const bodyParser = require('body-parser');
router.use(bodyParser.json());


router.use('/api', require('./api'));

router.post('/login', (req, res) => {
    authService.getToken(req.body)
        .then(data => {
            res.json({token: data, success: true});
        })
        .catch(err => {
            res.status(401).send(err);
        });
});

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
