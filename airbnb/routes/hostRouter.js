const express = require("express"); //external module
const hostRouter = express.Router();

// Local Module
const hostController = require("../controllers/hostController");

hostRouter.get("/host/add-home", hostController.getAddHome);
hostRouter.post("/host/add-home", hostController.postAddHome);
hostRouter.get("/host-home-list", hostController.getHostHomes);

module.exports = hostRouter;
