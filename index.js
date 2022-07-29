const http  = require('http');
const fs = require('fs');
const port = 3000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
  if(req.url==='/'){
    fs.readFile('index.html',(err,data)=>{
        res.writeHead(202,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
  }
  else if(req.url==='/about'){
    fs.readFile('about.html',(err,data)=>{
        res.writeHead(202,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
  }
  if(req.url==='/contoct'){
    fs.readFile('contoct.html',(err,data)=>{
        res.writeHead(202,{'Content-type':'text/html'});
        res.write(data);
        res.end();
    })
  };;
});

server.listen(port,hostname,()=>{
    console.log(`your server is ranning http://${hostname}:${port}`)
})