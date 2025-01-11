const Home = require("../models/home");

exports.getAddHome = (req, res, next) => {
  res.render("host/addhome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
  });
};

exports.getHostHomes = (req, res, next) => {
  Home.fetchAll((registerHomes) => {
    res.render("host/host-Home-List", {
      registerHomes: registerHomes,
      pageTitle: "Host-Home-List",
      currentPage: "host-homes",
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoUrl } = req.body;
  const home = new Home(houseName, price, location, rating, photoUrl);
  home.save();

  res.render("host/home-edit", {
    pageTitle: "Home added Successfully",
    currentPage: "home-edit",
  });
};
