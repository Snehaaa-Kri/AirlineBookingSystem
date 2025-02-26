import React from "react";
import { useLocation } from "react-router-dom";

const ShowDetails = () => {
  const location = useLocation();
  const flight = location.state?.flight;

  if (!flight) {
    return <p>No flight details available.</p>;
  }

  return (
    <div className="w-1/2 mx-auto bg-gray-100 rounded-2xl mb-2 p-8 shadow-lg text-gray-900">
      
        <div className="flex justify-start gap-6 items-center">
            <img src={flight.imageURL} alt={flight.airline} className="w-12 h-12 object-cover rounded-lg" />
            <h2 className="text-2xl font-semibold text-center">Flight Details</h2>
        </div>
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold">{flight.airline}</p>
            <p className="text-sm text-gray-600">{flight.flightNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">{flight.time}</p>
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
      <p className="text-xl font-semibold mt-4 text-green-600">Price: {flight.price}</p>
      <p className="text-gray-500 line-through">Old Price: {flight.oldPrice}</p>
    </div>
  );
};

export default ShowDetails;
