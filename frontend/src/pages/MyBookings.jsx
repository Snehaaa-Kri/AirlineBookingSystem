import React, { useState, useEffect } from "react";
import axios from 'axios';

const MyBookings = () => {

  const [flights, setFlights] = useState([]);
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const user = JSON.parse(localStorage.getItem('user'));
        const bookedFlights = user?.booked_flights || [];
        console.log(bookedFlights);
  
        const token = localStorage.getItem('token'); // Assuming token is saved inside localStorage 'user'
  
        const response = await axios.get(
          'http://localhost:4000/api/v1/booking/my-bookings',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
  
        setMyBookings(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching flights: ", error);
      }
    };
  
    fetchMyBookings();
  }, []);
  

  // Function to cancel a ticket
  const cancelTicket = (id) => {
    setFlights(flights.filter((flight) => flight._id !== id));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Bookings</h2>
      {myBookings.length === 0 ? (
        <p className="text-gray-600">No bookings available.</p>
      ) : (
        <div className="space-y-6 w-3/4">
          {myBookings.map((booking) => (
            <div key={booking._id} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900">{booking.flight_id.airplane_id.name}</h3>
              <p className="text-sm text-gray-500">Flight Number: {booking.flight_id.flightNumber}</p>
              <div className="mt-4 grid grid-cols-2 gap-4 text-gray-700">
              <div className="col-span-2">
  <strong>Passengers:</strong>
  <ul className="list-decimal list-inside">
    {booking.passengers.map((passenger, index) => (
      <li key={index}>
        {passenger.name} ({passenger.gender}, {passenger.age} years) - Seat: {Array.isArray(booking.seatNumber) ? booking.seatNumber[index] : booking.seatNumber}
      </li>
    ))}
  </ul>
</div>
                <p>
                  <strong>Date:</strong> {new Date(booking.booking_date).toLocaleString('en-IN', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                  })}
                </p>
                <p>
                  <strong>From:</strong> {booking.flight_id.source_airport.city}
                </p>
                <p>
                  <strong>To:</strong> {booking.flight_id.destination_airport.city}
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
