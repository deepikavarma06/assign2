import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './StudentList.css';

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
    <div className="student-list-wrapper">
      <h2 className="heading">Students List</h2>
      <div className="table-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>Select</th>
              <th>ID</th>
              <th>First</th>
              <th>Last</th>
              <th>Email</th>
              <th>DOB</th>
              <th>Department</th>
              <th>Year</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id} className={selectedStudentId === student._id ? 'selected-row' : ''}>
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
      </div>
      <div className="action-buttons">
        <button className="edit-btn" onClick={handleEdit}>Edit</button>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default StudentList;
