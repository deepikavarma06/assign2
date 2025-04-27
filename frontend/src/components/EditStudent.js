import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudent() {
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
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/students/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error('Error fetching student:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/students/${id}`, formData)
      .then(() => {
        navigate('/students');
      })
      .catch(err => console.error('Error updating student:', err));
  };

  return (
    <div className="card p-4">
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" name="studentId" value={formData.studentId} onChange={handleChange} required />
        <input type="text" className="form-control mb-2" name="firstName" value={formData.firstName} onChange={handleChange} required />
        <input type="text" className="form-control mb-2" name="lastName" value={formData.lastName} onChange={handleChange} required />
        <input type="email" className="form-control mb-2" name="email" value={formData.email} onChange={handleChange} required />
        <input type="date" className="form-control mb-2" name="dob" value={formData.dob?.substr(0,10)} onChange={handleChange} required />
        <input type="text" className="form-control mb-2" name="department" value={formData.department} onChange={handleChange} required />
        <input type="number" className="form-control mb-2" name="enrollmentYear" value={formData.enrollmentYear} onChange={handleChange} required />
        <div className="form-check mb-3">
          <input type="checkbox" className="form-check-input" name="isActive" checked={formData.isActive} onChange={handleChange} />
          <label className="form-check-label">Is Active</label>
        </div>
        <button type="submit" className="btn btn-success">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;
