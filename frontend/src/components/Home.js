import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section className="home-hero">
      <div className="container">
        <h1>Student Management System</h1>
        <p>Easily manage, monitor, and update all student information with ease. Stay organized and keep every record up-to-date effortlessly. Empower your institution with smarter student management.</p>
        <Link to="/students" className="btn btn-primary">
          View Students
        </Link>
      </div>
    </section>
  );
}

export default Home;
