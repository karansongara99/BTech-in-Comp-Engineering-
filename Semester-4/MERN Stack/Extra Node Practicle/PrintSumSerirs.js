const prompt = require('prompt-sync')();

var n = prompt('Enter N:');
var sum=0;

for (let i = 1; i < n; i+=3) 
{
    if(n%i==0)
    {
        sum -= i;
    }
    else{
        sum += i;
    }
    console.log(sum);
}
