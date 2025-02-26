import React from "react";
import { useNavigate } from "react-router-dom";

function ListCard({ flight }) {
  const navigate = useNavigate();
  const handleBookFlight = () => {
    navigate("/flight-detail", { state: { flight } }); // Pass the flight directly
  };

  return (
    <div className="">
        <div className="border rounded-t-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between bg-white">
            {/* Airline Info */}
            <div className="flex items-center space-x-4">
                <img src={flight.imageURL} alt={flight.airline} className="w-12 h-12 object-contain" />
                <div>
                <h3 className="font-semibold text-lg">{flight.airline}</h3>
                <p className="text-sm text-gray-500">{flight.flightNumber}</p>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">{flight.type}</span>
                </div>
            </div>

            {/* Flight Timing */}
            <div className="text-center">
                <h4 className="text-lg font-bold">{flight.time}</h4>
                <p className="text-xs text-gray-500">{flight.duration} • {flight.type}</p>
            </div>


            {/* Pricing */}
            <div className="text-right">
                <p className="text-lg font-semibold text-orange-500">{flight.price} <span className="text-sm text-gray-500 line-through">{flight.oldPrice}</span></p>
                
            </div>

        </div>
      {/* Baggage & Facilities */}
      <div className="border rounded-b-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between bg-white">
        <p><strong>Facilities:</strong>  {flight.baggage}, {flight.facilities.join(", ")}</p>
        <button onClick={handleBookFlight} className="mt-2 px-8 bg-black text-white hover:bg-gray-800 font-medium text-whittext-sm py-2 rounded-md">
            Book Flight
        </button>
      </div>
    </div>
  );
}

export default ListCard;
