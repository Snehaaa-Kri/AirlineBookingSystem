import React, { useState } from "react";

const MyBookings = () => {
  // Dummy booked flights data
  const [bookings, setBookings] = useState([
    {
      id: 1,
      flightName: "Indigo Airlines",
      flightNumber: "6E-204",
      date: "2025-03-10",
      departure: "New Delhi",
      arrival: "Mumbai",
      departureTime: "10:30 AM",
      arrivalTime: "12:45 PM",
      passengerName: "Sneha Kumari",
      age: 22,
      gender: "Female",
      seatNumber: "12A",
      status: "Confirmed",
    },
    {
      id: 2,
      flightName: "Air India",
      flightNumber: "AI-401",
      date: "2025-03-15",
      departure: "Bangalore",
      arrival: "Chennai",
      departureTime: "4:00 PM",
      arrivalTime: "5:15 PM",
      passengerName: "Rudraksh Singh",
      age: 21,
      gender: "Male",
      seatNumber: "7C",
      status: "Confirmed",
    },
  ]);

  // Function to cancel a ticket
  const cancelTicket = (id) => {
    setBookings(bookings.filter((booking) => booking.id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-gray-600">No bookings available.</p>
      ) : (
        <div className="space-y-6 w-3/4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">{booking.flightName}</h3>
              <p className="text-sm text-gray-500">{booking.flightNumber}</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
                <p>
                  <strong>Passenger:</strong> {booking.passengerName} ({booking.gender}, {booking.age} years)
                </p>
                <p>
                  <strong>Date:</strong> {booking.date}
                </p>
                <p>
                  <strong>From:</strong> {booking.departure} ({booking.departureTime})
                </p>
                <p>
                  <strong>To:</strong> {booking.arrival} ({booking.arrivalTime})
                </p>
                <p>
                  <strong>Seat Number:</strong> {booking.seatNumber}
                </p>
                <p>
                  <strong>Status:</strong> <span className="text-green-600">{booking.status}</span>
                </p>
              </div>
              <button
                onClick={() => cancelTicket(booking.id)}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
              >
                Cancel Ticket
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
