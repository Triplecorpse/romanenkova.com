import express from 'express';
const router = express.Router();

import article from './article';
import page from './page';

router.use('/article', article);
router.use('/page', page);

export default router;
