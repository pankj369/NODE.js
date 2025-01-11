const express = require("express"); //external module
const storeRouter = express.Router();

//local module
const homesController = require("../controllers/storeController");

storeRouter.get("/",homesController.getIndex);
storeRouter.get('/homes',homesController.getHomes);
storeRouter.get("/bookings",homesController.getbooking);
storeRouter.get("/favourite",homesController.getfavouriteList);

module.exports = storeRouter;