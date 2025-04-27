import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddStudent.css';  // Import the CSS file

function AddStudent() {
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    department: '',
    enrollmentYear: '',
    isActive: true
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/students', formData)
      .then(() => {
        navigate('/students'); // Redirect without showing toast
      })
      .catch(err => {
        console.error('Error Adding Student:', err);
      });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">Add New Student</h2>
        <form onSubmit={handleSubmit}>

          {/* Student ID */}
          <div className="form-group mb-3">
            <label htmlFor="studentId" className="form-label">Student ID</label>
            <input 
              type="text" 
              id="studentId" 
              name="studentId" 
              className="form-control" 
              placeholder="Enter Student ID" 
              onChange={handleChange} 
              value={formData.studentId}
              required 
            />
          </div>

          {/* First Name */}
          <div className="form-group mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              className="form-control" 
              placeholder="Enter First Name" 
              onChange={handleChange} 
              value={formData.firstName}
              required 
            />
          </div>

          {/* Last Name */}
          <div className="form-group mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              className="form-control" 
              placeholder="Enter Last Name" 
              onChange={handleChange} 
              value={formData.lastName}
              required 
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="form-control" 
              placeholder="Enter Email" 
              onChange={handleChange} 
              value={formData.email}
              required 
            />
          </div>

          {/* Date of Birth */}
          <div className="form-group mb-3">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input 
              type="date" 
              id="dob" 
              name="dob" 
              className="form-control" 
              onChange={handleChange} 
              value={formData.dob}
              required 
            />
          </div>

          {/* Department */}
          <div className="form-group mb-3">
            <label htmlFor="department" className="form-label">Department</label>
            <input 
              type="text" 
              id="department" 
              name="department" 
              className="form-control" 
              placeholder="Enter Department" 
              onChange={handleChange} 
              value={formData.department}
              required 
            />
          </div>

          {/* Enrollment Year */}
          <div className="form-group mb-3">
            <label htmlFor="enrollmentYear" className="form-label">Enrollment Year</label>
            <input 
              type="number" 
              id="enrollmentYear" 
              name="enrollmentYear" 
              className="form-control" 
              placeholder="Enter Enrollment Year" 
              onChange={handleChange} 
              value={formData.enrollmentYear}
              required 
            />
          </div>

          {/* Is Active Checkbox */}
          <div className="form-check mb-4">
            <input 
              type="checkbox" 
              id="isActive" 
              name="isActive" 
              className="form-check-input" 
              checked={formData.isActive} 
              onChange={handleChange} 
            />
            <label htmlFor="isActive" className="form-check-label">Active Student</label>
          </div>

          <button type="submit" className="btn btn-success w-100">Add Student</button>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
