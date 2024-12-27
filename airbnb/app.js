const path=require('path'); //core module
const express = require("express"); //external module
const  userRouter=require('./routes/userRouter');//local module
const hostRouter=require('./routes/hostRouter');//local module
const rootDir=require('./utils/pathUtils');

const app = express();
//Middleware to parse form data
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(express.urlencoded()); //middleware
app.use(userRouter);
app.use(hostRouter);

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(rootDir,'views','404 page.html')) //adding 404 page not found not by default but ;if the url is wrong use face this interface
  //also ordering of using middleware is important
})

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
