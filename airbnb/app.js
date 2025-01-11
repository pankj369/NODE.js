const path=require('path'); //core module
const express = require("express"); //external module
//local module
const  storeRouter=require('./routes/storeRouter');
const hostRouter=require('./routes/hostRouter');
const rootDir=require('./utils/pathUtils');
const errorsController=require('./controllers/errors')

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs'); 
app.set('views','views');

app.use(express.urlencoded()); //middleware
app.use(storeRouter);
app.use("/host",hostRouter);

app.use(express.static(path.join(rootDir, 'public')))
app.use(errorsController.pageNotFound);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
