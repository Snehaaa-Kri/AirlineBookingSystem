import React from "react";
import { useNavigate } from "react-router-dom";

function ListCard({ flight , formData}) {
  const navigate = useNavigate();
  const handleBookFlight = () => {
    navigate("/flight-detail", { state: { 
        flight: flight,
        formData: formData
      } 
    }); // Pass the flight directly
  };

  console.log("ListCard flight: ", flight);
  console.log("List Card form data: ", formData);


  //duration calculation  ***needs to be corrected
  const departure = new Date(flight.departure_date);
  const arrival = new Date(flight.arrival_date);

    // Difference in milliseconds
    const diffMs = arrival - departure;
    
    // Convert milliseconds to total minutes
    const diffMins = Math.floor(diffMs / 60000);
    
    // Hours and minutes
    const hours = Math.floor(diffMins / 60);
    const minutes = diffMins % 60;
    
    const duration = `${hours}h ${minutes}m`;


    //price
    const oldPrice = (flight.price+flight.price*(5/100))*formData.total_passengers; //5% extra
    const newPrice = flight.price*formData.total_passengers;


  return (
    
    <div className="">
        <div className="border rounded-t-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between bg-white">
            {/* Airline Info */}
            <div className="flex items-center space-x-4">
                {/* flight image //static  */}
                <img src="https://static.vecteezy.com/system/resources/previews/000/620/372/original/aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration.jpg" alt={flight.airline} className="w-12 h-12 object-contain" />
                <div>
                <h3 className="font-semibold text-lg">{flight.airplane_id.name}</h3>
                <p className="text-sm text-gray-500">{flight.flightNumber}</p>
                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded">{flight.airplane_id.status}</span>
                </div>
            </div>

            {/* Flight Timing */}
            <div className="text-center">
                <p className="text-s">{flight.source_airport.city} ➠ {flight.destination_airport.city}</p>
                <p className="text-s">{new Date(flight.arrival_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} ➠ {new Date(flight.departure_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</p>
              {/* <h3> {new Date(flight.arrival_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</h3>
              <h3> {new Date(flight.departure_date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}</h3> */}
                <p className="text-xs text-gray-500">Passenger: {formData.total_passengers}</p>
                <p className="text-xs text-gray-500">{duration} • {flight.coach_type}</p>
            </div>


            {/* Pricing */}
            <div className="text-right">
                <p className="text-lg font-semibold flex flex-col ">
                  ₹{newPrice} 
                  <span className="text-sm text-red-500  line-through">₹{oldPrice}</span>
                </p>
            </div>

        </div>
      {/* Baggage & Facilities */}
      <div className="border rounded-b-lg shadow-md p-4 flex flex-col md:flex-row items-center justify-between bg-white">
        <p><strong>Facilities:</strong>  {flight.baggageAllowance}, {flight.facilities.join(", ")}</p>
        <button onClick={handleBookFlight} className="mt-2 px-8 bg-black text-white hover:bg-gray-800 font-medium text-whittext-sm py-2 rounded-md">
            Book Flight
        </button>
      </div>
    </div>
  );
}

export default ListCard;
