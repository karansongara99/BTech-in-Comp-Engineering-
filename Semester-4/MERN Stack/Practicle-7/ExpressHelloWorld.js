const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.write("Hello World..........")
    res.send();
})

app.listen(2450,()=>{
    console.log("Server Starting Port 2450.........................");
    
})