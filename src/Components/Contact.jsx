import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_atvreir', 'template_ef0129p', form.current, {
        publicKey: '_vFhgvQ185BTVIq2e',
      })
      .then(
        () => {
          toast.success('Message sent successfully!')
          form.current.reset(); // ✅ This clears the form
        },
        (error) => {
          alert("Failed to send message, please try again.");
          toast.error('EmailJS Error:', error.text);
        }
      );
  };

  return (
    <div className="contact-page container py-5">
      <div><Toaster /></div>
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name *</label>
              <input type="text" className="form-control" name="user_name" placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address *</label>
              <input type="email" className="form-control" name="user_email" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone Number *</label>
              <input type="tel" className="form-control" name="user_phone" placeholder="Enter your phone number" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" className="form-control" name="subject" placeholder="Subject" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message *</label>
              <textarea className="form-control" name="message" rows="4" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="btn send-message w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
