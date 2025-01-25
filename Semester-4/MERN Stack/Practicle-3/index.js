const fs = require('fs')

/*console.log('Exists Function')
fs.exists('abc.txt', exits => {
  console.log(exits ? 'it exists' : 'no passwd!')
})*/

console.log('\n')

/*console.log("Stst Function::");

fs.stat('abc.txt',(err,data)=>{
    console.log(data);
})*/

/*console.log('Rename Funciton')
fs.rename('abc.txt', 'myfile.txt', err => {
  if (err) {
    return console.log(err)
  } else {
    console.log('File Renamed')
  }
})*/

console.log('\n')

console.log('Read File Function:')
fs.readFile('abc.txt', (err, data) => {
  if (err) {
    return console.log(err)
  }
  console.log(data.toString())
})

console.log('\n')

/*console.log('Unlink Function...')
fs.unlink('myfile.txt', err => {
  if (err) {
    return console.log(err)
  }
  console.log('File deleted')
})*/

console.log("\n");

/*const data = fs.readFileSync("abc.txt");
console.log("Synchronus Data " +data.toString());*/

/*console.log("Write File:");
const content = "Hello, My name is Karan Songara"
fs.writeFile('abc.txt',content,(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("Filen Writed Created");
    }
})*/

/*const writing = 'Good Morning Sir/Maam \n My Name is Karan Songara';
try {
  fs.writeFileSync('abc.txt', writing);
  // file written successfully
} catch (err) {
  console.error(err);
}*/