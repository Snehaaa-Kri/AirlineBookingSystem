import React from "react";

const Sidebar = () => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg p-4">
      {/* Flight Tickets Section */}
      <div className="border-b pb-4 bg-gray-100 rounded ">
        <h2 className="text-md pt-2 pl-3 font-semibold flex items-center gap-2">
          ✈️ Your Flight Tickets
        </h2>

        {/* Departure Flight */}
        <div className="mt-4 p-3 bg-gray-100 rounded-lg">
          <p className="text-gray-600 text-sm">Departure Flight</p>
          <p className="text-sm font-semibold">Thu, 06 Jul 2023</p>
            <hr className="text-white mt-2"/>
          <div className="mt-2 flex items-center gap-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/000/620/372/original/aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration.jpg"
              alt="Airline"
              className="w-10 h-10 object-contain"
            />
            <div>
              <p className="text-sm font-semibold">Indigo</p>
              <p className="text-xs text-gray-500">IND 2328</p>
            </div>
            <a href="#" className="ml-auto text-blue-500 text-sm">
              Details
            </a>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            New Delhi (NDLI) ➝ Patna (PTN)
          </p>
          <p className="text-xs text-gray-500">05:00 - 07:50 | 1h 50m</p>

          <button className="mt-3 w-full bg-black hover:bg-gray-800 font-medium text-white text-sm py-2 rounded-lg">
            CHANGE DEPARTURE FLIGHT
          </button>
        </div>

        {/* Return Flight */}
        <div className="mt-4 p-3 bg-blue-100 border-l-4 border-blue-600 flex justify-start items-center gap-2">
            <img className="h-12 w-12" src="https://images.vexels.com/media/users/3/169652/raw/4c313a1615825f0554127f072db5faaa-airline-logo.jpg" alt="" />
            <div className="">
                <p className="text-gray-600 text-sm">Return Flight</p>
                <p className="text-sm font-semibold">Fri, 07 Jul 2023</p>
            </div>
        </div>

        {/* Subtotal */}
        <div className="flex justify-between items-center text-sm mt-2 px-2 font-semibold text-gray-700">
            <p>Sub Total</p>
            <p className=" text-right  ">
                <span className="text-yellow-600">Rs 2,723.000</span> / pax
            </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mt-4 bg-gray-100 rounded px-3 py-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h3 className="text-lg font-semibold">🔍 Filter</h3>
          <button className="text-blue-500 text-sm">Reset</button>
        </div>

        {/* Transit Options */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700">Transit</h4>
          <div className="mt-2 space-y-2 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> Direct
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> 1 Transit
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> 2+ Transits
            </label>
          </div>
        </div>

        {/* Time Filter */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700">Time</h4>
          <div className="mt-2 space-y-2 text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> 00:00 - 06:00
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> 06:00 - 10:00
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> 10:00 - 14:00
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> 14:00 - 20:00
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> 20:00 - 00:00
            </label>
            
          </div>
          
          <button className="mt-3 w-full bg-black hover:bg-gray-800 font-medium text-white text-sm py-2 rounded-lg">
            APPLY FILTERS
          </button>
        </div> 
           
      </div>
    </div>
  );
};

export default Sidebar;
