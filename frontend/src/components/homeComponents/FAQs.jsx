import React, { useState } from "react";

const faqs = [
    {
      question: "Does AirConnect charge any hidden fees?",
      answer: "No! We ensure complete transparency with no hidden charges on any of our flights.",
    },
    {
      question: "How does the AirConnect rewards program work?",
      answer: "With every booking, you earn points that can be redeemed for discounts on future flights and exclusive perks.",
    },
    {
      question: "Who can book a flight with AirConnect?",
      answer: "Anyone can book a flight with us! Whether you're traveling for business or leisure, we offer seamless bookings for everyone.",
    },
    {
      question: "What is the booking process like?",
      answer: "Simply choose your destination, select your preferred flight, and confirm your booking in just a few clicks.",
    },
    {
      question: "Does AirConnect offer international flights?",
      answer: "Yes! AirConnect provides both domestic and international flights with top-tier service and comfort.",
    },
    {
      question: "Can I modify or cancel my booking?",
      answer: "Yes, you can modify or cancel your booking through your AirConnect account. Some modifications may have applicable charges.",
    },
    {
      question: "How does AirConnect protect my personal data?",
      answer: "We use advanced encryption and security measures to safeguard all your personal and payment information.",
    },
    {
      question: "How can I contact AirConnect customer support?",
      answer: "Our support team is available 24/7 via phone, email, and live chat to assist you with any inquiries.",
    },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-12 p-6">
      <h2 className="text-center text-3xl font-bold text-gray-900 mb-8">
        In case you <br /> missed anything.
      </h2>
      <div className="divide-y divide-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              className="flex justify-between w-full text-lg text-gray-900 font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="text-gray-600 mt-2 text-sm">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQs;
