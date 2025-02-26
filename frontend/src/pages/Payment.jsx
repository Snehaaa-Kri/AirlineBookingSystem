import React, { useState } from "react";
import { Link } from "react-router-dom";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Choose Payment Mode</h2>
      
      {/* Payment Mode Selection */}
      <select
        className="w-full p-3 border rounded-md mb-6"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="">-- Choose Payment Mode --</option>
        <option value="credit_card">Credit Card</option>
        <option value="debit_card">Debit Card</option>
        <option value="paypal">PayPal</option>
        <option value="google_pay">Google Pay</option>
        <option value="apple_pay">Apple Pay</option>
        <option value="bank_transfer">Bank Transfer</option>
      </select>

      {/* Payment Sections */}
      {paymentMethod === "credit_card" && <CreditCardPayment />}
      {paymentMethod === "debit_card" && <DebitCardPayment />}
      {paymentMethod === "paypal" && <PayPalPayment />}
      {paymentMethod === "google_pay" && <GooglePayPayment />}
      {paymentMethod === "apple_pay" && <ApplePayPayment />}
      {paymentMethod === "bank_transfer" && <BankTransferPayment />}
    </div>
  );
};

export default Payment;

/* Credit Card Payment Section */
const CreditCardPayment = () => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/217/217853.png" alt="Credit Card" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Credit Card Details</h3>
    <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-md mb-3" />
    <div className="flex space-x-3">
      <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border rounded-md" />
      <input type="text" placeholder="CVV" className="w-1/2 p-3 border rounded-md" />
    </div>
    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md">
      <Link to="/booking-confirmation">
        Pay Now
      </Link>
    </button>
  </div>
);

/* Debit Card Payment Section */
const DebitCardPayment = () => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Debit Card" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Debit Card Details</h3>
    <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-md mb-3" />
    <div className="flex space-x-3">
      <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border rounded-md" />
      <input type="text" placeholder="CVV" className="w-1/2 p-3 border rounded-md" />
    </div>
    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md">
      <Link to="/booking-confirmation">
        Pay Now
      </Link>
    </button>
  </div>
);

/* PayPal Payment Section */
const PayPalPayment = () => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/888/888859.png" alt="PayPal" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Pay with PayPal</h3>
    <input type="email" placeholder="PayPal Email" className="w-full p-3 border rounded-md mb-3" />
    <button className="w-full bg-yellow-500 text-white py-2 rounded-md">
      <Link to="/booking-confirmation">
        Continue to PayPal
      </Link>
    </button>
  </div>
);

/* Google Pay Payment Section */
const GooglePayPayment = () => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Pay" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Google Pay</h3>
    <button className="w-full bg-black text-white py-2 rounded-md">
      <Link to="/booking-confirmation">
        Pay with Google Pay
      </Link>
      
    </button>
  </div>
);

/* Apple Pay Payment Section */
const ApplePayPayment = () => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/888/888843.png" alt="Apple Pay" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Apple Pay</h3>
    <button className="w-full bg-black text-white py-2 rounded-md">
      <Link to="/booking-confirmation">
        Pay with Apple Pay
      </Link>
    </button>
  </div>
);

/* Bank Transfer Payment Section */
const BankTransferPayment = () => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/3061/3061570.png" alt="Bank Transfer" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Bank Transfer Details</h3>
    <p className="text-center text-gray-700 mb-2">Account Number: 1234567890</p>
    <p className="text-center text-gray-700 mb-4">Bank Name: XYZ Bank</p>
    <button className="w-full bg-green-600 text-white py-2 rounded-md">
      <Link to="/booking-confirmation">
        Confirm Transfer
      </Link>
    </button>
  </div>
);
