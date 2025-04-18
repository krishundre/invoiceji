import { FaFilePdf, FaGoogleDrive, FaFileExcel, FaFileWord, FaFileArchive } from 'react-icons/fa';
import './BalanceSheetPage.css';

const BalanceSheetPage = () => {
    return (
        <div className="container balance-sheet-page">
            {/* Hero Section */}
            <div className="row hero-section align-items-center">
                <div className="col-12">
                    <img src="https://placehold.co/1200x400" alt="Balance Sheet" className="img-fluid mb-4" />
                </div>
                <div className="col-12 text-center">
                    <h1 className="page-title">Balance Sheet</h1>
                    <p className="page-description">
                        A balance sheet is one of the key financial statements used by businesses to understand their financial position.
                        It includes assets, liabilities, and shareholder equity, providing a snapshot of the company’s financial health.
                    </p>
                </div>
            </div>

            {/* Background & History Section */}
            <div className="row mt-5">
                <div className="col-12">
                    <h2 className="section-heading">Background & History</h2>
                    <p>
                        The concept of a balance sheet dates back to 15th-century Italy, introduced by Luca Pacioli, the father of modern accounting.
                        Over centuries, it has evolved into a standardized financial document used globally. Today, it serves as a core part of
                        financial reporting in both small businesses and large corporations. In India, the format and structure of a balance sheet are
                        governed by statutory and regulatory frameworks to ensure transparency and comparability.
                    </p>
                </div>
            </div>

            {/* Legal Requirement in India */}
            <div className="row mt-4">
                <div className="col-12">
                    <h2 className="section-heading">Legal Requirement in India</h2>
                    <p>
                        Under the <strong>Companies Act, 2013</strong>, every registered company in India is legally required to prepare and present a balance sheet
                        as part of their annual financial statements. The format must adhere to the <strong>Schedule III</strong> of the Act. Additionally, the Ministry
                        of Corporate Affairs (MCA) mandates that companies file their balance sheet online via MCA’s portal using forms like AOC-4.
                        For listed companies, compliance with the <strong>Indian Accounting Standards (Ind AS)</strong> issued by ICAI is also mandatory.
                    </p>
                    <p>
                        Moreover, banks, startups, NGOs, and LLPs may also need to maintain and present balance sheets for auditing, funding,
                        and taxation purposes under regulations from the <strong>Income Tax Department</strong> and the <strong>GST Council</strong>.
                    </p>
                </div>
            </div>

            {/* Download Section */}
            <div className="row download-section text-center mt-5">
                <h2>Download Formats</h2>
                <p>Choose your preferred file format to download the Balance Sheet template:</p>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-block d-flex justify-content-center align-items-center">
                        <FaFilePdf className="download-icon me-2" />
                        Download PDF
                    </a>
                </div>

                <div className="col-md-3 col-sm-6 my-2">
                    <a href="#!" className="btn btn-primary d-block d-flex justify-content-center align-items-center">
                        <FaGoogleDrive className="download-icon me-2" />
                        Google Sheets
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

                <div className="col-12 mt-4 d-flex justify-content-center align-items-center">
                    <a href="#!" className="btn d-block d-flex download_zip_btn justify-content-center align-items-center">
                        <FaFileArchive className="download-icon me-2" />
                        Download All File Types (ZIP)
                    </a>
                </div>
            </div>

            {/* Suggestions Section */}
            <div className="suggestions-section mt-5">
                <h3 className="suggestions-title text-center">You might also be interested in:</h3>
                <div className="row mt-4">
                    <div className="suggestion-card col-md-4">
                        <img src="https://placehold.co/300x200" alt="Profit & Loss" className="img-fluid" />
                        <h4>Profit & Loss Statement</h4>
                        <p>Summarize revenues, costs, and expenses in this detailed financial statement.</p>
                        <button className="btn btn-secondary">View Template</button>
                    </div>

                    <div className="col-md-4">
                        <img src="https://placehold.co/300x200" alt="GST Bill Format" className="img-fluid" />
                        <h4>GST Bill Format</h4>
                        <p>Download GST-compliant bill format for accurate tax filing.</p>
                        <button className="btn btn-secondary">View Template</button>
                    </div>

                    <div className="col-md-4">
                        <img src="https://placehold.co/300x200" alt="Commercial Invoice" className="img-fluid" />
                        <h4>Commercial Invoice</h4>
                        <p>Access a customizable commercial invoice for international trade.</p>
                        <button className="btn btn-secondary">View Template</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BalanceSheetPage;
