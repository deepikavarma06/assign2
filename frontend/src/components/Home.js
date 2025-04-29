import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="home-hero-light d-flex align-items-center justify-content-center text-dark">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3 text-uppercase">
            Student Management
          </h1>
          <p className="lead mb-4">
            Effortlessly track and view your students.
          </p>
        </div>
      </section>

      {/* Button Section */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <Link
            to="/students"
            className="btn btn-primary btn-lg px-5 py-3"
            style={{ fontSize: '1.2rem', borderRadius: '25px' }}
          >
            View Students
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
