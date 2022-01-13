const express = require('express');
const app = express(); 

async function runServer () {
  await require('./db').connect();
  app.use('/api/v1/portfolios', require('./routes/portfolios'));

  const PORT = parseInt(process.env.PORT, 10) || 3001;
  app.listen(PORT, ()=> {
    console.log("like a champ");
  })
  
}

runServer();