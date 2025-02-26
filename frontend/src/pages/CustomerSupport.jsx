import React from "react";

const CustomerSupport = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Customer Support</h2>

      {/* Contact Details Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-3/4 mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
        <p className="text-gray-700"><strong>Phone:</strong> +91 98765 43210</p>
        <p className="text-gray-700"><strong>Email:</strong> support@airconnect.com</p>
        <p className="text-gray-700"><strong>Live Chat:</strong> Available 24/7 on our website</p>
        <p className="text-gray-700"><strong>Address:</strong> 123, Airport Road, New Delhi, India</p>
      </div>

      {/* FAQs Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-3/4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Frequently Asked Questions (FAQs)</h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold text-gray-800">How can I book a flight?</h4>
            <p className="text-gray-700">
              You can book a flight through our website by selecting your departure and arrival locations, 
              choosing your preferred flight, and making the payment.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">How do I cancel my flight ticket?</h4>
            <p className="text-gray-700">
              You can cancel your ticket through the "My Bookings" section. Select the booking you want to cancel 
              and click the "Cancel Ticket" button.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">Will I get a refund after cancellation?</h4>
            <p className="text-gray-700">
              Yes, refunds are processed based on the airline's cancellation policy. 
              Full refunds may be available for cancellations made within 24 hours of booking.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">Can I modify my booking?</h4>
            <p className="text-gray-700">
              Yes, modifications to your flight date or seat selection can be done through the 
              "My Bookings" section, subject to availability and additional charges.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-800">What happens if my flight is delayed or canceled?</h4>
            <p className="text-gray-700">
              If your flight is delayed or canceled by the airline, you will be notified via email/SMS. 
              You can either reschedule your flight or request a refund.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
