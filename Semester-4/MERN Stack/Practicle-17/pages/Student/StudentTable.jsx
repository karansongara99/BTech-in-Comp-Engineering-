// eslint-disable-next-line no-unused-vars
import React from 'react'

const StudentTable = () => {
  // eslint-disable-next-line no-unused-vars
  const students = [
    {
      "name": "Adeel Solangi",
      "language": "Sindhi",
      "id": "V59OF92YF627HFY0",
      "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum. Maecenas quis nisi nunc. Nam tristique feugiat est vitae mollis. Maecenas quis nisi nunc.",
      "spi": 6.1
  },
  {
    "name": "Moni Sisodiya",
    "language": "Hindi",
    "id": "3CR7CN74GCKXWUQF",
    "bio": "Vestibulum pharetra libero et velit gravida euismod. Donec congue sapien vel euismod interdum. Fusce congue aliquam elit ut luctus. Ut viverra quis eros eu tincidunt. Phasellus tincidunt sollicitudin posuere.",
    "spi": 4.58
},
  {
    "name": "Maria Sammut",
    "language": "Maltese",
    "id": "BJRF0BWIHJ0Q12A1",
    "bio": "Maecenas tempus neque ut porttitor malesuada. Curabitur ultricies id urna nec ultrices.",
    "spi": 6.83
},
  {
      "name": "Abla Dilmurat",
      "language": "Uyghur",
      "id": "5ZVOEPMJUI4MB4EN",
      "bio": "Donec lobortis eleifend condimentum. Morbi ac tellus erat.",
      "spi": 2.53
  },
  ]

  return (
    <div>
      <table className='table table-bordered table-dark table-hover' style={{border:"1px solid black",padding:"10px",width: '100%',textAlign: 'left' }}>
        <thead>
          <tr>
            <th className='col-2'>StudentName</th>  
            <th className='col-2'>StudentLanguage</th>
            <th className='col-6'>StudentBio</th>
            <th className='col-4'>FacultySPI</th>
          </tr>
        </thead>
        <tbody>
          {students.map(row => (
            <tr key={row.id}  style={{border:"1px solid black"}}>
              <td>{row.name}</td>
              <td>{row.language}</td>
              <td>{row.bio}</td>
              <td>{row.spi}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
