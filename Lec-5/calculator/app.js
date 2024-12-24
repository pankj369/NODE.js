const http =require('http');
const {calcHandler}=require('./calcHandler');

const server=http.createServer(calcHandler);




const PORT=3000;
server.listen(PORT,()=>{
  console.log(`server runs at http://localhost:${PORT}`);
})
