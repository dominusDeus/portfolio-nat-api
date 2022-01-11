const express = require('express');
const app = express();app
const portfolioRoutes = require('./routes/portfolios')

const PORT = parseInt(process.env.PORT, 10) || 3001;

app.get("/test", (req, res)=> {
  return res.json({message: "test is working"})
})

app.use('', portfolioRoutes);

app.listen(PORT, ()=> {
  console.log("like a champ");
})