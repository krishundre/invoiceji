import React from 'react';
import './Home.css'; // Updated CSS file

const HomePage = () => {
    return (
        <div className="home-page">
            <div className='welcome_section px-auto text-center py-auto'>
                <h1 className='block'>Welcome to Invoiceji</h1>
                <p className='block'>Your go-to solution for generating professional invoices!</p>
                <button className="cta-button block">Get Started</button>
            </div>


            <section className="features-section">
                <div className="feature-card" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                    <img src="https://picsum.photos/200/100?random=1" alt="Online Invoice Generator" className="feature-image" />
                    <h2>Online Invoice Generator</h2>
                    <p>Create invoices easily with our user-friendly interface.</p>
                </div>

                <div className="feature-card" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                    <img src="https://picsum.photos/200/100?random=2" alt="Multiple Templates" className="feature-image" />
                    <h2>Multiple Templates</h2>
                    <p>Choose from various templates that suit your style.</p>
                </div>

                <div className="feature-card" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
                    <img src="https://picsum.photos/200/100?random=3" alt="Download Options" className="feature-image" />
                    <h2>Download Options</h2>
                    <p>Download invoices in multiple formats like PDF, DOC, and more!</p>
                </div>
            </section>

            <section className="about-section" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <h2>About Invoiceji</h2>
                <p>Invoiceji is designed to simplify the invoicing process for businesses of all sizes. Our platform allows you to create, manage, and download invoices with ease, ensuring you get paid on time and maintain a professional appearance.</p>
                <img src="https://picsum.photos/400/200?random=4" alt="Invoiceji About" className="about-image" />
            </section>

            <section className="testimonials-section">
                <h2>What Our Users Say</h2>
                <div className="testimonial">
                    <p>"Invoiceji has transformed how we manage our invoicing! The templates are beautiful, and the generator is so easy to use!"</p>
                    <cite>- Alex R.</cite>
                </div>
                <div className="testimonial">
                    <p>"I love the flexibility of downloading invoices in different formats. It's perfect for my business!"</p>
                    <cite>- Priya K.</cite>
                </div>
                <div className="testimonial">
                    <p>"The customer support is outstanding! They helped me every step of the way." </p>
                    <cite>- Samir L.</cite>
                </div>
            </section>

            <section className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-item">
                    <h3>How do I create an invoice?</h3>
                    <p>Creating an invoice is easy! Simply choose a template, fill in your details, and hit 'Generate Invoice'.</p>
                </div>
                <div className="faq-item">
                    <h3>What formats can I download my invoices in?</h3>
                    <p>You can download your invoices in PDF, DOC, and HTML formats.</p>
                </div>
                <div className="faq-item">
                    <h3>Is there a limit to the number of invoices I can create?</h3>
                    <p>No, you can create as many invoices as you need without any restrictions.</p>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
