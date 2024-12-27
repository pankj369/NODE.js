//external module
const express=require('express');

//local module
const requestHandler = require("./userinputs");

const app=express();

// using middleware (1)
app.get('/',(req, res, next)=>{
  console.log('came in first middleware',req.url,req.method)
  // res.send('<p>came from first middleware</p>')
  next();
})

//using middleware (2)
app.post('/submit-details',(req,res,next)=>{
  console.log('came in second middleware',req.url,res.method)
  res.send('<p>welcome to node js learning </p>')
})

app.use('/',(req, res, next)=>{
  console.log('came from another middleware',req.url,req.method)
  res.send('<p>came from another middleware</p>')
 
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});