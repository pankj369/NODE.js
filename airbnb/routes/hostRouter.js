const path=require('path');//core module

const express=require('express');//external module
const hostRouter=express.Router();
const rootDir=require('./utils/pathUtils');//local module

//GET /add-home route
hostRouter.get("/host/add-home", (req, res, next) => {
  res.render("addhome",{pageTitle: 'Add Home to airbnb'});
});

const registerHomes=[];

//POST /add-home route
hostRouter.post("/host/add-home", (req, res, next) => {
  console.log("Home Registration Successful for:",req.body,req.body.houseName);
  registerHomes.push({houseName:req.body.houseName});
  res.render('home-edit',{pageTitle:'Home added Successfully'});

});

exports.hostRouter=hostRouter;
exports.registerHomes=registerHomes;//export of registerhomes to homepagere