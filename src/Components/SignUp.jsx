import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css'; // Import a CSS file for the custom styling

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create an Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Create a password" />
          </div>
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
        <p className="auth-link">
          Already have an account?{' '}
          <Link to="/login" className="transition-link">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
