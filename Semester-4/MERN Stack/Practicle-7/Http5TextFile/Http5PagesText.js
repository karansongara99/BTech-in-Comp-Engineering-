const express = require('express')
const app = express()

const fs = require('fs');

app.get("/home",(req,res)=>{
    res.write(fs.readFileSync("home.txt","utf8"))
    res.send();
})

app.get("/about",(req,res)=>{
    res.write(fs.readFileSync("about.txt","utf8"))
    res.send();
})
  
app.get("/final",(req,res)=>{
    res.write(fs.readFileSync("final.txt","utf8"))
    res.send();
})

app.get("/contact",(req,res)=>{
    res.write(fs.readFileSync("contact.txt","utf8"))
    res.send();
})

app.get("/product",(req,res)=>{
    res.write(fs.readFileSync("product.txt","utf8"))
    res.send();
})

app.listen(8200, () => {
    console.log('Server Starting 8200 Port.......................')
  })
  