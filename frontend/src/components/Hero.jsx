import React from 'react';
import {Link} from 'react-router-dom'
import heroImg from '../assets/Home/heroImage.jpg'
function Hero() {
  return (
    <div className="w-full overflow-hidden relative h-[600px] bg-gray-100 flex flex-col items-center justify-center text-center py-6">
      {/* Background Image */}
      <img
        src={heroImg}
        alt="Airplane"
        className="w-full h-[110%] object-cover"
      />

      {/* Text Content */}
      <div className="absolute top-20 text-black">
        <h1 className="text-6xl font-bold">WHERE TO FLY?</h1>
        <p className="text-gray-600 mt-2 text-xl">
          Find Countless Flights Options & Deals To Various Destinations Around The World
        </p>
      </div>

      {/* CTA Button */}
      <button className="absolute top-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg hover:bg-gray-800 transition">
        <Link to='/search' >Start Booking Your Flight Now</Link>
        
      </button>
    </div>
  );
}

export default Hero;
