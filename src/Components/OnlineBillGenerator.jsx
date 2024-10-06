import React, { useState } from 'react';
import './OnlineBillGenerator.css';
import { FaFilePdf } from 'react-icons/fa';
import { FaFileArrowDown } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";


const OnlineBillGenerator = () => {
    const [items, setItems] = useState([{ description: "", unitCost: "", quantity: "", amount: 0 }]);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [shippingFee, setShippingFee] = useState(0);
    const [logo, setLogo] = useState(null);

    // Handle adding new item row
    const handleAddItem = () => {
        setItems([...items, { description: "", unitCost: "", quantity: "", amount: 0 }]);
    };

    // Handle file upload
    const handleLogoUpload = (e) => {
        setLogo(URL.createObjectURL(e.target.files[0]));
    };

    // Calculate amount for each row
    const handleItemChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;

        // Calculate amount (Unit Cost * Quantity)
        if (field === "unitCost" || field === "quantity") {
            const unitCost = parseFloat(newItems[index].unitCost) || 0;
            const quantity = parseFloat(newItems[index].quantity) || 0;
            newItems[index].amount = unitCost * quantity;
        }

        setItems(newItems);
        calculateSubtotal(newItems);  // Update subtotal when items change
    };

    // Calculate subtotal
    const calculateSubtotal = (items) => {
        const subtotalValue = items.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
        setSubtotal(subtotalValue);
    };

    // Calculate total
    const calculateTotal = () => {
        const taxValue = parseFloat(tax) || 0;
        const discountValue = parseFloat(discount) || 0;
        const shippingValue = parseFloat(shippingFee) || 0;
        return subtotal + (subtotal * taxValue / 100) - discountValue + shippingValue;
    };

    return (
        <div className="container bill-generator">
            {/* Invoice and Company Section */}
            <div className="section-bg">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Invoice Details</h3>
                        <div className="row">
                            <div className="col-sm-6">
                                <label>Invoice Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col-sm-6">
                                <label>Purchase Order</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-sm-6">
                                <label>Invoice Date</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-sm-6">
                                <label>Due Date</label>
                                <input type="date" className="form-control" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <h3>Company Details</h3>
                        <textarea className="form-control mb-3" rows="3" placeholder="Enter company details here"></textarea>
                        <h4>Upload Logo</h4>
                        <input
                            type="file"
                            className="form-control-file mb-3"
                            accept=".png, .jpg, .jpeg, .gif"
                            onChange={handleLogoUpload}
                        />
                        {logo && <img src={logo} alt="Company Logo" className="logo-preview" />}

                    </div>
                </div>
            </div>

            {/* Bill To Section */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <h3>Bill To</h3>
                    <textarea className="form-control" rows="3" placeholder="Enter client details"></textarea>
                </div>
            </div>

            {/* Items Table */}
            <div className="items-section section-bg mt-4">
                <h3>Items</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Unit Cost</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td><input type="text" className="form-control" placeholder="Description" value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} /></td>
                                <td><input type="number" className="form-control" placeholder="Unit Cost" value={item.unitCost} onChange={(e) => handleItemChange(index, 'unitCost', e.target.value)} /></td>
                                <td><input type="number" className="form-control" placeholder="Quantity" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} /></td>
                                <td><input type="text" className="form-control" placeholder="Amount" value={item.amount} disabled /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <button className="btn btn-custom" onClick={handleAddItem}><IoMdAdd /></button>
            </div>

            {/* Summary Section */}
            <div className="row mt-4">
                <div className="col-md-6">
                    <h3>Note/Payment Terms</h3>
                    <textarea className="form-control" rows="3" placeholder="Enter payment terms"></textarea>
                </div>
                <div className="col-md-6 summary-section">
                    <h3>Summary</h3>
                    <div className="row">
                        <div className="col-sm-6">
                            <label>Subtotal</label>
                            <input type="text" className="form-control" value={subtotal.toFixed(2)} disabled />
                        </div>
                        <div className="col-sm-6">
                            <label>Tax (%)</label>
                            <input type="number" className="form-control" value={tax} onChange={(e) => setTax(e.target.value)} />
                        </div>
                        <div className="col-sm-6 mt-2">
                            <label>Discount</label>
                            <input type="text" className="form-control" value={discount} onChange={(e) => setDiscount(e.target.value)} />
                        </div>
                        <div className="col-sm-6 mt-2">
                            <label>Shipping Fee</label>
                            <input type="text" className="form-control" value={shippingFee} onChange={(e) => setShippingFee(e.target.value)} />
                        </div>
                        <div className="col-sm-12 mt-2">
                            <label>Total</label>
                            <input type="text" className="form-control" value={calculateTotal().toFixed(2)} disabled />
                        </div>
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <div className="text-center mt-5 d-flex justify-content-center">
                <button className="btn btn-download w-auto mx-2">
                    Generate & Download Invoice<FaFilePdf className='ms-2' />
                </button>
                <button className="btn btn-download w-auto mx-2 btn-disabled border" disabled>
                    Download in Other Formats <FaFileArrowDown className='ms-2' />
                </button>
            </div>
        </div>
    );
};

export default OnlineBillGenerator;
