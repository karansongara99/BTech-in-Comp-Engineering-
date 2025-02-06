export default function FacultyCard () {
  // eslint-disable-next-line no-unused-vars
  const faculties = [
    {
      createdAt: '2024-11-27T07:57:07.059Z',
      FacultyName: 'Prof. Arjun Bala',
      FacultyImage:
        'https://du-website.s3.ap-south-1.amazonaws.com/U01/Faculty-Photo/15---28-04-2023-02-07-35.jpg',
      FacultyInitial: 'Assistant Professor',
      FacultyDescription:
        'The Apollotech B340 is an affordable wireless mouse 12 months battery life and modern design',
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
        "Boston's most advanced compression wear technology increases muscle, stabilizes active muscles",
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
        'Ergonomic executive chair upholstered in bonded black seat and back for all-day comfort and support',
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
        'The beautiful range of Apple Naturalé that has an exciting mix ingredients. With the Goodness of 100% Natural Ingredients',
      FacultyDateOfBirth: '1993-12-10T00:13:11.739Z',
      _id: 4
    }
  ]
  // eslint-disable-next-line no-unused-vars
  const totalfaculties = faculties.map(fac => {
    return (
      <>
        <div className='card' style={{ width: '23%', margin: '5px' }}>
          <img src={fac.FacultyImage} className='card-img-top p-2' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{fac.FacultyName}</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              {fac.FacultyInitial}
            </h6>
            <p className='card-text'>{fac.FacultyDescription}</p>
          </div>
        </div>

        {/* Tablesss */}
      </>
    )
  })

  return (
    <>
      <div className='container p-2'>
        <div className='row m-2'>{totalfaculties}</div>
      </div>
    </>
  )
}
