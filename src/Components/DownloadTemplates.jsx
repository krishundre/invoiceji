import React from 'react';
import './DownloadTemplates.css';
import { LuHardDriveDownload } from "react-icons/lu";

const DownloadTemplates = () => {
  return (
    <div className="container-fluid download-templates px-5">
      <h2 className="text-center section-heading"><bold>Download Templates</bold></h2>
      <div className="row align-items-center template-item">
        <div className="col-md-6 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="Balance Sheet" className="img-fluid" />
        </div>
        <div className="col-md-6 text-section">
          <h3 className="template-heading">Balance Sheet</h3>
          <hr />
          <p>Download our professionally designed balance sheet template to organize your financial data.</p>
          <h5 className="download-title"><bold>Downloadable in:</bold></h5>

          {/* List of download formats */}
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul><button className="btn w-auto btn-primary download-btn d-flex align-items-center">Download <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>

      <div className="row align-items-center template-item">
        <div className="col-md-6 order-md-2 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="Profit & Loss" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1 text-section">
          <h3 className="template-heading">Profit & Loss Statement</h3>
          <hr />
          <p>Get a comprehensive Profit & Loss statement template to track your business performance.</p>
          <h5 className="download-title"><bold>Downloadable in:</bold></h5>

          {/* List of download formats */}
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">Download <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>

      <div className="row align-items-center template-item">
        <div className="col-md-6 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="GST Bill Format" className="img-fluid" />
        </div>
        <div className="col-md-6 text-section">
          <hr />
          <h3 className="template-heading">GST Bill Format</h3>
          <hr />
          <p>Download a GST-compliant bill format that ensures proper tax documentation.</p>
          {/* Title for Download Formats */}
          <h5 className="download-title"><bold>Downloadable in:</bold></h5>

          {/* List of download formats */}
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">Download <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>

      <div className="row align-items-center template-item">
        <div className="col-md-6 order-md-2 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="Commercial Invoice" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1 text-section">
          <h3 className="template-heading">Commercial Invoice</h3>
          <hr />
          <p>Get a professional commercial invoice template suitable for international trade.</p>
          {/* Title for Download Formats */}
          <h5 className="download-title"><bold>Downloadable in:</bold></h5>

          {/* List of download formats */}
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">Download <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>

      <div className="row align-items-center template-item">
        <div className="col-md-6 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="Income Statement" className="img-fluid" />
        </div>
        <div className="col-md-6 text-section">
          <h3 className="template-heading">Income Statement</h3>
          <hr />
          <p>Download an income statement template to calculate your profits and losses accurately.</p>
          {/* Title for Download Formats */}
          <h5 className="download-title"><bold>Downloadable in:</bold></h5>

          {/* List of download formats */}
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">Download <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>
    </div>
  );
};

export default DownloadTemplates;
