import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-glossy ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-glossy'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo" className="logo" />
        </a>
        <div className="d-flex align-items-center">
          <div className="form-check form-switch d-flex align-items-center">
            <FontAwesomeIcon
              icon={darkMode ? faMoon : faSun}
              className="me-2"
              style={{ color: darkMode ? '#ffcc00' : '#FFA500', fontSize: '1.5rem', cursor: 'pointer' }}
              onClick={toggleDarkMode}
            />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-auto">
              <a className="nav-link fs-5" href="/">Home</a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link fs-5" href="/">About</a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link fs-5" href="/">Services</a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link fs-5" href="/">Pricing</a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link fs-5" href="/">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
