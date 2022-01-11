const express = require('express');
const router = express.Router();

router.get("/api/v1/portfolios", (req, res)=> {
  // return res.send([1, 2, 3, 4, 5])
  return res.json({data: [1, 2, 3, 4, 5]});
} )


module.exports = router