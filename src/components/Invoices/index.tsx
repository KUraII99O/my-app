import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Invoice = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { invoice } = location.state || {}; // Add a fallback

    // If no invoice data is passed, redirect back to the sign-in page
    if (!invoice) {
        navigate('/sign-in');
        return null;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Invoice</h2>
            <div className="border border-gray-400 p-4 rounded shadow-md">
                <p><strong>Invoice ID:</strong> {invoice.id}</p>
                <p><strong>Plan ID:</strong> {invoice.planId}</p>
                <p><strong>Start Date:</strong> {invoice.startDate}</p>
                <p><strong>End Date:</strong> {invoice.endDate}</p>
                <p><strong>Amount:</strong> ${invoice.amount}</p>
            </div>
        </div>
    );
};

export default Invoice;
