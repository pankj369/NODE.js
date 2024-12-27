const path = require("path"); //core modules
const express = require("express"); //external modules
const rootDir = require("./utils/pathUtils"); //local module
const homeRouter = express.Router(); 

homeRouter.get("/", (req, res, next) => {
  console.log('Handling / GET', req.url,res.method);
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = homeRouter;
