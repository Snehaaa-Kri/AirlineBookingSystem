import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <button className="bg-gray-700 px-4 py-2 rounded text-sm">India - English (UK) - ₹ INR</button>
        </div>
        
        {/* Center Section */}
        <div className="flex flex-wrap text-sm justify-center gap-4 md:gap-8">
          <Link to="/help" className="hover:underline">Help</Link>
          <Link to="/privacy-settings" className="hover:underline">Privacy Settings</Link>
          <Link to="/login" className="hover:underline">Log in</Link>
          <Link to="/cookie-policy" className="hover:underline">Cookie policy</Link>
          <Link to="/privacy-policy" className="hover:underline">Privacy policy</Link>
          <Link to="/terms-of-service" className="hover:underline">Terms of service</Link>
          <Link to="/company-details" className="hover:underline">Company Details</Link>
        </div>
        
        {/* Right Section */}
        <div className="text-sm flex flex-wrap justify-center gap-4 md:gap-8 mt-4 md:mt-0">
          <Link to="/explore" className="hover:underline">Explore</Link>
          <Link to="/company" className="hover:underline">Company</Link>
          <Link to="/partners" className="hover:underline">Partners</Link>
          <Link to="/trips" className="hover:underline">Trips</Link>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="text-center text-xs mt-6">
        &copy; AirConnect Ltd 2002 - 2025
      </div>
    </footer>
  );
}

export default Footer;
