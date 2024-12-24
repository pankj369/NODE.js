const http = require("http");
const requestHandler = require("./parsing-request");//using modules

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
