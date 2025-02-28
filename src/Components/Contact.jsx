import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page container py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10"> {/* Reduced width */}
          <form method='get'>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name *</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address *</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" id="subject" placeholder="Subject" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="btn send-message w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
