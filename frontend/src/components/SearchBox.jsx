import React from "react";
import { FaPlane, FaHotel, FaCar, FaExchangeAlt, FaUser, FaCalendarAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function SearchBox() {
  return (
    <div className="p-6 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-12 ">
        {/* Tabs: Flights */}
        <div className="flex items-center space-x-6 border-b pb-3">
            <button className="flex items-center space-x-2 text-black font-bold border-b-2 border-black pb-1">
            <FaPlane />
            <span>Flights</span>
            </button>
            <div className="ml-auto text-gray-600 text-sm">🎧 Customer Support</div>
        </div>

        {/* Trip Type and Coach Class */}
        <div className="flex items-center space-x-4 my-4">
            <div className="flex space-x-3">
            <label className="flex items-center space-x-1">
                <input type="radio" name="tripType" defaultChecked />
                <span>One Way</span>
            </label>
            <label className="flex items-center space-x-1">
                <input type="radio" name="tripType" />
                <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-1">
                <input type="radio" name="tripType" />
                <span>Multi-City</span>
            </label>
            </div>
            <select className="ml-auto border p-1 rounded">
            <option>Coach</option>
            <option>Business</option>
            <option>First Class</option>
            </select>
        </div>

        {/* Search Fields */}
        <div className="grid grid-cols-6 gap-3 bg-gray-100 p-4 rounded-lg">
            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">From</label>
            <div className="flex items-center bg-white p-2 rounded">
                <input type="text" placeholder="Origin" className="w-full outline-none" />
                <FaExchangeAlt className="text-gray-500" />
            </div>
            </div>

            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">To</label>
            <div className="flex items-center bg-white p-2 rounded">
                <input type="text" placeholder="Destination" className="w-full outline-none" />
            </div>
            </div>

            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">Depart</label>
            <div className="flex items-center bg-white p-2 rounded">
                <FaCalendarAlt className="text-gray-500" />
                <input type="date" className="w-full outline-none" />
            </div>
            </div>

            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">Return</label>
            <div className="flex items-center bg-white p-2 rounded">
                <FaCalendarAlt className="text-gray-500" />
                <input type="date" className="w-full outline-none" />
            </div>
            </div>

            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">Traveler</label>
            <div className="flex items-center bg-white p-2 rounded">
                <FaUser className="text-gray-500" />
                <input type="number" min="1" defaultValue="1" className="w-full outline-none" />
            </div>
            </div>

            {/* Search Button */}
            <Link to="/listing" className="col-span-1 bg-black text-white rounded-lg flex items-center justify-center mt-5 mx-5 hover:bg-gray-800 transition">
                <FaSearch className="text-lg" />
            </Link>
        </div>

        {/* Fare Type & Links */}
        <div className="flex items-center justify-between text-gray-600 text-sm mt-4">
            <div className="flex space-x-4">
            <label className="flex items-center space-x-1">
                <input type="radio" name="fareType" defaultChecked />
                <span>Regular Fare</span>
            </label>
            <label className="flex items-center space-x-1">
                <input type="radio" name="fareType" />
                <span>Student Fare</span>
            </label>
            </div>
            <div className="flex space-x-6">
            <a href="#" className="underline">✈ My Booking</a>
            <span>© Flight Status</span>
            </div>
        </div>
        </div>
    </div>
  );
}

export default SearchBox;
