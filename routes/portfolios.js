const express = require('express');
const router = express.Router();
const { getPorfolios } = require('../controllers/portfolios')

router.get("/", getPorfolios);



module.exports = router