import { FaFilePdf, FaGoogleDrive, FaFileExcel, FaFileWord, FaFileArchive } from 'react-icons/fa';
import './IncomeStatementPage.css';
import bg2 from "../Creatives/incSt.jpg";
import bg1 from "../Creatives/bs.png";


const IncomeStatementPage = () => {
    return (
        <div className="container income-statement-page">
            {/* Hero Section */}
            <div className="row hero-section align-items-center">
                <div className="col-12">
                    <img src={bg2   }  alt="Income Statement" className="img-fluid mb-4" />
                </div>
                <div className="col-12 text-center">
                    <h1 className="page-title">Income Statement</h1>
                    <p className="page-description">
                        An income statement, also known as a profit and loss statement, provides a summary of a company's revenues and expenses over a specific period of time.
                        This essential financial statement helps in understanding profitability and overall financial performance.
                    </p>
                </div>
            </div>

            {/* Download Section */}
            <div className="row download-section text-center mt-5">
                <h2>Download Formats</h2>
                <p>Choose your preferred file format to download the Income Statement template:</p>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-block d-flex justify-content-center align-items-center">
                        <FaFilePdf className="download-icon me-2" />
                        Download PDF
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-block d-flex justify-content-center align-items-center">
                        <FaGoogleDrive className="download-icon me-2" />
                        Download on Google Sheets
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-block d-flex justify-content-center align-items-center">
                        <FaFileExcel className="download-icon me-2" />
                        Download Excel
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-block d-flex justify-content-center align-items-center">
                        <FaFileWord className="download-icon me-2" />
                        Download Word
                    </a>
                </div>

                {/* Download All File Types Button */}
                <div className="col-12 mt-4 d-flex justify-content-center align-items-center">
                    <a href="#!" className="btn d-block d-flex download_zip_btn justify-content-center align-items-center">
                        <FaFileArchive className="download-icon me-2" />
                        Download All File Types (ZIP)
                    </a>
                </div>
            </div>

            {/* How to Use This Site for Income Statement */}
            <div className="row income-statement-feature-section mt-5">
                <div className="col-12 text-center">
                    <h2>Using Our Site for Income Statement Creation</h2>
                    <p className="feature-description">
                        Our platform allows you to easily generate income statements by simply entering your company’s revenue and expense data. Download ready-to-use templates to track and manage financial performance effectively.
                    </p>
                </div>
            </div>

            {/* Suggestions Section */}
            <div className="suggestions-section mt-5">
                <h3 className="suggestions-title text-center">You might also be interested in:</h3>
                <div className="row mt-4">
                    {/* Suggestion 1 - Balance Sheet */}
                    <div className="suggestion-card col-md-4">
                        <img src={bg1} alt="Balance Sheet" className="img-fluid" />
                        <h4>Balance Sheet</h4>
                        <p>Download the professionally designed balance sheet template to organize your financial data.</p>
                        <button className="btn btn-secondary">View Template</button>
                    </div>

                    {/* Suggestion 2 - Commercial Invoice */}
                    <div className="col-md-4">
                        <img src="https://placehold.co/300x200" alt="Commercial Invoice" className="img-fluid" />
                        <h4>Commercial Invoice</h4>
                        <p>Access a customizable commercial invoice for international trade.</p>
                        <button className="btn btn-secondary">View Template</button>
                    </div>

                    {/* Suggestion 3 - GST Bill Format */}
                    <div className="col-md-4">
                        <img src="https://placehold.co/300x200" alt="GST Bill Format" className="img-fluid" />
                        <h4>GST Bill Format</h4>
                        <p>Download GST-compliant bill format for accurate tax filing.</p>
                        <button className="btn btn-secondary">View Template</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IncomeStatementPage;
