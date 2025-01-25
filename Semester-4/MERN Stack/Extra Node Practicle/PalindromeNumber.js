const prompt = require('prompt-sync')()

var a = prompt('Enter N:')

let sum=0,b,z=a
while(a>0)
{
  b=a%10
  sum=sum*10+b
  a=parseInt(a/10)
}
console.log(sum)
if(z==sum){
  console.log("Palindrome number",sum)
}
else{
  console.log("Not a Palindrome number",sum)
}
