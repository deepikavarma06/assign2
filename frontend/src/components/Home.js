import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Student Management</h1>
          <p>Effortlessly track and view your students.</p>
          <Link to="/students" className="view-button">
            View Students
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
