const express = require('express');
const router = express.Router();
const { getPorfolios } = require('../controllers/portfolios')

router.get("/", getPorfolios) 
  // return res.send([1, 2, 3, 4, 5])
  // return res.json({data: [1, 2, 3, 4, 5]});



module.exports = router