const http = require('http');

const fs = require('fs');

const app = http.createServer((req,res)=>{
    res.setHeader = 'Content-Type','text/html'
    res.statusCode = 200;
    if(req.url=='/home.txt')
    {
        res.write(fs.readFileSync("home.txt","utf8")); 
        res.end();      
    }
    if(req.url=='/contact.txt')
    {
        res.write(fs.readFileSync("contact.txt","utf8")); 
        res.end();      
    }
    if(req.url=='/about.txt')
    {
        res.write(fs.readFileSync("about.txt","utf8")); 
        res.end(); 
    }
    if(req.url=='/final.txt')
    {
        res.write(fs.readFileSync("final.txt","utf8")); 
        res.end(); 
    }
    if(req.url=='/product.txt')
    {
        res.write(fs.readFileSync("product.txt","utf8")); 
        res.end(); 
    }
})

app.listen(8020,()=>{
    console.log("Starting Server Port NO: 8020");
    
})