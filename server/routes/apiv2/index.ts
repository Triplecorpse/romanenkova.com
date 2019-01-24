import express = require('express');
import getInterfaceRouter from "./interface";

const router = express.Router();

router.use('/interface', getInterfaceRouter(router));

export default router;
