import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Payment = ({flight, formData, priceToPay}) => {
  if(!priceToPay) {
    priceToPay = 0;
  }
  console.log("Price to pay: ", priceToPay);

  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Amount to be Paid: ₹{priceToPay}</h2>
      <h2 className="text-xl text-center mb-6">Choose Payment Mode</h2>
      
      {/* Payment Mode Selection */}
      <select
        className="w-full p-3 border rounded-md mb-6"
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
      >
        <option value="">-- Choose Payment Mode --</option>
        <option value="credit_card">Credit Card</option>
        <option value="debit_card">Debit Card</option>
        <option value="google_pay">Google Pay</option>
        <option value="apple_pay">Apple Pay</option>
        <option value="bank_transfer">Bank Transfer</option>
      </select>

      {/* Payment Sections */}
      {paymentMethod === "credit_card" && <CreditCardPayment navigate={navigate} flight={flight} formData={formData} priceToPay={priceToPay} />}
      {paymentMethod === "debit_card" && <DebitCardPayment navigate={navigate} flight={flight} formData={formData} priceToPay={priceToPay} />}
      {paymentMethod === "google_pay" && <GooglePayPayment navigate={navigate} flight={flight} formData={formData} priceToPay={priceToPay} />}
      {paymentMethod === "bank_transfer" && <BankTransferPayment navigate={navigate} flight={flight} formData={formData} priceToPay={priceToPay} />}

    </div>
  );
};

export default Payment;

/* Credit Card Payment Section */
const CreditCardPayment = ({ navigate, flight, formData, priceToPay }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/217/217853.png" alt="Credit Card" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Credit Card Details</h3>
    <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-md mb-3" />
    <div className="flex space-x-3">
      <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border rounded-md" />
      <input type="text" placeholder="CVV" className="w-1/2 p-3 border rounded-md" />
    </div>
    <button 
      onClick={() => {
        navigate("/booking-confirmation", { state: { flight, formData, priceToPay } });
      }}
      className="w-full bg-green-600 text-white py-2 rounded-md"
    >
      Confirm Transfer
    </button>
  </div>
);

/* Debit Card Payment Section */
const DebitCardPayment = ({ navigate, flight, formData, priceToPay }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Debit Card" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Debit Card Details</h3>
    <input type="text" placeholder="Card Number" className="w-full p-3 border rounded-md mb-3" />
    <div className="flex space-x-3">
      <input type="text" placeholder="MM/YY" className="w-1/2 p-3 border rounded-md" />
      <input type="text" placeholder="CVV" className="w-1/2 p-3 border rounded-md" />
    </div>
    <button 
      onClick={() => {
        navigate("/booking-confirmation", { state: { flight, formData, priceToPay } });
      }}
      className="w-full bg-green-600 text-white py-2 rounded-md"
    >
      Confirm Transfer
    </button>
  </div>
);

/* Google Pay Payment Section */
const GooglePayPayment = ({ navigate, flight, formData, priceToPay }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Pay" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Google Pay</h3>
    <button 
      onClick={() => {
        navigate("/booking-confirmation", { state: { flight, formData, priceToPay } });
      }}
      className="w-full bg-green-600 text-white py-2 rounded-md"
    >
      Confirm Transfer
    </button>
  </div>
);


/* Bank Transfer Payment Section */
const BankTransferPayment = ({ navigate, flight, formData, priceToPay }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/3061/3061570.png" alt="Bank Transfer" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Bank Transfer Details</h3>
    <p className="text-center text-gray-700 mb-2">Account Number: 1234567890</p>
    <p className="text-center text-gray-700 mb-4">Bank Name: XYZ Bank</p>
    <button 
      onClick={() => {
        navigate("/booking-confirmation", { state: { flight, formData, priceToPay } });
      }}
      className="w-full bg-green-600 text-white py-2 rounded-md"
    >
      Confirm Transfer
    </button>

  </div>
);
