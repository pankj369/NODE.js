const path=require('path');//core module

const express=require('express');//external module
const userRouter=express.Router();

const rootDir =require('../utils/pathUtils');//local module


userRouter.get('/',(req,res,next)=>{
  res.sendFile(path.join(rootDir,'views','Home.html'));
})

module.exports=userRouter;