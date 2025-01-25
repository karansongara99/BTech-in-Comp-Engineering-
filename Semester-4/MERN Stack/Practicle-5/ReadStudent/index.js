const fs = require('fs')

const finalas = fs.readFileSync("student.txt","utf-8");

const studentarr = JSON.parse(finalas);

console.log(studentarr);
