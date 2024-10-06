import React from 'react';
import { motion } from 'framer-motion';
import './faqpage.css'; // Ensure to create this CSS file for styling

const FAQPage = () => {
    const faqs = [
        {
            question: "How do I create an invoice?",
            answer: "Creating an invoice is easy! Simply choose a template, fill in your details, and hit 'Generate Invoice'."
        },
        {
            question: "What formats can I download my invoices in?",
            answer: "You can download your invoices in PDF, DOC, and HTML formats."
        },
        {
            question: "Is there a limit to the number of invoices I can create?",
            answer: "No, you can create as many invoices as you need without any restrictions."
        },
        {
            question: "Can I customize the templates?",
            answer: "Yes! Our templates are customizable, allowing you to adjust colors, fonts, and layouts to fit your brand."
        },
        {
            question: "What payment methods are accepted?",
            answer: "We accept all major credit cards, debit cards, and PayPal for any premium features."
        },
        {
            question: "Is my data secure?",
            answer: "Absolutely! We take data security very seriously. All information is encrypted and stored securely."
        },
        {
            question: "Can I access my invoices from multiple devices?",
            answer: "Yes! Our platform is cloud-based, so you can access your invoices from any device with internet connectivity."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes! Our customer support team is available 24/7 to assist you with any issues or questions you may have."
        },
        {
            question: "Can I track my payments?",
            answer: "Yes, you can track your payments and invoice statuses through your Invoiceji dashboard."
        },
        {
            question: "How do I contact customer support?",
            answer: "You can contact our customer support via the 'Contact Us' page or through the help button at the bottom of the website."
        },
        // Add more FAQs as needed
    ];

    return (
        <div className="faq-page">
            <motion.header
                className="faq-header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1>Frequently Asked Questions</h1>
                <p>If you have any questions, you might find your answer here.</p>
            </motion.header>

            <section className="faq-section">
                {faqs.map((faq, index) => (
                    <motion.div
                        className="faq-item"
                        key={index}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </motion.div>
                ))}
            </section>

            <div className="contact-button-container">
                <a href="/contact" className="contact-button">Can't find your answer? Contact Us!</a>
            </div>
        </div>
    );
};

export default FAQPage;
