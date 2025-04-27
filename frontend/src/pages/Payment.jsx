import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const {flight, formData, passengerData} = location?.state || {}
  console.log(flight, " and ", formData," and ",passengerData)
  const priceToPay = flight?.price*formData?.total_passengers;
  console.log("Price to pay: ", priceToPay);

  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div className="max-w-3xl mx-auto p-6 min-h-[75.8vh] flex flex-col justify-center items-center">
        {/* Top Content */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Complete Your Booking</h1>
          <p className="text-center text-gray-600 mb-4">
            You're just one step away from confirming your flight. Please review the details and proceed with the payment.
          </p>

          {/* Step Indicator */}
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-700">Flight Selected</span>
            </div>
            <div className="mx-2 text-gray-400">→</div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-700">Passenger Details</span>
            </div>
            <div className="mx-2 text-gray-400">→</div>
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-yellow-400 mr-2"></div>
              <span className="text-sm font-semibold text-gray-800">Payment</span>
            </div>
          </div>

          {/* Short Reminder */}
          <p className="text-center text-sm text-red-500 mb-2">
            Make sure your payment details are correct to avoid any booking issues.
          </p>
          <p className="text-center text-xs text-gray-400">
            All transactions are secure and encrypted.
          </p>
        </div>

        {/* Amount and Payment Section */}
        <p className="text-xl font-semibold text-center mb-6 text-gray-700">
          Amount to be Paid: <span className="font-mono text-red-700">₹{priceToPay}</span>
        </p>
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
          <option value="bank_transfer">Bank Transfer</option>
        </select>

        {/* Payment Sections */}
        {paymentMethod === "credit_card" && <CreditCardPayment navigate={navigate} flight={flight} formData={formData} passengerData={passengerData} />}
        {paymentMethod === "debit_card" && <DebitCardPayment navigate={navigate} flight={flight} formData={formData} passengerData={passengerData} />}
        {paymentMethod === "google_pay" && <GooglePayPayment navigate={navigate} flight={flight} formData={formData} passengerData={passengerData}/>}
        {paymentMethod === "bank_transfer" && <BankTransferPayment navigate={navigate} flight={flight} formData=    {formData} passengerData={passengerData} />}
    </div>

  );
};

export default Payment;

/* Credit Card Payment Section */
const CreditCardPayment = ({ navigate, flight, formData, passengerData }) => (
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
        navigate("/booking-confirmation", { state: { flight, formData, passengerData } });
      }}
      className="w-full bg-green-600 text-white py-2 rounded-md"
    >
      Confirm Transfer
    </button>
  </div>
);

/* Debit Card Payment Section */
const DebitCardPayment = ({ navigate, flight, formData, passengerData }) => (
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
        navigate("/booking-confirmation", { state: { flight, formData, passengerData } });
      }}
      className="w-full bg-green-600 text-white py-2 rounded-md"
    >
      Confirm Transfer
    </button>
  </div>
);

/* Google Pay Payment Section */
const GooglePayPayment = ({ navigate, flight, formData, passengerData }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/888/888857.png" alt="Google Pay" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Google Pay</h3>
    <button 
      onClick={() => {
        navigate("/booking-confirmation", { state: { flight, formData, passengerData } });
      }}
      className="w-full bg-green-600 text-white py-2 rounded-md"
    >
      Confirm Transfer
    </button>
  </div>
);


/* Bank Transfer Payment Section */
const BankTransferPayment = ({ navigate, flight, formData, passengerData }) => (
  <div className="p-4 bg-gray-100 rounded-lg shadow">
    <img src="https://cdn-icons-png.flaticon.com/512/3061/3061570.png" alt="Bank Transfer" className="w-16 mx-auto mb-4" />
    <h3 className="text-lg font-semibold text-center mb-4">Bank Transfer Details</h3>
    <p className="text-center text-gray-700 mb-2">Account Number: 1234567890</p>
    <p className="text-center text-gray-700 mb-4">Bank Name: XYZ Bank</p>
    <button 
      onClick={() => {
        navigate("/booking-confirmation", { state: { flight, formData, passengerData } });
      }}
      className="w-full bg-green-600 text-white py-2 rounded-md"
    >
      Confirm Transfer
    </button>

  </div>
);
