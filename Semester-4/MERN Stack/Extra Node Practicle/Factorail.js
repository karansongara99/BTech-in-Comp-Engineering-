const prompt = require('prompt-sync')()

var n = prompt('Enter N:')

let fact = 1; 
for (let i = 2; i <= n; i++) 
{
    fact = fact * i;
}
console.log(fact)