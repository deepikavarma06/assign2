import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleEdit = () => {
    if (selectedStudentId) {
      navigate(`/edit/${selectedStudentId}`);
    } else {
      alert('Please select a student to edit.');
    }
  };

  const handleDelete = () => {
    if (selectedStudentId) {
      if (window.confirm('Are you sure you want to delete this student?')) {
        axios.delete(`http://localhost:5000/students/${selectedStudentId}`)
          .then(() => {
            setStudents(students.filter(student => student._id !== selectedStudentId));
            setSelectedStudentId('');
            alert('Student Deleted Successfully!');
          })
          .catch(err => console.error(err));
      }
    } else {
      alert('Please select a student to delete.');
    }
  };

  
  const handleSelectStudent = (id) => {
    setSelectedStudentId(id);
  };

  return (
    <div>
      <h2 className="mb-4">Students List</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>Select</th>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Department</th>
            <th>Enrollment Year</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>
                <input
                  type="radio"
                  name="selectedStudent"
                  value={student._id}
                  onChange={() => handleSelectStudent(student._id)}
                  checked={selectedStudentId === student._id}
                />
              </td>
              <td>{student.studentId}</td>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.email}</td>
              <td>{new Date(student.dob).toLocaleDateString()}</td>
              <td>{student.department}</td>
              <td>{student.enrollmentYear}</td>
              <td>{student.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Outside Buttons */}
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-warning" onClick={handleEdit}>Edit Selected Student</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete Selected Student</button>
      </div>
    </div>
  );
}

export default StudentList;
