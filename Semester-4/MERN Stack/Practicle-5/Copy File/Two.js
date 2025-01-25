const fs = require('fs')

fs.copyFile('abc.txt', 'xyz.txt', err => {
  if (err) {
    throw err
  } else {
    console.log('file copied')
  }
})
