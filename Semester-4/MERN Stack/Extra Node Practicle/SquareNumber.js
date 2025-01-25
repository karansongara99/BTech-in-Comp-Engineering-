const prompt = require('prompt-sync')();

var n = prompt("Enter N:")
var sum = 0;

for(let i=0;i<n;i++)
{
    sum += (i*i);
}
console.log(sum);

