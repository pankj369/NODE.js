const path = require("path"); //core modules
const express = require("express"); //external module
const rootDir = require("./utils/pathUtils"); //local module
const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  // console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contactUs.html"));
});
contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "contactUs-success.html"));
});

module.exports = contactRouter;
