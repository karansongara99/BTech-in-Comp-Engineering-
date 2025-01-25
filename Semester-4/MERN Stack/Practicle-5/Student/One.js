const fs = require('fs')

const studentdetail = [
  {
    id: 101,
    name: 'Karan',
    enrollmentmo: 24010101694,
    mobileno: 6565478453,
    department: 'CSE',
    spi: 9.0
  },
  {
    id: 125,
    name: 'Khush',
    enrollmentmo: 24010101532,
    mobileno: 8994612365,
    department: 'BA',
    spi: 6.74
  },
  {
    id: 562,
    name: 'Gaurav',
    enrollmentmo: 24010105689,
    mobileno: 7456223568,
    department: 'MCA',
    spi: 8.05
  },
  {
    id: 701,
    name: 'Ishan',
    enrollmentmo: 24010101865,
    mobileno: 884452312,
    department: 'B.SC',
    spi: 7.56
  },
  {
    id: 125,
    name: 'Bhavya',
    enrollmentmo: 24010107823,
    mobileno: 6353284555,
    department: 'MA',
    spi: 8.25
  }
]

fs.writeFileSync('student.txt',JSON.stringify(studentdetail), (err, data) => {
  if (err) {
    throw err
  } else {
    console.log(data)
  }
})
