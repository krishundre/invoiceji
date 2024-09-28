import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate email and password
    if (email !== 'admin@gmail.com' || password !== 'admin') {
      setError('Wrong email or password.'); // Set error message
    } else {
      setError(''); // Clear error message
      navigate('/'); // Navigate to home page
      console.log('Logged in successfully'); 

    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Log In to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
          <button type="submit" className="btn btn-primary">Log In</button>
          {error && <p className="error-message">{error}</p>} {/* Show error message */}
        </form>
        <p className="auth-link">
          Don't have an account?{' '}
          <Link to="/signup" className="transition-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
