const mongoose = require('mongoose');

const schema = mongoose.Schema({
    _id:Number,
    FacultyName: String,
    FacultyImage:String,
    FacultyInitail: String,
    FacultyDescription: String,
    FacultyDateOfBirth: Number
});

module.exports = mongoose.model("faculties",schema);