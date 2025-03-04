import React, { useState } from 'react'
import './index.css'

export default function FacultyCrud () {
  const [faculty, setFaculty] = useState([
    {
      id: 101,
      name: 'Dr. Robert Williams',
      gender: 'Male',
      department: 'Computer Science',
      email: 'robert.williams@example.com'
    },
    {
      id: 102,
      name: 'Prof. Emily Johnson',
      gender: 'Female',
      department: 'Information Technology',
      email: 'emily.johnson@example.com'
    },
    {
      id: 103,
      name: 'Dr. Michael Brown',
      gender: 'Male',
      department: 'Software Engineering',
      email: 'michael.brown@example.com'
    }
  ])

  const handleDelete = id => {
    setFaculty(faculty.filter(e => e.id !== id))
  }

  return (
    <>
      <h1>Faculty CRUD</h1>
      <br />
      <table className='table table-warning table-hover p-2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Department</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map(fac => (
            <tr key={fac.id}>
              <td>{fac.id}</td>
              <td>{fac.name}</td>
              <td>{fac.gender}</td>
              <td>{fac.department}</td>
              <td>{fac.email}</td>
              <td>
                <button className="deletebtn" onClick={() => handleDelete(fac.id)}>Delete</button>
                &nbsp;
                <button className="editbtn" onClick={() => handleDelete(fac.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
