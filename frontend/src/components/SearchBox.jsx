import React, {useEffect, useState} from "react";
import { FaPlane, FaHotel, FaCar, FaExchangeAlt, FaUser, FaCalendarAlt, FaSearch } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function SearchBox() {
    const navigate = useNavigate();
    const [searchedFlight, setSearchFlight] = useState([]) //array of objects

    //getting form data from user ui
    const [form, setForm] = useState({
        "source_city": "", 
        "destination_city": "",
        "trip_type": "One Way", 
        "coach_type": "", 
        "departure_date" : "",
        "arrival_date": "",
        "total_passengers": 1,
        // "fareType": "Regular fare"  //extra
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
        console.log(form);
    }

    useEffect (() => {
        console.log("Form data : ", form)
    },[form])

    // sending the form data to the backend api - search wala
        const handleSubmit = async() => {
            if (!form.source_city || !form.destination_city || !form.departure_date || (form.trip_type !== "One Way" && !form.arrival_date)) {
                toast.error("Please fill all required fields!");
                return;
            }
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    toast.error("User not authenticated!");
                    return;
                }
        
                toast.loading("Searching for flights...");
                const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/flight/search`, form, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                toast.dismiss(); // dismiss loading
                toast.success("Flights found!");
                setSearchFlight(res.data);
                navigate("/listing", { 
                    state: { 
                        searchedFlight: res.data,
                        formData: form
                    } 
                });
            } catch (err) {
                toast.dismiss(); // dismiss loading
                console.error("Error in searching flights: ", err);
                toast.error(err?.response?.data?.message || "Something went wrong in searching!");
            }
        }

    
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
                <input type="radio" name="trip_type" value="One Way" onChange={handleChange} checked={form.trip_type == "One Way"} />
                <span>One Way</span>
            </label>
            <label className="flex items-center space-x-1">
                <input type="radio" name="trip_type" value="Round Trip" onChange={handleChange} checked={form.trip_type == "Round Trip"}/>
                <span>Round Trip</span>
            </label>
            <label className="flex items-center space-x-1">
                <input type="radio" name="trip_type" value="Multi City" onChange={handleChange} checked={form.trip_type == "Multi City"}/>
                <span>Multi City</span>
            </label>
            </div>
            <select className="ml-auto border p-1 rounded" name="coach_type" value={form.coach_type} onChange={handleChange}>
            <option >Coach</option>
            <option>Business</option>
            <option>First Class</option>
            </select>
        </div>

        {/* Search Fields */}
        <div className="grid grid-cols-6 gap-3 bg-gray-100 p-4 rounded-lg">
            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">Source City</label>
            <div className="flex items-center bg-white p-2 rounded">
                <input type="text" placeholder="Origin" className="w-full outline-none" name="source_city" value={form.source_city} onChange={handleChange}/>
                <FaExchangeAlt className="text-gray-500" />
            </div>
            </div>

            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">Destination City</label>
            <div className="flex items-center bg-white p-2 rounded">
                <input type="text" placeholder="Destination" className="w-full outline-none" name="destination_city" value={form.destination_city} onChange={handleChange}/>
            </div>
            </div>

            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">Departure Date</label>
            <div className="flex items-center bg-white p-2 rounded">
                <FaCalendarAlt className="text-gray-500" />
                <input type="date" className="w-full outline-none" name="departure_date" value={form.departure_date} onChange={handleChange}/>
            </div>
            </div>

            {form.trip_type !== "One Way" && (
                <div className="col-span-1 flex flex-col">
                  <label className="text-gray-600 text-sm">Return Date</label>
                  <div className="flex items-center bg-white p-2 rounded">
                    <FaCalendarAlt className="text-gray-500" />
                    <input
                      type="date"
                      className="w-full outline-none"
                      name="arrival_date"
                      value={form.arrival_date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
            )}

            <div className="col-span-1 flex flex-col">
            <label className="text-gray-600 text-sm">Traveler</label>
            <div className="flex items-center bg-white p-2 rounded">
                <FaUser className="text-gray-500" />
                <input type="number" min="1" className="w-full outline-none" name="total_passengers" value={form.total_passengers} onChange={handleChange}/>
            </div>
            </div>

            {/* Search Button */}
            <button onClick={handleSubmit} className="col-span-1 bg-black text-white rounded-lg flex items-center justify-center mt-5 mx-5 hover:bg-gray-800 transition">
                <FaSearch className="text-lg" />
            </button>
        </div>

        {/* Fare Type & Links */}
        <div className="flex items-center justify-between text-gray-600 text-sm mt-4">
            <div className="flex space-x-4">
            {/* <label className="flex items-center space-x-1">
            <input type="radio" name="fareType" defaultChecked value="Regular Fare" checked={form.fareType === "Regular Fare"} onChange={handleChange}/>
                <span>Regular Fare</span>
            </label>
            <label className="flex items-center space-x-1">
                <input type="radio" name="fareType" value="Student Fare" checked={form.fareType === "Student Fare"} onChange={handleChange} />
                <span>Student Fare</span>
            </label> */}
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
