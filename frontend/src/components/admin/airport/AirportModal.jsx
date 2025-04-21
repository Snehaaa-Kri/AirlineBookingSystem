import React, { useState, useEffect } from 'react';

function AirportModal({ isOpen, onClose, onSave, initialData = null }) {
  const [form, setForm] = useState({
    name: "",
    code: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  // If user wants to edit
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
    onSave(form); // Pass the form data to parent
    onClose(); // Close modal
    setForm({
      name: "",
      code: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center pb-6">
          <h2 className="text-2xl font-bold text-center">
            🏢Enter <span className='text-blue-600'>Airport</span> Details
          </h2>
          <button className="px-2 py-1 hover:bg-red-50 rounded-md" onClick={onClose}>
            ❌
          </button>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Enter Airport Name"
          className="w-full border p-2 mb-3 rounded outline-none"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="code"
          placeholder="Enter Airport Code"
          className="w-full border p-2 mb-3 rounded outline-none"
          value={form.code}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Enter City"
          className="w-full border p-2 mb-3 rounded outline-none"
          value={form.city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="Enter State"
          className="w-full border p-2 mb-3 rounded outline-none"
          value={form.state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Enter Country"
          className="w-full border p-2 mb-3 rounded outline-none"
          value={form.country}
          onChange={handleChange}
        />
        <input
          type="text"
          name="pincode"
          placeholder="Enter Pincode"
          className="w-full border p-2 mb-3 rounded outline-none"
          value={form.pincode}
          onChange={handleChange}
        />

        <div className="flex justify-center gap-3">
          <button
            className="px-4 py-1 bg-black hover:bg-gray-800 text-white rounded-full"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AirportModal;
