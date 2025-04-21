import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import axios from "axios";
import { Search } from "lucide-react"; 
import AirplaneModal from "./AirplaneListing/AirplaneModal";

function Listing() {
  console.log("isAdmin = ",JSON.parse(localStorage.getItem("user")).isAdmin );
  const [airplanes, setAirplanes] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);

  //fetching all airplanes data 
  const fetchAirplanes = async () => {
      try{
          const token = localStorage.getItem("token");
          console.log("Token = ", token)
          const response = await axios.get("http://localhost:4000/api/v1/airplane/getAllAirplanes", {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          });
          console.log("Response =>", response.data.data);
          setAirplanes(response.data.data);
          setLoading(false);
      }
      catch(err){
          console.log("Error fetching all airplanes", err);
          setError("Failed to fetch airplanes");
          setLoading(false);
      }
  }
  useEffect(()=> {
    fetchAirplanes();    
  },[])

  const statusColors = {
    Active: "text-green-600 bg-green-100",
    Inactive: "text-red-600 bg-red-100",
    Maintenance: "text-yellow-600 bg-yellow-100",
  };

  const filteredData = airplanes.filter((airplane) => {
    const matchStatus = filter === "All" || airplane.status === filter;
    const matchSearch = airplane.name.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });


  const handleAddNew = async (data) => {
    try{
      const token = localStorage.getItem("token");
      console.log("Token = ", token);

      const response = await axios.post(
        "http://localhost:4000/api/v1/airplane/add", 
        data, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json"
          }
        }
      )

      console.log("Successfully added airplane", response.data);
      fetchAirplanes();
    }
    catch(err){
      console.log("Error adding airplane details", err);
    }
  };

  return (
    <div className="py-6 px-20 bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">All Airplanes</h2>

      {/* Filter Tabs and Search */}
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          {["All", "Active", "Inactive", "Maintenance"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1 rounded-full border text-sm ${
                filter === tab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex">
            <div className="relative mr-3">
                <input
                type="text"
                placeholder="Search..."
                className="border rounded-md px-5 py-[0.3rem] text-sm pl-10 outline-none hover:bg-gray-50" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div className="">
              <button onClick={() => {setIsModalOpen(true)}} className="hover:bg-black hover:text-white px-4 py-[0.3rem] rounded-full shadow-md hover:shadow-lg bg-gray-200 text-black">Add new</button>

              <AirplaneModal 
                isOpen = {isModalOpen}
                onClose = {() => {setIsModalOpen(false)}}
                onSave = {handleAddNew}
              />
            </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-700 bg-gray-100">
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Airline Name</th>
              <th className="px-4 py-2">Airplane Number</th>
              <th className="px-4 py-2">Capacity</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((plane, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{plane.name}</td>
                <td className="px-4 py-2">{plane.airline}</td>
                <td className="px-4 py-2">{plane.airplane_number}</td>
                <td className="px-4 py-2">{plane.capacity}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[plane.status]}`}
                  >
                    {plane.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="text-gray-600 hover:text-blue-600">
                    <Pencil size={16} />
                  </button>
                  <button className="text-gray-600 hover:text-red-600">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-400">
                  No airplanes found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Listing;
