//core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
  }

  save() {
    Home.fetchAll((registerHomes) => {
      registerHomes.push(this);
      const homeDataPath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDataPath, JSON.stringify(registerHomes), (error) => {
        console.log("File writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDataPath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
