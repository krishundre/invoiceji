import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms and Conditions</h1>
      <p className="terms-date">Last updated: April 2025</p>

      <section className="terms-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to BillCraftr! By accessing and using our platform, you agree to the following terms and conditions. Please read them carefully before using our services.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. User Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Use of Service</h2>
        <p>
          BillCraftr provides a tool to generate and download invoices. You agree to use this service lawfully and refrain from any fraudulent, abusive, or illegal activities.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Intellectual Property</h2>
        <p>
          All content and templates available on BillCraftr, including logos, designs, and code, are the property of BillCraftr and are protected by intellectual property laws.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Third-Party Services</h2>
        <p>
        BillCraftr uses third-party services such as EmailJS, DiceBear, and React Hot Toast to improve functionality. We are not responsible for any issues that arise from these third-party providers.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Limitation of Liability</h2>
        <p>
        BillCraftr is not liable for any indirect, incidental, or consequential damages that may arise from the use or inability to use our services.
        </p>
      </section>

      <section className="terms-section">
        <h2>7. Modification of Terms</h2>
        <p>
          We reserve the right to change or modify these terms at any time. Changes will be posted on this page with a revised date.
        </p>
      </section>

      <section className="terms-section">
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions or concerns about these Terms and Conditions, feel free to contact us through our support form.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
