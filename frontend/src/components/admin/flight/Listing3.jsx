import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Search } from "lucide-react";
import {axiosInstance} from '../../../utils/axiosInstance.jsx'
import { toast } from "react-hot-toast";

function Listing3() {
  const [flights, setFlights] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFlights = async () => {
    try {
      console.log("Flight fetching started....")
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get(`/v1/flight/getAllFlights`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setFlights(response.data.data);
      
      setLoading(false);
      console.log(response.data.data);
      console.log("Flight fetching ended....")
    } catch (err) {
      toast.error("Error in fetching flights!");
      setError("Failed to fetch flights");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);
  useEffect(() => {
    console.log(flights);
  }, [flights]);

  const filteredFlights = flights.filter((flight) => {
    const searchTerm = search.toLowerCase();
    return (
      flight?.flightNumber?.toLowerCase().includes(searchTerm) ||
      flight?.source_airport?.name.toLowerCase().includes(searchTerm) ||
      flight?.destination_airport?.name.toLowerCase().includes(searchTerm) ||
      flight?.airplane_id?.name.toLowerCase().includes(searchTerm) 
    );
  });

  return (
    <div className="py-6 px-10 bg-white rounded-xl shadow-md min-h-[78vh]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">All Flights</h2>
        <div className="relative mr-3 w-[50%]">
          <input
            type="text"
            placeholder="Search flights..."
            className="border shadow-sm rounded-md px-5 py-[0.3rem] text-sm pl-10 outline-none hover:bg-gray-50 w-[100%]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <div className="">
        <button
          className="bg-black py-[0.3rem] px-4 text-white rounded-full hover:bg-gray-700"
        >Add New</button>
        </div>
      </div>

      <div className="overflow-x-auto min-h-[55.5vh]">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-700 bg-gray-100">
            <tr>
              <th className="px-4 py-2">Flight No</th>
              <th className="px-4 py-2">Airplane</th>
              <th className="px-4 py-2">Source</th>
              <th className="px-4 py-2">Destination</th>
              <th className="px-4 py-2">Departure</th>
              <th className="px-4 py-2">Arrival</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2">Price/Seat</th>
              <th className="px-4 py-2">Available Seats</th>
              <th className="px-4 py-2">Baggage</th>
              <th className="px-4 py-2">Facilities</th>
            </tr>
          </thead>
          <tbody>
            {filteredFlights.map((flight, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{flight.flightNumber}</td>
                <td className="px-4 py-2">{flight.airplane_id?.name}</td>
                <td className="px-4 py-2">{flight.source_airport?.name}</td>
                <td className="px-4 py-2">{flight.destination_airport?.name}</td>
                <td className="px-4 py-2">{new Date(flight.departure_date).toLocaleString()}</td>
                <td className="px-4 py-2">{new Date(flight.arrival_date).toLocaleString()}</td>
                <td className="px-4 py-2">{flight.duration}</td>
                <td className="px-4 py-2">₹{flight.price}</td>
                <td className="px-4 py-2">{flight.availableSeats}</td>
                <td className="px-4 py-2">{flight.baggageAllowance}</td>
                <td className="px-4 py-2">
                  {flight.facilities?.join(", ") || "None"}
                </td>
              </tr>
            ))}
            {filteredFlights.length === 0 && (
              <tr>
                <td colSpan={11} className="text-center py-6 text-gray-400">
                  No flights found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Listing3;
