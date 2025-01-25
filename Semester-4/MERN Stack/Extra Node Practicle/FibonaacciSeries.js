const prompt = require('prompt-sync')()

var n = prompt('Enter N:')
var a=0,b=1,c;
for(let i=0;i<n;i++)
{
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}