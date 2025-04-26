import React, { useEffect, useState } from "react";
import ListCard from "./ListCard";

function Lists({ searchedFlight, formData }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [flights, setFlights] = useState([]);
  const flightsPerPage = 3;

  console.log("List page searched flights: ", searchedFlight?.data);
  console.log("List page form data: ", formData);
  
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      if (Array.isArray(searchedFlight?.data)) {
        setFlights(searchedFlight?.data);
      } else {
        setFlights([]); // fallback to empty array if not an array
      }
      setLoading(false);
    }, 1000);
  
    return () => clearTimeout(timer);
  }, [searchedFlight]);

  const handleLoadMore = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + flightsPerPage >= flights.length ? 0 : prevIndex + flightsPerPage
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-6 w-full h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Searched Flights</h2>

      {loading ? (
        <div className="text-center text-blue-600 font-semibold">Loading flights...</div>
      ) : flights.length === 0 ? (
        <div className="text-center text-red-600 font-semibold">No flights found.</div>
      ) : (
        <>
          <div className="space-y-4">
            {flights.slice(currentIndex, currentIndex + flightsPerPage).map((flight, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <ListCard flight={flight} formData={formData} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Lists;
