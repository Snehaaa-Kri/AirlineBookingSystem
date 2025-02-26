import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../AirConnect.jpg'

function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <>
        <div className="flex items-center justify-between px-6 py-3 bg-gray-100 shadow-md">
        {/* Logo */}
        <div className="flex items-center">
            <img src={logo} alt="Logo" className="w-10 h-10 mr-2 rounded" />
            <h1 className="text-lg font-bold">AirConnect</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-3">
            {["Home", "Search", "MyBookings", "Customer-Support"].map((item) => (
            <Link
                key={item}
                to={`/${item.toLowerCase().replace(/\s/g, "")}`}
                className={`px-4 py-2 rounded-full font-medium transition ${
                active === item
                    ? "bg-black text-white"
                    : "bg-gray-300 text-gray-600"
                }`}
                onClick={() => setActive(item)}
            >
                {item}
            </Link>
            ))}
        </div>

        {/* Login Button */}
        <div className='space-x-3'>
            <Link
                to="/login"
                className="px-4 py-2 bg-black text-white rounded-full font-medium transition hover:bg-gray-800"
            >
                Log In
            </Link>
            
        </div>
        </div>
    </>
  );
}

export default Navbar;
