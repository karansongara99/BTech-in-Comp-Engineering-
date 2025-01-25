const fs = require('fs')

let words;

const data1 = fs.readFileSync("word.txt",'utf-8');

words = data1.split(/[\s\r\n]+/);

console.log(words.length);

