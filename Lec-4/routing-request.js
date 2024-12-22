const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node.js Tutorial</title></head>");
    res.write("<h1>Welcome to Home Page</h1>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node.js Tutorial</title></head>");
    res.write("<h1>Welcome to the product section</h1>");
    res.write("</html>");
    return res.end();
  } //else is not mandatory
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node.js Tutorial</title></head>");
  res.write("<body><h1>Page is not Found!</h1></body>");
  res.write("</html>");
  return res.end();
});

const PORT=3001;
server.listen(PORT, ()=>{
  console.log(`server running at http://localhost:${PORT}`);
})
