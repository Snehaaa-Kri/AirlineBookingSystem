import React, { useState, useEffect } from "react";
import { FaUser, FaChair, FaPlus, FaVenusMars } from "react-icons/fa";

const AddPassenger = ({formData}) => {
    const passengersCount = formData?.total_passengers
    const [passenger, setPassenger] = useState({
        "name": "",
        "age": 1,
        "gender": "Male",
        "seatPreference": "Window"
    })

    const [totalPassengers, setTotalPassengers] = useState([]);
    
    
    const changeHandler = (e)=> {
        setPassenger({...passenger, [e.target.name]: e.target.value})

    }

    const addPassenger = () => {
        if (totalPassengers.length >= passengersCount) return; // prevent adding more
        if (passenger.name && passenger.age) {
            setTotalPassengers([...totalPassengers, passenger]);
            setPassenger({
              name: "",
              age: "",
              gender: "Male",
              seatPreference: "Window",
            });
        }
    }
    
    useEffect(() => {
        console.log(totalPassengers)
    })

  return (
    <div className="flex justify-center items-center mb-2">
        <div className="w-1/2 text-center bg-gray-100 rounded-2xl p-8 shadow-lg text-gray-900">
        <h2 className="text-2xl font-semibold text-center mb-6">Added Passengers</h2>
        {totalPassengers.length > 0 ? (
            totalPassengers.map((passenger, index) => (
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
                name="name"
                type="text"
                placeholder="Enter Full Name"
                value={passenger.name}
                onChange={changeHandler}
                className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 border-none focus:ring-2 focus:ring-blue-500"
            />
            </div>
            <div className="flex items-center space-x-2">
                <FaVenusMars className="text-gray-700" />
                <input
                    name="age"
                    type="number"
                    placeholder="Enter Age"
                    value={passenger.age}
                    onChange={changeHandler}
                    className="w-full px-4 py-3 rounded bg-gray-300 text-gray-900 border-none focus:ring-2  focus:ring-blue-500"
                />
            </div>
            <div className="flex items-center space-x-2">
                <FaVenusMars className="text-gray-700" />
                <select
                    name="gender"
                    value={passenger.gender}
                    onChange={changeHandler}
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
                name="seatPreference"
                value={passenger.seatPreference}
                onChange={changeHandler}
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
            disabled={totalPassengers.length >= passengersCount}
            className={`px-10 flex justify-center ml-[33%] mt-6 items-center py-2 rounded-full font-medium transition ${
              totalPassengers.length >= passengersCount
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-black text-white hover:bg-gray-800'
            }`}
            >
            <FaPlus className="mr-2" /> Add New Passenger
        </button>

        {totalPassengers.length >= passengersCount && (
            <>
                <p className="text-red-500 text-center mt-4">All passengers added successfully! </p>
                <p className="text-green-700 text-center mt-4">Make payment to confirm your booking! </p>
            </>
        )}

        </div>
    </div>
  );
};

export default AddPassenger;