const express = require("express");
const app = express();
const bodyParser=require('body-parser');

// middle ware
app.use("/", (req, res, next) => {
  console.log("First dummy middleware", req.url, res.method);
  
  next();
});
app.use((req, res, next) => {
  console.log("Second dummy middleware", req.url, res.method);
  next();
});
// app.use((req,res,next)=>{
//   console.log("Response return",req.url, res.method);
//   res.send(`<h1>Welcome to practice page</h2>`);
// })

app.get("/", (req, res, next) => {
  console.log(`<h1>Welcome to the Practice page`, req.url, req.method);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`<html>
    <head><title>contact-us</title></head>
<body>
<h1>Please give your details here</h1>
  <form action="/contact-us" method="POST">
    <input type="text" placeholder="Enter your name" name="name" required>
    <input type="email" placeholder="Enter your email" name="email" required>
    <input type="submit">
  </form>
</body>
</html>
`);
});
app.post("/contact-us", (req, res, next) => {
  console.log("First handling", req.url, req.method, req.body );
  next();
});

app.use(bodyParser.urlencoded());//adding parser

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body );
  res.send(`<h1>Thanks for your details</h1>`);
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
