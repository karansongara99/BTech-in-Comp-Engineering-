const http = require('http');

const app = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write("Hello World.........");
    res.end();
})

app.listen(3000,()=>{
    console.log("Server Starting 3000 Port..................");
})