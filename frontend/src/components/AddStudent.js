import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './AddStudent.css'; 

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
        toast.success('🎉 Student Added Successfully!'); // ✨ show toast
        navigate('/students'); // ✨ redirect after showing toast
      })
      .catch(err => {
        console.error(err);
        toast.error('❌ Error Adding Student!');
      });
  };

  return (
    <div className="card p-4">
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" name="studentId" placeholder="Student ID" onChange={handleChange} required />
        <input type="text" className="form-control mb-2" name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input type="text" className="form-control mb-2" name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input type="email" className="form-control mb-2" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="date" className="form-control mb-2" name="dob" onChange={handleChange} required />
        <input type="text" className="form-control mb-2" name="department" placeholder="Department" onChange={handleChange} required />
        <input type="number" className="form-control mb-2" name="enrollmentYear" placeholder="Enrollment Year" onChange={handleChange} required />
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" name="isActive" checked={formData.isActive} onChange={handleChange} />
          <label className="form-check-label">Is Active</label>
        </div>
        <button type="submit" className="btn btn-primary">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
