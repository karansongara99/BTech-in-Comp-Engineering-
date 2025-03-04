import React, { useState } from "react";
import "./index.css";

export default function StudentCrud()
{
    const [student, setStudent] = useState([
        { id: 1, name: "Karan", age: 20,"gender": "Male",
    "course": "Computer Enginerring", },
        { id: 2, name: "Guarav", age: 21,"gender": "Male",
    "course": "Mehnical Enginerring", },
        { id: 3, name: "Nikhil", age: 18,"gender": "Male",
    "course": "Chemical Enginerring", },
    ]);  

    const handleDelete = (id) => {
        setStudent(student.filter((e) => e.id !== id));
      };
    
    return(
        <>
        <h1>Student CRUD</h1>
        <br />
        <table className="table table-success table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {student.map((stu) => (
            <tr key={stu.id}>
              <td>{stu.id}</td>
              <td>{stu.name}</td>
              <td>{stu.age}</td>
              <td>{stu.gender}</td>
              <td>{stu.course}</td>
              <td>
                <button className="deletebtn" onClick={() => handleDelete(stu.id)}>Delete</button>
                &nbsp;
                <button className="editbtn" onClick={() => handleDelete(stu.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

        </>
    )
}
