import React from 'react';
import {
    FaFilePdf,
    FaGoogleDrive,
    FaFileExcel,
    FaFileWord,
    FaFileArchive,
} from 'react-icons/fa';
import './GSTBillPage.css';
import bg5 from "../Creatives/gst.jpg";
import bg1 from '../Creatives/bs.png';
import bg2 from "../Creatives/incSt.jpg";
import bg3 from "../Creatives/pnl.jpg";
import bg4 from "../Creatives/comInv.jpg"


const GSTBillPage = () => {
    return (
        <div className="container gst-bill-page">
            {/* Hero Section */}
            <div className="row hero-section align-items-center">
                <div className="col-12">
                    <img src={bg5} className="img-fluid mb-4" />
                </div>
                <div className="col-12 text-center">
                    <h1 className="page-title">GST Bill Format</h1>
                    <p className="page-description">
                        A GST-compliant bill format ensures that your invoices follow proper tax laws.
                        Generate invoices for your business efficiently with customizable templates.
                    </p>
                </div>
            </div>

            {/* Download Section */}
            <div className="row download-section text-center mt-5">
                <h2>Download Formats</h2>
                <p>Select a file format to download your GST Bill Template:</p>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-flex justify-content-center align-items-center">
                        <FaFilePdf className="me-2" />
                        Download PDF
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-flex justify-content-center align-items-center">
                        <FaGoogleDrive className="me-2" />
                        Google Sheets
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-flex justify-content-center align-items-center">
                        <FaFileExcel className="me-2" />
                        Download Excel
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-flex justify-content-center align-items-center">
                        <FaFileWord className="me-2" />
                        Download Word
                    </a>
                </div>

                <div className="col-12 mt-4">
                    <a href="#!" className="btn btn-secondary d-flex justify-content-center align-items-center">
                        <FaFileArchive className="me-2" />
                        Download All (ZIP)
                    </a>
                </div>
            </div>

            {/* How To Use Section */}
            <div className="row mt-5 text-center">
                <div className="col-12">
                    <h2>How to Use</h2>
                    <p>
                        Choose a template, enter your invoice details, and download it in your desired format.
                        Our tool is simple, fast, and GST-compliant.
                    </p>
                </div>
            </div>

            {/* Suggestions */}
            <div className="row suggestions-section mt-5 text-center">
                <h3>You might also like:</h3>

                <div className="col-md-4 mb-4">
                    <img src={bg1} alt="Balance Sheet" className="img-fluid" />
                    <h4>Balance Sheet</h4>
                    <p>Download a template to track your financial position.</p>
                    <button className="btn btn-outline-secondary">View Template</button>
                </div>

                <div className="col-md-4 mb-4">
                    <img src={bg3} alt="Profit & Loss" className="img-fluid" />
                    <h4>Profit & Loss Statement</h4>
                    <p>Track your income and expenses efficiently.</p>
                    <button className="btn btn-outline-secondary">View Template</button>
                </div>

                <div className="col-md-4 mb-4">
                    <img src={bg4} alt="Commercial Invoice" className="img-fluid" />
                    <h4>Commercial Invoice</h4>
                    <p>Use this for international business transactions.</p>
                    <button className="btn btn-outline-secondary">View Template</button>
                </div>
            </div>
        </div>
    );
};

export default GSTBillPage;
