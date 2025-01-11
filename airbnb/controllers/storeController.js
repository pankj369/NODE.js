const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registerHomes) =>
    res.render("store/index", {
      registerHomes: registerHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registerHomes) =>
    res.render("store/home-list", {
      registerHomes: registerHomes,
      pageTitle: "Home-list",
      currentPage: "Home",
    })
  );
};

exports.getbooking = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  });
};

exports.getfavouriteList = (req, res, next) => {
  Home.fetchAll(
    (registerHomes = res.render("store/favourites-list", {
      registerHomes: "registerHomes",
      pageTitle: "My favourites",
      currentPage: "My favourites",
    }))
  );
};
