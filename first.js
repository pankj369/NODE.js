console.log("Pankj is the best coder");

const fs = require("fs");
fs.writeFile("output.txt", "writing file", (err) => {
  if (err) console.log("Error Occured");
  else console.log("File written Successfully");
});


