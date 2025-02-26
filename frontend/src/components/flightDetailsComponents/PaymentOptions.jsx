import React, { useState } from "react";

function PaymentOptions() {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="flex justify-center items-center">
        <div className="w-1/2 text-center bg-gray-100 rounded-2xl p-8 shadow-lg text-gray-900">
        {/* Payment Details Section */}
        <h2 className="text-2xl font-semibold text-center mb-6">Payment Details</h2>

        {/* Display Selected Payment Method */}
        <p className="text-lg font-bold text-center mb-4">
            Payment Method: {paymentMethod || "Not Selected"}
        </p>

        {/* Payment Method Selection */}
        <div className="flex flex-col space-y-4">
            <label className="text-gray-700 font-semibold">Select Payment Method:</label>
            <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full px-4 py-3 rounded bg-white border border-gray-300 focus:ring-2 focus:ring-blue-500"
            >
            <option value="">-- Choose Payment Mode --</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Google Pay">Google Pay</option>
            <option value="Apple Pay">Apple Pay</option>
            <option value="Bank Transfer">Bank Transfer</option>
            </select>
        </div>
        </div>
    </div>
  );
}

export default PaymentOptions;
