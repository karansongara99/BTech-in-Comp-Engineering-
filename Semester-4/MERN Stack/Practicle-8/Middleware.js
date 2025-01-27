const exprees = require('express');

const app = exprees();

app.get('/student',(req,res,next)=>{
    res.send("Next API")
    console.log("MIddle Ware Called:");
    next();
})

app.get('/student',(req,res)=>{
    console.log("Get Method Call");
})

app.listen(3000,()=>{
    console.log("Server Starting");
    
})