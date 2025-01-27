const mongoose = require('mongoose');
const Faculty = require('./model/Faculty');
const express = require('express');
const bodyParser = require('body-parser');

const atlasUrl = "mongodb://localhost:27017/faculty";

mongoose.connect(atlasUrl).then(()=>{
    console.log("Connected to DB Server");

    const app = express();

    app.use(bodyParser.json())

    //getAll
    app.get("/faculty",async (req,res)=>{
        const data = await Faculty.find();
        res.send(data);
    });

    //getByID
    app.get("/faculty/:id",async (req,res)=>{
        const data = await Faculty.findOne({_id:req.params.id});
        res.send(data);
    });

    //delete
    app.delete("/faculty/:id", async (req,res)=>{
        const data = await Faculty.deleteOne({_id:req.params.id});
        res.send(data)
    });

    //insert (Create)
    app.post("/faculty", async (req,res)=>{
        const obj = new Faculty({
            _id:req.body._id,
            FacultyName:req.body.FacultyName,
            FacultyImage:req.body.FacultyImage,
            FacultyInitail:req.body.createdAt,
            FacultyDescription: req.body.FacultyDescription,
            FacultyDateOfBirth: req.body.FacultyDateOfBirth
        });
        const data = await obj.save();
        res.send(data);

    });

    //update
    app.patch("/faculty/:id", async (req,res)=>{
        let stu = await Faculty.findOne({_id:req.params.id});
        stu._id = req.body._id;
        stu.FacultyName = req.body.FacultyName;
        stu.FacultyImage = req.body.FacultyImage;
        stu.FacultyDescription = req.body.FacultyDescription,
        stu.FacultyDateOfBirth = req.body.FacultyDateOfBirth
        const data = await stu.save();
        res.send(data);
    });

    app.listen(3000,()=>{
        console.log("Web server started 3000....");
    });

});