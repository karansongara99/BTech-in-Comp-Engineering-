const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: String,
    language: String,
    id: String,
    bio:String,
    spi:Number
})

module.exports = mongoose.model("studentss",schema);