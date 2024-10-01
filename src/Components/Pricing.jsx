import React from 'react';
import './Pricing.css'; // Assuming you have a CSS file for additional styling
import { IoMdContacts } from "react-icons/io";

const PricingPage = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-4A2C1D mb-4 pricing_heading">Our Pricing Packages</h1>

      <div className="row">
        {/* Basic Package */}
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow" style={{ backgroundColor: '#E3D2C4' }}>
            <div className="card-body">
          <img src="https://placehold.co/300x200?text=Basic+Package" alt="Basic Package" className="logo mb-2 w-100" />
              <h5 className="card-title text-4A2C1D pricing_heading"><bold>Basic Package</bold></h5>
              <p className="card-text">
                <strong className="pricing_heading" >Price:</strong> ₹999
              </p>
              <ul className="list-unstyled">
                <li>🔹 Custom Template: Pre-designed templates with minor modifications</li>
                <li>🔹 Customization Level: Low</li>
                <li>🔹 Support Service: Email support (response within 48 hours)</li>
                <li>🔹 Multi-language Support: Not included</li>
              </ul>
              <a href='mailto:krisundre@gmail.com?subject=Enquire regarding Custom Packages for Invoiceji&cc=&bcc=&body=Hi Krish Undre, I wanted to enquire regarding Custom Packages for Invoiceji' className="btn btn-primary d-flex align-items-center justify-content-center" style={{ backgroundColor: '#9B6D47', color: '#F0F0F0' }}>Get in Touch with Us <IoMdContacts className='ms-2' /></a>
            </div>
          </div>
        </div>

        {/* Standard Package */}
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow" style={{ backgroundColor: '#E3D2C4' }}>
            <div className="card-body">
          <img src="https://placehold.co/300x200?text=Standard+Package" alt="Basic Package" className="logo mb-2 w-100" />
              <h5 className="card-title text-4A2C1D pricing_heading"><bold>Standard Package</bold></h5>
              <p className="card-text">
                <strong className="pricing_heading" >Price:</strong> ₹2499
              </p>
              <ul className="list-unstyled">
                <li>🔹 Custom Template: Semi-custom templates with significant changes</li>
                <li>🔹 Customization Level: Medium</li>
                <li>🔹 Support Service: Email support (response within 24 hours) + 1 live chat session/month</li>
                <li>🔹 Multi-language Support: Limited (up to 2 languages)</li>
              </ul>
              <a href='mailto:krisundre@gmail.com?subject=Enquire regarding Custom Packages for Invoiceji&cc=&bcc=&body=Hi Krish Undre, I wanted to enquire regarding Custom Packages for Invoiceji' className="btn btn-primary d-flex align-items-center justify-content-center" style={{ backgroundColor: '#9B6D47', color: '#F0F0F0' }}>Get in Touch with Us <IoMdContacts className='ms-2' /></a>
            </div>
          </div>
        </div>

        {/* Premium Package */}
        <div className="col-md-4 mb-4">
          <div className="card border-0 shadow" style={{ backgroundColor: '#E3D2C4' }}>
            <div className="card-body">
          <img src="https://placehold.co/300x200?text=Premium+Package" alt="Basic Package" className="logo mb-2 w-100" />
              <h5 className="card-title text-4A2C1D pricing_heading"><bold>Premium Package</bold></h5>
              <p className="card-text">
                <strong className="pricing_heading" >Price:</strong> ₹4999
              </p>
              <ul className="list-unstyled">
                <li>🔹 Custom Template: Fully custom template designed from scratch</li>
                <li>🔹 Customization Level: High</li>
                <li>🔹 Support Service: Priority support (response within 4 hours) + unlimited live chat sessions</li>
                <li>🔹 Multi-language Support: Full support for multiple languages</li>
              </ul>
              <a href='mailto:krisundre@gmail.com?subject=Enquire regarding Custom Packages for Invoiceji&cc=&bcc=&body=Hi Krish Undre, I wanted to enquire regarding Custom Packages for Invoiceji' className="btn btn-primary d-flex align-items-center justify-content-center" style={{ backgroundColor: '#9B6D47', color: '#F0F0F0' }}>Get in Touch with Us <IoMdContacts className='ms-2' /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
