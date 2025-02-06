export default function StudentCard () {
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
      "bio": "Vestibulum pharetra libero et velit gravida euismod. Fusce congue aliquam elit ut luctus. Ut viverra quis eros eu tincidunt. Phasellus tincidunt sollicitudin posuere.",
      "spi": 4.58
  },
    {
      "name": "Maria Sammut",
      "language": "Maltese",
      "id": "BJRF0BWIHJ0Q12A1",
      "bio": "Maecenas tempus neque ut porttitor malesuada.velit gravida euismod. Fusce congue aliquam  velit gravida euismod. Fusce congue aliquam Curabitur ultricies id urna nec ultrices.",
      "spi": 6.83
  },
    {
        "name": "Abla Dilmurat",
        "language": "Uyghur",
        "id": "5ZVOEPMJUI4MB4EN",
        "bio": "Donec lobortis eleifend condimevelit gravida euismod. Fusce congue aliquam velit gravida euismod. Fusce congue aliquam ntum. Morbi ac tellus erat.",
        "spi": 2.53
    },
    ]
    // eslint-disable-next-line no-unused-vars
    const totalstudent = students.map(stu => {
      return (
        <>
          <div className='card' style={{ width: '23%', margin: '5px' }}>
            <div className='card-body'>
              <h5 className='card-title'>Name: {stu.name}</h5>
              <h5 className='card-title'>Language: {stu.language}</h5>
              <h5 className='card-title'>ID: {stu.id}</h5>
              <p className='card-text'>Bio: {stu.bio}</p>
              <p className='card-text'>SPI: {stu.spi}</p>
            </div>
          </div>
          </>
      )
    })
  
    return (
      <>
        <div className='container p-2'>
          <div className='row m-2'>{totalstudent}</div>
        </div>
      </>
    )
  }
  