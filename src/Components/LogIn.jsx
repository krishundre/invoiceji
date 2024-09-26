import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Log In to Your Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
        <p className="auth-link">
          Don't have an account?{' '}
          <Link to="/" className="transition-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
