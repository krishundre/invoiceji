import { FaFilePdf, FaGoogleDrive, FaFileExcel, FaFileWord, FaFileArchive } from 'react-icons/fa';
import './ProfitLossPage.css';
import bg3 from "../Creatives/pnl.jpg"

const ProfitLossPage = () => {
    return (
        <div className="container profit-loss-page">
            {/* Hero Section */}
            <div className="row profit-loss-hero-section align-items-center">
                <div className="col-12 justify-content-center d-flex">
                    <img src={bg3} className="img-fluid mb-4" />
                </div>
                <div className="col-12 text-center">
                    <h1 className="profit-loss-title">Profit & Loss Statement</h1>
                    <p className="profit-loss-description">
                        A profit and loss statement (P&L) summarizes the revenues, costs, and expenses incurred during a specific period of time.
                        It provides insights into a company's ability to generate profit by increasing revenue, reducing costs, or both.
                    </p>
                </div>
            </div>

            {/* Download Section */}
            <div className="row profit-loss-download-section text-center mt-5">
                <h2>Download Formats</h2>
                <p>Select a file format to download the Profit & Loss Statement template:</p>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-flex justify-content-center align-items-center">
                        <FaFilePdf className="download-icon me-2" />
                        Download PDF
                    </a>
                </div>
                <div className="col-md-3 col-sm-6 my-2">
                    <a href="https://docs.google.com/document/d/1oSkW_IYa6mPz9vEto2853XYorbaMumh4/edit?usp=drive_link&ouid=112010709532649457590&rtpof=true&sd=true" className="btn btn-primary d-flex justify-content-center align-items-center">
                        <FaGoogleDrive className="download-icon me-2" />
                        Download on Google Sheets
                    </a>
                </div>
                <div className="col-md-3 col-sm-6 my-2">
                    <a href="/Profit and Loss.xlsx" className="btn btn-primary d-flex justify-content-center align-items-center">
                        <FaFileExcel className="download-icon me-2" />
                        Download Excel
                    </a>
                </div>
                <div className="col-md-3 col-sm-6 my-2">
                    <a href="/Profit and Loss.docx" className="btn btn-primary d-flex justify-content-center align-items-center">
                        <FaFileWord className="download-icon me-2" />
                        Download Word
                    </a>
                </div>

                {/* Download All Formats */}
                <div className="col-12 mt-4 d-flex justify-content-center">
                    <a href="/BillCraftr.zip" className="btn download-zip-btn d-flex justify-content-center align-items-center">
                        <FaFileArchive className="download-icon me-2" />
                        Download All File Types (ZIP)
                    </a>
                </div>
            </div>

            {/* Suggestions Section */}
            <div className="profit-loss-suggestions-section mt-5">
                <h3 className="text-center">You might also be interested in:</h3>
                <div className="row mt-4">
                    {/* Suggestion: Balance Sheet */}
                    <div className="col-md-4">
                        <div className="suggestion-card text-center">
                            <img src="https://placehold.co/300x200" alt="Balance Sheet" className="img-fluid" />
                            <h4>Balance Sheet</h4>
                            <p>Download a professionally designed balance sheet to organize your finances.</p>
                            <button className="btn btn-secondary">View Template</button>
                        </div>
                    </div>

                    {/* Suggestion: GST Bill Format */}
                    <div className="col-md-4">
                        <div className="suggestion-card text-center">
                            <img src="https://placehold.co/300x200" alt="GST Bill Format" className="img-fluid" />
                            <h4>GST Bill Format</h4>
                            <p>Get a GST-compliant bill format for accurate tax filings.</p>
                            <button className="btn btn-secondary">View Template</button>
                        </div>
                    </div>

                    {/* Suggestion: Commercial Invoice */}
                    <div className="col-md-4">
                        <div className="suggestion-card text-center">
                            <img src="https://placehold.co/300x200" alt="Commercial Invoice" className="img-fluid" />
                            <h4>Commercial Invoice</h4>
                            <p>Access a customizable commercial invoice for global trade.</p>
                            <button className="btn btn-secondary">View Template</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfitLossPage;
