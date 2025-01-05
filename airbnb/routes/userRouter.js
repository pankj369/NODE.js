const path=require('path');//core module

const express=require('express');//external module
const userRouter=express.Router();

//local module
const { registerHomes } = require('./hostRouter');


userRouter.get('/',(req,res,next)=>{
  console.log(registerHomes);
  res.render('home', {registerHomes: registerHomes, pageTitle:'airbnb Home'});
})

module.exports=userRouter;