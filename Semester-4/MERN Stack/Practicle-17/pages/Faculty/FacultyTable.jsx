// eslint-disable-next-line no-unused-vars
import React from 'react'

const FacultyTable = () => {
  // eslint-disable-next-line no-unused-vars
  const faculties = [
    {
      createdAt: '2024-11-27T07:57:07.059Z',
      FacultyName: 'Prof. Arjun Bala',
      FacultyImage:
        'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg',
      FacultyInitial: 'Assistant Professor',
      FacultyDescription:
        'The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design',
      FacultyDateOfBirth: '1994-04-29T11:57:31.045Z',
      _id: 1
    },
    {
      createdAt: '2024-11-28T00:32:19.414Z',
      FacultyName: 'Dr. Pradyumansinh Jadeja',
      FacultyImage:
        'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/6---28-04-2023-02-06-07.jpg',
      FacultyInitial: 'Assistant Professor',
      FacultyDescription:
        "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
      FacultyDateOfBirth: '1235-09-23T07:46:25.773Z',
      _id: 2
    },
    {
      createdAt: '2024-11-28T01:06:15.172Z',
      FacultyName: 'Dr. Gopi Sanghani',
      FacultyImage:
        'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/5---29-04-2023-11-00-29.jpg',
      FacultyInitial: 'Dean of Computer Engineer',
      FacultyDescription:
        'Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support',
      FacultyDateOfBirth: '1998-11-27T21:21:13.209Z',
      _id: 3
    },
    {
      createdAt: '2024-11-28T06:20:28.398Z',
      FacultyName: 'Prof. Jayesh Vagadiya',
      FacultyImage:
        'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/219---28-04-2023-02-09-01.jpg',
      FacultyInitial: 'Assistant Professor',
      FacultyDescription:
        'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. Ingredients',
      FacultyDateOfBirth: '1993-12-10T00:13:11.739Z',
      _id: 4
    }
  ]

  return (
    <div>
      <table className='table table-bordered table-primary' style={{border:"1px solid black",padding:"10px",width: '100%',textAlign: 'left' }}>
        <thead>
          <tr>
            <th className='col-2'>FacultyName</th>  
            <th className='col-2'>FacultyImage</th>
            <th className='col-2'>FacultyInitial</th>
            <th className='col-4'>FacultyDescription</th>
            <th className='col-2'>FacultyDateOfBirth</th>
          </tr>
        </thead>
        <tbody>
          {faculties.map(row => (
            <tr key={row.id} style={{border:"1px solid black"}}>
              <td>{row.FacultyName}</td>
              <img
                src={row.FacultyImage}
                style={{ width: '50%', margin: '5px' }}
              />
              <td>{row.FacultyInitial}</td>
              <td>{row.FacultyDescription}</td>
              <td>{row.FacultyDateOfBirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FacultyTable
