import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="https://via.placeholder.com/150x50?text=Invoiceji" alt="Invoiceji" className="logo" />
        </a>
        <div className="d-flex align-items-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-auto my-2 mx-lg-3">
              <a className="nav-link fs-5 fw-bold" href="/">Home</a>
            </li>
            <li className="nav-item dropdown mx-auto my-2 rounded mx-lg-3 px-3">
              <a className="nav-link fs-5 fw-bold" href="/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Generate
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-center" href="/">Invoice Generator</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-center disabled opacity-75" href="/">Coming Soon</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-auto my-2 rounded mx-lg-3 px-3">
              <a className="nav-link fs-5 fw-bold" href="/" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Download Templates
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item text-center" href="/">Balance Sheet</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-center" href="/">P&L Statement</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-center" href="/">GST Bill Format</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-center" href="/">Commercial Invoice</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item text-center" href="/">Income Statement</a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-auto my-2 mx-lg-3">
              <a className="nav-link fs-5 fw-bold" href="/">Pricing</a>
            </li>
            <li className="nav-item mx-auto my-2 mx-lg-3">
              <a className="nav-link fs-5 fw-bold" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
