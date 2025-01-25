const prompt = require('prompt-sync')()

var n = prompt('Enter N:')
var sum = 0
for (var i = 0; i < n; i++) {
  if (n % i == 0) {
    sum += i
  }
}

if (sum == n) {
  console.log(n + ' is a perfect number')
} else {
  console.log(n + ' is not a perfect number')
}
