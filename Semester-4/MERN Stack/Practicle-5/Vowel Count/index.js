const fs = require('fs');

const data1 = fs.readFileSync("word.txt",'utf-8');

words = data1.match(/[aeiou]/gi)?.length || 0;

console.log("Words Count Vowel.....");
console.log(words);


