const fs= require('fs');
const http = require('http');

const userinputs = http.createServer((req, res) => {
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
    res.write('</html>');
    return res.end();
    
  } else if (req.url ==="/submit-details" && req.method==="POST"){
    fs.writeFileSync('output.txt','Pankaj Singh');
    res.statusCode=302; 
    res.setHeader('Locatin', '/');
    return res.end();
  } else{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Node.js</title</head>');
    res.write('<body><h1>How are you!</h1></body>');
    res.write('</html>');
     return res.end();
  }

});
module.exports =userinputs;