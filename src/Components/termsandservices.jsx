import React from 'react';
import { motion } from 'framer-motion';
import './TermsAndServices.css'; // Ensure to create this CSS file for styling

const TermsAndServices = () => {
    return (
        <div className="terms-page">
            <motion.header
                className="terms-header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Terms and Services</h1>
                <p>Please read these terms carefully before using our services.</p>
            </motion.header>

            <section className="terms-section">
                <motion.div
                    className="terms-item"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing or using Invoiceji, you agree to comply with and be bound by these terms and services.
                        If you do not agree with any part of these terms, you must not use our services. Your continued use of
                        the services will be considered acceptance of these terms.
                    </p>
                </motion.div>

                <motion.div
                    className="terms-item"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                >
                    <h2>2. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these terms at any time without prior notice. We will notify you of any
                        changes by posting the new terms on this page. Your continued use of our services after changes are posted
                        constitutes your acceptance of the new terms. It is your responsibility to review these terms periodically.
                    </p>
                </motion.div>

                <motion.div
                    className="terms-item"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                >
                    <h2>3. User Responsibilities</h2>
                    <p>
                        As a user, you agree to provide accurate, current, and complete information during the registration
                        process and to update such information to keep it accurate, current, and complete. You are responsible
                        for maintaining the confidentiality of your account information and for all activities that occur under
                        your account. You agree to notify us immediately of any unauthorized use of your account or any other
                        breach of security.
                    </p>
                </motion.div>

                <motion.div
                    className="terms-item"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                >
                    <h2>4. Payment Terms</h2>
                    <p>
                        All fees are due and payable in advance. We accept various payment methods as indicated on our platform.
                        You are responsible for paying all fees and applicable taxes associated with your use of our services.
                        Payments are non-refundable, except as required by law. In the event of a payment failure, your account
                        may be suspended until the issue is resolved.
                    </p>
                </motion.div>

                <motion.div
                    className="terms-item"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                >
                    <h2>5. Limitation of Liability</h2>
                    <p>
                        Invoiceji shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                        arising from your use of our services or any content obtained from or through our services, including
                        but not limited to loss of profits, data, or other intangibles, even if we have been advised of the
                        possibility of such damages. Your sole and exclusive remedy for dissatisfaction with our services
                        is to stop using them.
                    </p>
                </motion.div>

                <motion.div
                    className="terms-item"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                >
                    <h2>6. Governing Law</h2>
                    <p>
                        These terms and services shall be governed by and construed in accordance with the laws of [Your Country/State],
                        without regard to its conflict of law principles. Any disputes arising out of or relating to these terms
                        shall be resolved in the courts of [Your Jurisdiction].
                    </p>
                </motion.div>

                <motion.div
                    className="terms-item"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                >
                    <h2>7. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your access to our services at any time, without prior
                        notice, for conduct that we believe violates these terms or is harmful to other users, our business,
                        or third parties, or for any other reason. Upon termination, your right to use the services will cease
                        immediately.
                    </p>
                </motion.div>

                <motion.div
                    className="terms-item"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                >
                    <h2>8. Contact Us</h2>
                    <p>
                        If you have any questions about these terms, please contact us at <a href="mailto:krisundre@gmail.com">krisundre@gmail.com</a>. We are here to assist you with any
                        queries or concerns you may have regarding our services and these terms.
                    </p>
                </motion.div>

            </section>
        </div>
    );
};

export default TermsAndServices;
