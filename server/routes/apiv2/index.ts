import express = require('express');
import getInterface from "./interface";

const router = express.Router();

router.use('/interface', getInterface(router));

export default router;
