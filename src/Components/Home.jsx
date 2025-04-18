import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import option1 from "../Creatives/Online_Invoice_Generator.jpg";
import option2 from "../Creatives/Multiple_Templates.jpg";
import option3 from "../Creatives/download_options.jpg";
import bg2 from "../Creatives/Home_Bg.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    };

    return (
        <div className="home-page">
            <div className='welcome_section d-grid justify-content-center align-items-center px-auto text-center py-auto'>
                <h1 className='w-100 d-block fw-bold'>
                    <Typewriter
                        options={{
                            strings: ['Welcome to BillCraftr'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </h1>
                <p className='w-100 fs-1 d-block'>Your go-to solution for generating professional invoices!</p>
                <button className="cta-button">Get Started</button>
            </div>

            <section className="features-section">
                <div className="feature-card">
                    <img src={option1} alt="Online Invoice Generator" className="feature-image" />
                    <h2>Online Invoice Generator</h2>
                    <p>Create invoices easily with our user-friendly interface.</p>
                </div>

                <div className="feature-card">
                    <img src={option2} alt="Multiple Templates" className="feature-image" />
                    <h2>Multiple Templates</h2>
                    <p>Choose from various templates that suit your style.</p>
                </div>

                <div className="feature-card">
                    <img src={option3} alt="Download Options" className="feature-image" />
                    <h2>Download Options</h2>
                    <p>Download invoices in multiple formats like PDF, DOC, and more!</p>
                </div>
            </section>

            <section className="about-section text-center justify-content-center align-item-center">
                <h2>About Invoiceji</h2>
                <p className='text-center px-auto fs-4'>
                    Invoiceji is your one-stop solution for creating professional and customizable invoices tailored specifically for Indian businesses and freelancers. Whether you're a startup, a growing enterprise, or a solo entrepreneur, Invoiceji simplifies your billing process with an easy-to-use interface and a visually rich experience. The platform offers multiple invoice templates that not only look modern and polished but are also fully functional for GST-compliant billing. With options to add company logos, detailed client information, and dynamic item lists, Invoiceji makes it seamless to generate accurate invoices that reflect your brand’s identity. It's designed to reduce manual errors and save valuable time, letting you focus more on growing your business.
                </p>
                <img src={bg2} alt="Invoiceji About" className="about-image" />
            </section>

            <section className="testimonials-section">
                <h2>What Our Users Say</h2>
                <Slider {...sliderSettings}>
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
                </Slider>
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
