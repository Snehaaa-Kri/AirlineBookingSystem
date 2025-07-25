import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {axiosInstance} from "../utils/axiosInstance.jsx";
import { toast } from "react-hot-toast";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight, formData, passengerData } = location?.state || {};

  const [isLoading, setIsLoading] = useState(false);

  const createBooking = async () => {
    if (!flight || !passengerData || passengerData.length === 0) {
      toast.error("Missing booking details!");
      return;
    }

    try {
      setIsLoading(true);
      toast.success("Confirming your booking...");
      const token = localStorage.getItem("token");

      const response = await axiosInstance.post(
        `/v1/booking/create`,
        {
          flight_id: flight._id,
          passengers: passengerData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      toast.dismiss();
      toast.success("Booking confirmed!");
      navigate("/mybookings", {
        state: { bookingDetails: response.data.booking },
      });
    } catch (error) {
      toast.dismiss();
      console.error("Booking failed:", error.response?.data || error.message);
      toast.error(error?.response?.data?.message || "Booking failed. Try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center bg-gray-50 p-6">
      <div className="w-1/2 flex justify-between items-center flex-col py-[8.3rem] bg-white rounded-2xl p-8 shadow-lg">
        <div>
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Booking Confirmation 🎉
          </h2>
          <p className="text-center text-gray-700">
            ✅ Please confirm your booking by clicking below.
          </p>
        </div>

        <button 
          onClick={createBooking}   // 👈 is button pe ab API hit hogi
          className="w-[60%] mt-[7.5rem] bg-green-600 text-white py-2 rounded-md">
            Confirm Booking
        </button>
      </div>
    </div>
  );
};


export default BookingConfirmation;



// import React from "react";
// import { useLocation } from "react-router-dom";

// const BookingConfirmation = () => {
//   const location = useLocation();
//   const { flight, passengers, paymentMethod } = location.state || {};

//   if (!flight || !passengers) {
//     return <p className="text-center text-gray-700">No booking details available</p>;
//   }

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
//       <div className="w-1/2 bg-white rounded-2xl p-8 shadow-lg">
//         <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
//           Booking Confirmation 🎉
//         </h2>

//         {/* Flight Details */}
//         <div className="border-b pb-4">
//           <h3 className="text-lg font-semibold text-gray-700">Flight Details</h3>
//           <p className="text-gray-600">{flight.airline} - {flight.flightNumber}</p>
//           <p className="text-gray-600">{flight.departure} → {flight.arrival}</p>
//           <p className="text-gray-600">
//             {flight.departureTime} - {flight.arrivalTime} ({flight.duration})
//           </p>
//           <p className="text-gray-600 font-bold">Total Price: {flight.price}</p>
//         </div>

//         {/* Passenger Details */}
//         <div className="mt-4 border-b pb-4">
//           <h3 className="text-lg font-semibold text-gray-700">Passengers</h3>
//           {passengers.map((passenger, index) => (
//             <div key={index} className="bg-gray-100 p-3 rounded-lg mt-2">
//               <p className="text-gray-700"><strong>Name:</strong> {passenger.name}</p>
//               <p className="text-gray-700"><strong>Age:</strong> {passenger.age}</p>
//               <p className="text-gray-700"><strong>Seat Preference:</strong> {passenger.seatPreference}</p>
//             </div>
//           ))}
//         </div>

//         {/* Payment Details */}
//         <div className="mt-4">
//           <h3 className="text-lg font-semibold text-gray-700">Payment Method</h3>
//           <p className="text-gray-600">{paymentMethod}</p>
//         </div>

//         <p className="text-center text-lg font-semibold text-green-600 mt-6">
//           ✅ Your booking has been confirmed! Safe travels! ✈️
//         </p>
//       </div>
//     </div>
//   );
// };

// export default BookingConfirmation;
