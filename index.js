const express = require('express');
const app = express();app;
const config = require('./config/dev');

const mongoose = require('mongoose');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true
}, (err)=> {
  if (err) {
    console.error(err)
  } else {
  console.log("connected to DB!")
  }
})


app.use('/api/v1/portfolios', require('./routes/portfolios'));



const PORT = parseInt(process.env.PORT, 10) || 3001;
app.listen(PORT, ()=> {
  console.log("like a champ");
})