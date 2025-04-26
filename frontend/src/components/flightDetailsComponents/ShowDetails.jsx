import React from "react";
import { useLocation } from "react-router-dom";

const ShowDetails = ({flight, formData}) => {
  const location = useLocation();
  // const flight = location.state?.flight;

  if (!flight) {
    return <p>No flight details available.</p>;
  }


  const oldPrice = (flight.price+flight.price*(5/100))*formData.total_passengers; //5% extra
  const newPrice = flight.price*formData.total_passengers;

  return (
    <div className="w-1/2 mx-auto bg-gray-100 rounded-2xl mb-2 p-8 shadow-lg text-gray-900">
      
        <div className="flex justify-start gap-6 items-center">
            {/* static  */}
            {/* <img src={flight.imageURL} alt={flight.airline} className="w-12 h-12 object-cover rounded-lg" /> */}
            <img src="https://i.pinimg.com/736x/69/21/a3/6921a359c4189653059b32f5b08cff30.jpg" alt={flight.airline} className="w-12 h-12 object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold text-center">Flight Details</h2>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold">Airline: {flight.airplane_id.airline}</p>
            <p className="text-sm text-gray-600">Flight Number: {flight.flightNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">Arrival Time: {new Date(flight.arrival_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            <p className="text-lg font-bold">Departure Time: {new Date(flight.departure_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
            <p className="text-gray-600">Duration: {flight.duration}</p>
          </div>
        
      </div>
      <p className="text-gray-600">Type: {flight.type}</p>
      <p className="text-gray-600">Baggage: {flight.baggage}</p>
      <p className="text-gray-600">Facilities:</p>
      <ul className="list-disc ml-6 text-gray-600">
        {flight.facilities.map((facility, index) => (
          <li key={index}>{facility}</li>
        ))}
      </ul>
      <p className="text-xl font-semibold mt-4">Price: ₹{newPrice}</p>
      <p className=" line-through text-red-500">Old Price: ₹{oldPrice}</p>
    </div>
  );
};

export default ShowDetails;
