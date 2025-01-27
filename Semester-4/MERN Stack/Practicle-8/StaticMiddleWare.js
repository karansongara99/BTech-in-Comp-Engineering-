const exprees = require('express');

const app = exprees();

const stamdl = (req,res,next)=>{
    console.log("Static MiddleWare:");
    next();
}

app.get('/student',stamdl,(req,res,stmd)=>{
    res.send("Next API")
    console.log("MIddle Ware Called:");
})

app.listen(3500,()=>{
    console.log("Server is Running");
})