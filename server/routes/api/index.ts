import express from 'express';
const router = express.Router();

router.use('/article', require('./article'));

module.exports = router;
