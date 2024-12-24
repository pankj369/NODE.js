const fs = require("fs");

const requestHandler = (req, res) => {
  //using modules
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node.js</title></head>");
    res.write("<body><h1>Enter Your Details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"<br><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male"/>');
    res.write('<label  for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female"/>');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/submit-details" && req.method === "POST") {
    const body = []; //buffering chunks
    req.on("data", (chunk) => {
      // reading chunks
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody); //parsing request
      // easy way
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      fs.writeFile("output.txt", JSON.stringify(bodyObject), (error) => {
        console.log("Data return successfully");

        res.statusCode = 302;
        res.setHeader("Location","/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Node.js</title</head>");
    res.write("<body><h1>How are you!</h1></body>");
    res.write("</html>");
    return res.end();
  }
};
module.exports = requestHandler;
// multiple exports using objects
// module.exports ={
//   handler:requestHandler,
//   extra : 'Extra'
// };//using modules

//setting multiple properties
// module.exports.handler=requestHandler;
// module.exports.handler='Extra';

// shortcut
// exports.handler=requestHandler;
// exports.extra='Extra';
