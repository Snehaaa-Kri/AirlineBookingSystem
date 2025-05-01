import React, { useState } from "react";
import toast from "react-hot-toast";

const CustomerSupport = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    // Simulate API call
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" }); // Reset form
  };
  
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-4 md:p-6 ">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-3xl p-4 md:p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center">Customer Support</h1>
        <p className="text-gray-600 text-center mb-10">
          We're here to help! Reach out to us anytime, and we’ll happily answer your questions.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Contact Options */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-blue-600">📞</span>
              <div>
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-gray-500">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-green-600">📧</span>
              <div>
                <h3 className="font-semibold text-lg">Email Us</h3>
                <p className="text-gray-500">support@airconnect.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-2xl text-yellow-600">❓</span>
              <div>
                <h3 className="font-semibold text-lg">FAQs</h3>
                <p className="text-gray-500">Browse common questions and answers.</p>
              </div>
            </div>
          </div>

          {/* Support Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Sneha Kumari"
                className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="How can we help you?"
                className="mt-1 w-full px-4 py-2 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl font-medium transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>


      </div>
        {/* FAQs Section */}
        <div className="mt-6 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl shadow-md w-full mx-auto">
          <h3 className="text-3xl font-bold text-blue-800 mb-6 text-center">Frequently Asked Questions (FAQs)</h3>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7M5 12H3m0 0h2m-2 0a2 2 0 112 2h8a2 2 0 112-2M5 12h2M21 12a2 2 0 11-2-2h-8a2 2 0 112 2h8a2 2 0 11-2 2H5" />
                </svg>
                <span>How can I book a flight?</span>
              </h4>
              <p className="text-gray-700 mt-2 text-lg ml-9">
                You can book a flight through our website by selecting your departure and arrival locations,
                choosing your preferred flight, and making the payment.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
                <span>How do I cancel my flight ticket?</span>
              </h4>
              <p className="text-gray-700 mt-2 text-lg ml-9">
                You can cancel your ticket through the "My Bookings" section. Select the booking you want to cancel
                and click the "Cancel Ticket" button.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8z" />
                </svg>
                <span>Will I get a refund after cancellation?</span>
              </h4>
              <p className="text-gray-700 mt-2 text-lg ml-9">
                Yes, refunds are processed based on the airline's cancellation policy.
                Full refunds may be available for cancellations made within 24 hours of booking.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h6M6 15h6M6 18h6" />
                </svg>
                <span>Can I modify my booking?</span>
              </h4>
              <p className="text-gray-700 mt-2 text-lg ml-9">
                Yes, modifications to your flight date or seat selection can be done through the
                "My Bookings" section, subject to availability and additional charges.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="transition-transform transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>What happens if my flight is delayed or canceled?</span>
              </h4>
              <p className="text-gray-700 mt-2 text-lg ml-9">
                If your flight is delayed or canceled by the airline, you will be notified via email/SMS.
                You can either reschedule your flight or request a refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerSupport;
