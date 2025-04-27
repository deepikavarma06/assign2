import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    // Correctly set the URL for fetching students
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/students');
        setStudents(response.data);  // Set the data from backend to state
      } catch (error) {
        console.error('Error fetching students:', error);  // Log the error
      }
    };

    fetchStudents();
  }, []);  // Empty dependency array to run this effect once on component mount

  return (
    <div>
      <h2>View Students</h2>
      <ul>
        {students.map(student => (
          <li key={student._id}>{student.firstName} {student.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewStudents;
