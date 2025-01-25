const prompt = require('prompt-sync')()

var n = prompt('Enter N:')

var i,flag = 0,n;

for (i = 2; i <= n / 2; i++) {
  if (n % i == 0) {
    flag = 1;
    break;
  }
}
if (flag == 0) {
  console.log(n + ' number is Prime')
} else {
  console.log(n + 'number is not Prime')
}
