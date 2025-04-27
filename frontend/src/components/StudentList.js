import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      axios.delete(`http://localhost:5000/students/${id}`)
        .then(() => {
          setStudents(students.filter(student => student._id !== id));
          alert('Student Deleted Successfully!');
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="container">
      <h2 className="text-center mb-5">Students</h2>
      <div className="row g-4">
        {students.map(student => (
          <div className="col-md-4" key={student._id}>
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{student.firstName} {student.lastName}</h5>
                <p className="card-text mb-1"><strong>ID:</strong> {student.studentId}</p>
                <p className="card-text mb-1"><strong>Email:</strong> {student.email}</p>
                <p className="card-text mb-1"><strong>DOB:</strong> {new Date(student.dob).toLocaleDateString()}</p>
                <p className="card-text mb-1"><strong>Department:</strong> {student.department}</p>
                <p className="card-text mb-1"><strong>Year:</strong> {student.enrollmentYear}</p>
                <p className="card-text mb-3"><strong>Status:</strong> {student.isActive ? "Active" : "Inactive"}</p>
                
                <div className="mt-auto d-flex justify-content-between">
                  <button className="btn btn-warning btn-sm" onClick={() => handleEdit(student._id)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(student._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
