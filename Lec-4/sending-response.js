// simple node.js server
//how to exit event loop

const http=require('http');

const server=http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers); // to see the  request object (url, method, headers),, we can also add other type of requests
  // res.setHeader('Content-Type', 'json');
  res.setHeader('Content-Type', 'text/html');
  res.write(`<html>`); // we can write this all in a single thread
  res.write(`<head><title>Complete Node.JS</title></head>`);
  //can we add css to this
  // res.style(`h1=color:red`);
  res.write(`<body><h1>Learn Quickly with efficient way</h1></body>`);
  res.write('</html>');
  res.end();
  // process.exit(); //stop event loop;
})
const PORT=3001;
server.listen(PORT, ()=>{
  console.log(`server running at http://localhost:${PORT}`);
})
