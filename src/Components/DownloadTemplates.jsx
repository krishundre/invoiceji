import React from 'react';
import './DownloadTemplates.css';
import { LuHardDriveDownload } from "react-icons/lu";

const DownloadTemplates = () => {
  return (
    <div className="container-fluid download-templates px-5">
      <h2 className="text-center section-heading"><strong>Download Templates</strong></h2>

      {/* Balance Sheet */}
      <div className="row align-items-center template-item">
        <div className="col-md-6 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="Balance Sheet" className="img-fluid" />
        </div>
        <div className="col-md-6 text-section">
          <h3 className="template-heading">Balance Sheet</h3>
          <hr />
          <p>A balance sheet is a crucial financial document that summarizes a company’s assets, liabilities, and equity at a specific point in time. It helps you understand your business’s net worth and overall financial stability. Our template is perfect for startups, SMEs, and accountants to keep track of finances with ease and clarity.</p>
          <h5 className="download-title"><strong>Downloadable in:</strong></h5>
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">View More <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>

      {/* Profit & Loss Statement */}
      <div className="row align-items-center template-item">
        <div className="col-md-6 order-md-2 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="Profit & Loss" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1 text-section">
          <h3 className="template-heading">Profit & Loss Statement</h3>
          <hr />
          <p>This document outlines your revenue, expenses, and net profit or loss over a specific period. It's essential for assessing the financial health of your business, making budget forecasts, and preparing for tax filing. Our P&L template is crafted to give a clear snapshot of your business’s performance.</p>
          <h5 className="download-title"><strong>Downloadable in:</strong></h5>
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">View More<LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>

      {/* GST Bill Format */}
      <div className="row align-items-center template-item">
        <div className="col-md-6 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="GST Bill Format" className="img-fluid" />
        </div>
        <div className="col-md-6 text-section">
          <h3 className="template-heading">GST Bill Format</h3>
          <hr />
          <p>This template is designed to help businesses issue GST-compliant invoices with ease. It includes fields for GSTIN, HSN/SAC codes, tax breakdowns (CGST, SGST, IGST), and more—ensuring you're aligned with Indian tax regulations. Perfect for freelancers, retailers, and service providers.</p>
          <h5 className="download-title"><strong>Downloadable in:</strong></h5>
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">View More <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>

      {/* Commercial Invoice */}
      <div className="row align-items-center template-item">
        <div className="col-md-6 order-md-2 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="Commercial Invoice" className="img-fluid" />
        </div>
        <div className="col-md-6 order-md-1 text-section">
          <h3 className="template-heading">Commercial Invoice</h3>
          <hr />
          <p>Use this professional commercial invoice template for international shipping and cross-border transactions. It contains fields for exporter/importer details, product descriptions, quantities, declared values, and shipping terms—meeting customs and legal requirements globally.</p>
          <h5 className="download-title"><strong>Downloadable in:</strong></h5>
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">View More <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>

      {/* Income Statement */}
      <div className="row align-items-center template-item">
        <div className="col-md-6 d-flex justify-content-center">
          <img src="https://placehold.co/500x300" alt="Income Statement" className="img-fluid" />
        </div>
        <div className="col-md-6 text-section">
          <h3 className="template-heading">Income Statement</h3>
          <hr />
          <p>An income statement is used to report a company’s financial performance over a specific accounting period. It shows revenue, expenses, and profit, giving valuable insights for investors and business owners. Our template is simple to use and helps track profitability over months or quarters.</p>
          <h5 className="download-title"><strong>Downloadable in:</strong></h5>
          <ul className="download-formats">
            <li>PDF</li>
            <li>Google Sheets</li>
            <li>Excel</li>
            <li>Word</li>
          </ul>
          <button className="btn w-auto btn-primary download-btn d-flex align-items-center">View More <LuHardDriveDownload className='ms-2' /></button>
        </div>
      </div>
    </div>
  );
};

export default DownloadTemplates;
