import React, {useState, useEffect} from 'react'

function AirplaneModal({isOpen, onClose, onSave, initialData = null}) {
    const [form, setForm] = useState({
        name: "",
        airline: "",
        airplane_number: "",
        capacity: "",
        status: "",
      });
      //if user wants to edit
      useEffect(() => {
        if (initialData) {
            console.log("Old data set");
          setForm(initialData);
        }
      }, [initialData]);
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = () => {
        onSave(form);  // Pass the form data to parent
        onClose();     // Close modal
        setForm({
          name: "",
          airline: "",
          airplane_number: "",
          capacity: "",
          status: "",
        });
      };
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center pb-6">
                <h2 className="text-2xl font-bold text-center">✈️Enter <span className='text-blue-600'>Airplane</span>  Details</h2>
                <button className="px-2 py-1 hover:bg-red-50  rounded-md" onClick={onClose}>
                ❌
                </button>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Enter Airplane name"
              className="w-full border p-2 mb-3 rounded outline-none"
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="text"
              name="airline"
              placeholder="Enter Airline Name"
              className="w-full border p-2 mb-3 rounded outline-none"
              value={form.airline}
              onChange={handleChange}
            />
            <input
              type="text"
              name="airplane_number"
              placeholder="Airplane Number"
              className="w-full border p-2 mb-3 rounded outline-none"
              value={form.airplane_number}
              onChange={handleChange}
            />
            <input
              type="number"
              name="capacity"
              placeholder="Capacity"
              className="w-full border p-2 mb-3 rounded outline-none"
              value={form.capacity}
              onChange={handleChange}
            />
            <select
                name="status"
                className="w-full border p-2 mb-3 rounded outline-none"
                value={form.status}
                onChange={handleChange}
            >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Inactive">Inactive</option>
            </select>

            
            <div className="flex justify-center gap-3">
              
              <button className="px-4 py-1 bg-black hover:bg-gray-800 text-white rounded-full" onClick={handleSubmit}>
                Add
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    
export default AirplaneModal