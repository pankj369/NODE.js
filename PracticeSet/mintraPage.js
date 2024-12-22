const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/home") {
    res.write("<h1>Welcome to Myntra Home Page</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to the Myntra MensWear section</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to the WomensWear section</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to the KidsWear section</h1>");
    return res.end();
  } else if (req.url === "/carts") {
    res.write("<h1>Welcome to the Carts section</h1>");
    return res.end();
  }

  // Default response for undefined routes
  res.write(`
<html lang="en">
<head>
  <title>Document</title>
</head>
<body>
  <header>
    <h1>Welcome to Myntra</h1>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/carts">Carts</a></li>
      </ul>
    </nav>
  </header>

</body>
</html>
  `);
  return res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
