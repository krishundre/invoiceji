import React from 'react';
import { Link } from 'react-router-dom';
import './404.css'; 
import { FaHome } from "react-icons/fa";


const Error404 = () => {
  return (
    <div className="error-page d-flex flex-column align-items-center justify-content-center">
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Page not found.</h2>
      <p className="error-description">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary btn-sm mt-3 back_to_home_button d-flex align-items-center justify-content-center w-auto">
        Go Back Home
        <FaHome className='ms-3' />
      </Link>
    </div>
  );
};

export default Error404;
