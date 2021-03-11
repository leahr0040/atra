const express = require('express');
const router = express.Router();
const shopRouter=require('./controllers/shops');

router.use('/shops',shopRouter)
module.exports =router;
