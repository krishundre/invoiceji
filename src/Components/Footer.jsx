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
            <img src="https://via.placeholder.com/150x50?text=Invoiceji" alt="Invoiceji Logo" className='mx-auto my-auto'/>
          </div>

          {/* Navbar Links Section */}
          <div className="col-md-3 footer-nav">
            <h5 className='text-decoration-underline'>Navigation</h5>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/generate">Generate Invoice</a></li>
              <li><a href="/download-templates">Download Templates</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Extra Links Section */}
          <div className="col-md-2 footer-extra">
            <h5 className='text-decoration-underline'>Extra Links</h5>
            <ul>
              <li><a href="/documentation">Documentation</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/privacy">About Developer</a></li>
            </ul>
          </div>
          
          {/* Extra Links Section */}
          <div className="col-md-2 footer-project">
            <h5 className='text-decoration-underline'>Other Projects</h5>
            <ul>
              <li><a href="https://linkers-project.vercel.app/" target='_blank' rel='noreferrer'>Linkers' Project</a></li>
              <li><a href="https://www.brzee.shop/" target='_blank' rel='noreferrer'>Brzee Jewelry</a></li>
              <li><a href="https://teraibazaar.com/" target='_blank' rel='noreferrer'>Terai Bazaar</a></li>
              <li><a href="https://medical-directory.vercel.app/" target='_blank' rel='noreferrer'>Online Medical Directory</a></li>
              <li><a href="https://www.boutiquesofindia.in/" target='_blank' rel='noreferrer'>Boutiques of India</a></li>
            </ul>
          </div>
        </div>

        {/* Second Strip */}
        <div className="footer-bottom">
          <p>Made with ❤️ by <a href="https://krishundre.vercel.app/" target='_blank' rel='noreferrer' className='text-white'>Krish Undre</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
