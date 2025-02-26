import React, { useState } from "react";
import { FaUser, FaChair, FaPlus, FaVenusMars } from "react-icons/fa";

const AddPassenger = () => {
  const [passengers, setPassengers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [seatPreference, setSeatPreference] = useState("Window");

  const addPassenger = () => {
    if (name && age) {
      setPassengers([...passengers, { name, age, gender, seatPreference }]);
      setName("");
      setAge("");
      setGender("Male");
      setSeatPreference("Window");
    }
  };

  return (
    <div className="flex justify-center items-center mb-2">
        <div className="w-1/2 text-center bg-gray-100 rounded-2xl p-8 shadow-lg text-gray-900">
        <h2 className="text-2xl font-semibold text-center mb-6">Added Passengers</h2>
        {passengers.length > 0 ? (
            passengers.map((passenger, index) => (
            <div key={index} className="bg-gray-200 p-4 rounded-lg shadow mb-4">
                <p className="font-semibold">{passenger.name}, {passenger.age} years, {passenger.gender}</p>
                <p className="text-sm text-gray-600">Seat Preference: {passenger.seatPreference}</p>
            </div>
            ))
        ) : (
            <p className="text-gray-600 text-center">No passengers added</p>
        )}

        <h2 className="text-2xl font-semibold text-center mb-6">Add New Passenger</h2>
        <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
            <FaUser className="text-gray-700" />
            <input
                type="text"
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 border-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div className="flex items-center space-x-2">
                <FaVenusMars className="text-gray-700" />
                <input
                    type="number"
                    placeholder="Enter Age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 border-none focus:ring-2  focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <FaVenusMars className="text-gray-700" />
                <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 border-none focus:ring-2  focus:ring-blue-500"
                >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
            <FaChair className="text-gray-700" />
            <select
                value={seatPreference}
                onChange={(e) => setSeatPreference(e.target.value)}
                className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 border-none focus:ring-2 focus:ring-blue-500"
            >
                <option>Window</option>
                <option>Aisle</option>
                <option>Middle</option>
            </select>
            </div>
        </div>
        <button
            onClick={addPassenger}
            className="px-10 flex justify-center ml-[33%] mt-6 items-center py-2 bg-black text-white rounded-full font-medium transition hover:bg-gray-800"
        >
            <FaPlus className="mr-2" /> Add New Passenger
        </button>
        </div>
    </div>
  );
};

export default AddPassenger;