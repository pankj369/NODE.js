console.log("1.start of script");
// microtask queue (promise)
Promise.resolve().then(() => console.log("2. Microtask 1"));

//timer queue
setTimeout(() => console.log("3. Timer 1"), 0);

// I/O queue
const fs = require("fs");
fs.readFile("user-details.txt", () => console.log("4. I/O operation"));

//check queue
process.on("exit", (code) => {
  console.log("6. Exit event");
});
console.log("7. End of script");
