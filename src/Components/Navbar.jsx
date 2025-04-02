import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import { FcGoogle } from "react-icons/fc";
import { auth } from '../config/firebase'; // Import Firebase
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';

const Navbar = () => {
  const [user, setUser] = useState(null);

  // Listen for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // Handle Google Sign-In with Popup
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      toast.success('Logged in Successfully!!');
    } catch (error) {
      console.error("Google Sign-In failed:", error);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success('Log Out Successfully!!');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div><Toaster /></div>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src="https://via.placeholder.com/150x50?text=Invoiceji" alt="Invoiceji" className="logo invoiceji-logo" />
        </a>

        <div className="d-flex align-items-center">
          {user ? (
            <>
              <a className="btn btn-light sign_log_button d-flex align-items-center justify-content-center" href="/profile">
                View Profile
              </a>
              <button className="btn btn-danger ms-2" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <button className="btn btn-light sign_log_button d-flex align-items-center justify-content-center"
              onClick={handleGoogleLogin}>
              Sign up / Log in with <FcGoogle className='ms-2' />
            </button>
          )}
        </div>

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
              <a className="nav-link fs-5 fw-bold" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Generate
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-center" href="/onlinebillpage">Online Bill Generator</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-center disabled opacity-75" href="/">Coming Soon</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown mx-auto my-2 rounded mx-lg-3 px-3">
              <a className="nav-link fs-5 fw-bold" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Download Templates
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item text-center" href="/balanceheetpage">Balance Sheet</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-center" href="/profitlosspage">P&L Statement</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-center" href="/gstbillpage">GST Bill Format</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-center" href="/commercialinvoicepage">Commercial Invoice</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item text-center" href="/incomestatementpage">Income Statement</a></li>
              </ul>
            </li>
            <li className="nav-item mx-auto my-2 mx-lg-3">
              <a className="nav-link fs-5 fw-bold" href="/pricing">Pricing</a>
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
