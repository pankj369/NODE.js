// First node server

const http=require('http');

const server=http.createServer( (req,res)=>{
  console.log(req);
});

const PORT = 3001;
server.listen(PORT, ()=>{
console.log(`Sever is running on in address http://localhost:${PORT}`);
});