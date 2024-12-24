const {sumRequestHandler}=require('./sum');

const calcHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Text", "text/html");
    res.write(`<html>
      <head>
      <title>Calc-Home</title>
      </head>
      <body>
      <h1>Welcome to Calculator </h1>
      <a href="/calculator">Go to Calculator</a>
      </body>
      </html`);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title> Calculator Page</title><head>
      <body><h1>Here is your Calculator </h2>
      <form action='/calculate-result' method='POST'>
      <input type='text' placeholder='first num' name='first'/>
      <input type="text" placeholder='second num' name='second' />
      <input type='submit' value='sum'>
      </form>
      </body>
      </html>
      `);
    return res.end();
  }  else if(req.url==='/calculate-result' &&
    req.method==='POST'){
      return sumRequestHandler(req, res);
  } 
   else {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
      <head><title>Error</title></head>
      <body><h1>404 Page doesn't Exist!</h1>
      <a href='/'>Go to Home</a>
      </body>
      </html>`);
    return res.end();
  }
};

exports.calcHandler = calcHandler;
