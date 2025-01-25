const EventEmitter = require('events');

class MyEvent extends EventEmitter{}

const ticker = new MyEvent();

ticker.on("Video",()=>{
    console.log("Your Data Hack..");

    console.log("Your Data Hack 100%..");
    
})

setInterval(()=>{
    ticker.emit("Video")
},1000)