import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Keep using your hover effect styles

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home-hero d-flex align-items-center justify-content-center text-light">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-4 text-uppercase">
            Student Management System
          </h1>
          <p className="lead mb-4">
          Effortlessly organize, update, and track student progress.

          </p>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-5 fw-bold">What You Can Do</h2>
          
          {/* View Students Button */}
          <Link to="/students" className="btn btn-primary btn-lg mb-4 px-5 py-3" style={{ fontSize: '1.2rem', borderRadius: '25px' }}>
            View Students
          </Link>
          
          {/* Add Students Button */}
          <Link to="/add" className="btn btn-success btn-lg mb-4 px-5 py-3" style={{ fontSize: '1.2rem', borderRadius: '25px' }}>
            Add Students
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
