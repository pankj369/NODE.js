const path=require('path');//core module

const express=require('express');//external module
const hostRouter=express.Router();
const rootDir=require('./utils/pathUtils');//local module

//GET /add-home route
hostRouter.get("/host/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','addhome.html'));
});
//POST /add-home route
hostRouter.post("/host/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home-edit.html'));

});

module.exports=hostRouter;