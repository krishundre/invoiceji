import { FaFilePdf, FaGoogleDrive, FaFileExcel, FaFileWord, FaFileArchive } from 'react-icons/fa';
import './CommercialInvoicePage.css';

const CommercialInvoicePage = () => {
    return (
        <div className="container commercial-invoice-page">
            {/* Hero Section */}
            <div className="row hero-section align-items-center">
                <div className="col-12">
                    <img src="https://placehold.co/1200x400" alt="Commercial Invoice" className="img-fluid mb-4" />
                </div>
                <div className="col-12 text-center">
                    <h1 className="page-title">Commercial Invoice</h1>
                    <p className="page-description">
                        A commercial invoice is a document used in international trade. It serves as a customs declaration provided by the person or corporation that is exporting an item across international borders.
                        Download a customizable template to meet your invoicing needs.
                    </p>
                </div>
            </div>

            {/* Background & History Section */}
            <div className="row mt-5">
                <div className="col-12">
                    <h2 className="section-heading">Background & History</h2>
                    <p>
                        The commercial invoice has been a crucial document in global trade since the early days of international commerce.
                        It originated as a way to declare the value and contents of goods for customs purposes. Today, it plays an essential role
                        in cross-border transactions by helping determine duties, taxes, and the legitimacy of shipments. The layout and information
                        included in a commercial invoice have been standardized over time to meet global trade and customs requirements.
                    </p>
                </div>
            </div>

            {/* Legal Requirements in India */}
            <div className="row mt-4">
                <div className="col-12">
                    <h2 className="section-heading">Legal Requirements in India</h2>
                    <p>
                        In India, a commercial invoice must comply with guidelines issued by the <strong>Directorate General of Foreign Trade (DGFT)</strong> and the <strong>Customs Act, 1962</strong>.
                        The invoice should include specific information such as product description, HSN code, invoice number, buyer/seller details, value of goods, applicable taxes, and country of origin/destination.
                    </p>
                    <p>
                        For exports, businesses are required to file commercial invoices along with shipping bills through the <strong>ICEGATE portal</strong> under the Indian Customs Electronic Gateway system.
                        The invoice also helps claim GST refunds for exports under <strong>Zero Rated Supplies</strong> defined in the <strong>GST Act</strong>.
                    </p>
                </div>
            </div>

            {/* Download Section */}
            <div className="row download-section text-center mt-5">
                <h2>Download Formats</h2>
                <p>Choose your preferred file format to download the Commercial Invoice template:</p>

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

            {/* Feature Explanation Section */}
            <div className="row commercial-invoice-feature-section mt-5">
                <div className="col-12 text-center">
                    <h2>Using Our Site for Commercial Invoice Creation</h2>
                    <p className="feature-description">
                        Our website allows you to generate commercial invoices quickly and efficiently.
                        With ready-made templates, just enter your product details, buyer and seller information,
                        and export the invoice in various formats for easy cross-border transactions.
                    </p>
                </div>
            </div>

            {/* Suggestions Section */}
            <div className="suggestions-section mt-5">
                <h3 className="suggestions-title text-center">You might also be interested in:</h3>
                <div className="row mt-4">
                    {/* Suggestion 1 - Balance Sheet */}
                    <div className="suggestion-card col-md-4">
                        <img src="https://placehold.co/300x200" alt="Balance Sheet" className="img-fluid" />
                        <h4>Balance Sheet</h4>
                        <p>Download the professionally designed balance sheet template to organize your financial data.</p>
                        <button className="btn btn-secondary">View Template</button>
                    </div>

                    {/* Suggestion 2 - Profit & Loss Statement */}
                    <div className="col-md-4">
                        <img src="https://placehold.co/300x200" alt="Profit & Loss" className="img-fluid" />
                        <h4>Profit & Loss Statement</h4>
                        <p>Summarize revenues, costs, and expenses in this detailed financial statement.</p>
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

export default CommercialInvoicePage;
