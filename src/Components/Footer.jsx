import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row footer-top">
          {/* Logo Section */}
          <div className="col-md-5 d-flex justify-content-center align-items-center mb-3 mb-md-0">
            <a className="navbar-brand" href="/">
              <img src="https://via.placeholder.com/150x50?text=Invoiceji" alt="Invoiceji Logo" className="invoiceji-logo" />
            </a>
          </div>

          {/* Navbar Links Section */}
          <div className="col-md-3 footer-nav">
            <h5>Quick Links</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/onlinebillpage">Generate Bill</a></li>
              <li><a href="/templates">Download Templates</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Extra Links Section */}
          <div className="col-md-2 footer-extra">
            <h5>Extra Links</h5>
            <ul>
              <li><a href="/documentation">Documentation</a></li>
              <li><a href="/faqpage">FAQ</a></li>
              <li><a href="/termsandserviecspage">Terms & Conditions</a></li>
              <li><a href="https://krishundre.vercel.app/" target="_blank" rel="noreferrer">About Developer</a></li>
            </ul>
          </div>

          {/* Other Projects Section */}
          <div className="col-md-2 footer-project">
            <h5>Other Projects</h5>
            <ul>
              <li><a href="https://merlot.com/" target="_blank" rel="noreferrer">Merlot Trading</a></li>
              <li><a href="https://brzee.shop/" target="_blank" rel="noreferrer">Brzee Jewelry</a></li>
              <li><a href="https://linkers-project.vercel.app/" target="_blank" rel="noreferrer">Linkers' Project</a></li>
              <li><a href="https://krishundre.vercel.app/projects" target="_blank" rel="noreferrer">View all Projects</a></li>
            </ul>
          </div>
        </div>

        {/* Second Strip */}
        <div className="footer-bottom">
          <p>Made with ❤️ by <a href="https://krishundre.vercel.app/" target="_blank" rel="noreferrer" className="footer-link px-1">Krish Undre</a>
            &
            <a href="https://www.linkedin.com/in/vaibhavi-kulkarni-vaik" target="_blank" rel="noreferrer" className="footer-link px-1">Vaibhavi Kulkarni</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;