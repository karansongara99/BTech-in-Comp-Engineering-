const mongoose = require('mongoose');
const Student = require('./model/Student');
const express = require('express');
const bodyParser = require('body-parser');

const dburl = "mongodb://localhost:27017/student";

mongoose.connect(dburl).then(()=>{
    console.log("Connected Databse Server");

    const app = express();

    app.use(bodyParser.json())

    //getAll
    app.get("/student",async (req,res)=>{
        const data = await Student.find();
        res.send(data);
    });

    //getByID
    app.get("/student/:id",async (req,res)=>{
        const data = await Student.findOne({_id:req.params.id});
        res.send(data);
    });

    //delete
    app.delete("/student/:id", async (req,res)=>{
        const data = await Student.deleteOne({_id:req.params.id});
        res.send(data)
    });

    //insert (Create)
    app.post("/student", async (req,res)=>{
        const obj = new Student({
            name:req.body.name,
            language:req.body.language,
            id: req.body.id,
            bio: req.body.bio,
            spi: req.body.spi
        });
        const data = await obj.save();
        res.send(data);

    });

    //update
    app.patch("/student/:id", async (req,res)=>{
        let stu = await Faculty.findOne({_id:req.params.id});
        stu.name = req.body.name;
        stu.language = req.body.language;
        stu.id = req.body.id;
        stu.bio = req.body.bio;
        stu.spi = req.body.spi;

        const data = await stu.save();
        res.send(data);
    });

    app.listen(4000,()=>{
        console.log("Web server started 4000....");
    });

});
