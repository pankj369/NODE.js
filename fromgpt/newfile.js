const fs = require("fs");

fs.appendFile("file2.txt", "Lorem ispum", (err) => {
  if (err) {
    console.log("Error occured");
  } else {
    console.log("file2.txt created or updated successfully");
  }
});
