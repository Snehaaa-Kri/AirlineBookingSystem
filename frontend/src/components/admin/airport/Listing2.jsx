import React, { useEffect, useState } from "react";
import { Pencil, Trash2, Search } from "lucide-react";
import axios from "axios";
import { toast } from "react-hot-toast";
import DeleteModal from "../DeleteModal.jsx";
import AirportModal from "./AirportModal.jsx";

function Listing2() {
  const [airports, setAirports] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedAirport, setSelectedAirport] = useState(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [airportToDelete, setAirportToDelete] = useState(null);

  const fetchAirports = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1/airport/getAllAirports`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAirports(response.data.data);
      setLoading(false);
    } catch (err) {
      toast.error("Error in fetching data!");
      setError("Failed to fetch airports");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  const handleAddNew = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/v1/airport/add`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Added airport : ", response.data.data);
      toast.success("Airport added successfully!");
      fetchAirports();
    } catch (err) {
      toast.error("Failed to add airport!");
    }
  };

  const handleUpdateAirport = async (updatedAirport) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/airport/update/${updatedAirport._id}`, updatedAirport, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Airport updated successfully!");
      setAirports((prev) => prev.map((a) => (a._id === updatedAirport._id ? response.data.data : a)));
      setIsEditOpen(false);
    } catch (err) {
      toast.error("Failed to update airport!");
    }
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/airport/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAirports((prev) => prev.filter((a) => a._id !== id));
      toast.success("Airport deleted successfully!");
      setIsDeleteModalOpen(false);
    } catch (err) {
      toast.error("Failed to delete airport!");
    }
  };

  const filteredData = airports.filter((airport) => {
    const searchTerm = search.toLowerCase();
    return (
      airport.name.toLowerCase().includes(searchTerm) ||
      airport.city.toLowerCase().includes(searchTerm) ||
      airport.state.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="py-6 px-20 bg-white rounded-xl shadow-md min-h-[70vh]">

      <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">All Airports</h2>
        <div className="relative mr-3 w-[50%]">
          <input
            type="text"
            placeholder="Search..."
            className="border shadow-sm rounded-md px-5 py-[0.3rem] text-sm pl-10 outline-none hover:bg-gray-50 w-[100%]"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="hover:bg-black hover:text-white px-4 py-[0.3rem] rounded-full shadow-md hover:shadow-lg bg-gray-200 text-black"
        >
          Add new
        </button>

        <AirportModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddNew}
        />
      </div>

      <div className="overflow-x-auto min-h-[55.5vh]">
        <table className="w-full text-sm text-left">
          <thead className="text-gray-700 bg-gray-100">
            <tr>
              <th className="px-4 py-2">Airport Name</th>
              <th className="px-4 py-2">Code</th>
              <th className="px-4 py-2">City</th>
              <th className="px-4 py-2">State</th>
              <th className="px-4 py-2">Country</th>
              <th className="px-4 py-2">Pincode</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((airport, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{airport.name}</td>
                <td className="px-4 py-2">{airport.code}</td>
                <td className="px-4 py-2">{airport.city}</td>
                <td className="px-4 py-2">{airport.state}</td>
                <td className="px-4 py-2">{airport.country}</td>
                <td className="px-4 py-2">{airport.pincode}</td>
                <td className="px-4 py-2 space-x-4">
                  <button className="text-gray-600 hover:text-blue-600" onClick={() => {
                    setSelectedAirport(airport);
                    setIsEditOpen(true);
                  }}>
                    <Pencil size={16} />
                  </button>
                  <button className="text-gray-600 hover:text-red-600" onClick={() => {
                    setAirportToDelete(airport);
                    setIsDeleteModalOpen(true);
                  }}>
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-400">
                  No airports found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <AirportModal
          isOpen={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          onSave={handleUpdateAirport}
          initialData={selectedAirport}
        />

        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          onDelete={() => handleDelete(airportToDelete._id)}
          airplaneName={airportToDelete?.name}
        />
      </div>
    </div>
  );
}

export default Listing2;