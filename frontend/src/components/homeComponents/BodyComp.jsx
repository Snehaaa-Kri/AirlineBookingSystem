import React from 'react';
import { Link } from "react-router-dom";
import img1 from '../../assets/Home/img1.png'
import img2 from '../../assets/Home/img2.png'
import img3 from '../../assets/Home/img3.png'

function BodyComp() {
  return (
    <div className="bg-[#f4f4f4] text-black flex flex-col items-center">
     
      
      {/* Section 1 */}
        <div className="relative w-full  mt-6 bg-cover bg-center  shadow-lg p-6 flex flex-col justify-between" style={{ backgroundImage: `url(${img1})`, height: "600px" }}>
            <div>
              <p className=" px-2 text-sm uppercase text-gray-600 tracking-widest">Experience Our</p>
              <h2 className=" px-2 text-8xl font-extrabold text-gray-900">
                Luxury <br /> <span className="text-gray-500 text-9xl">Flights.</span>
              </h2>
              <p className="px-2 mt-72 text-gray-700 ">
                Experience unmatched luxury in the skies with top-tier comfort, personalized service, and exquisite  amenities.
              </p>
            </div>

            <h2 className="absolute bottom-6 right-6 text-white text-2xl font-bold bg-black bg-opacity-50 px-4 py-2         rounded-lg">
              BOOK NOW
            </h2>
        </div>
      
      {/* Section 2 */}
        <div className="relative  w-full  mt-6 bg-cover bg-center shadow-lg p-6 flex flex-col justify-between" style={{ backgroundImage: `url(${img2})`, height: "600px" }}>
            <div>
              <p className=" px-2 text-sm uppercase text-gray-600 tracking-widest">SEAMLESSLY</p>
              <h2 className=" px-2 text-8xl font-extrabold text-gray-900">
                Instantly 
              </h2>
              <h3 className='px-2 text-2xl font-mono font-semibold'>Every.Single.Year</h3>
              <p className="px-2 mt-80 text-gray-700 ">
                Enjoy new exclusive perks and benefits every single year with our luxury flight services.
                <p>We believe loyalty should be rewarded.</p>
              </p>
            </div>
            <span className="absolute text-gray-600 text-9xl text-right font-extrabold bottom-6 right-4">Booked.</span>

        </div>

     
      
      {/* Section 1 */}
      <div className="relative w-full mt-6 bg-cover bg-center shadow-lg p-6 flex flex-col justify-between" style={{ backgroundImage: `url(${img3})`, height: "600px" }}>
        <div className="text-center">
          <p className="text-sm uppercase text-gray-600 tracking-widest">INSANELY LOW</p>
          <h2 className="text-[12rem] font-extrabold text-gray-900 opacity-20 leading-none">Costs.</h2>
        </div>

        <div className="text-left max-w-lg">
          <p className="text-gray-700 text-lg">
            Unlock tailored savings just for you. Exclusive personal discounts on our luxury private jet services.
          </p>
          <div className="flex space-x-4 mt-6">
          {/* <Link to="/search">
            <button className="bg-gray-200 text-black px-4 py-2 rounded-lg shadow-md">Learn more</button>
          </Link> */}
          <Link to="/get-started">
            <button className="bg-black text-white px-4 py-2 rounded-lg shadow-md">Get Started</button>
          </Link>
          </div>
        </div>
        <h3 className="absolute text-xl font-bold mt-2 text-right bottom-12 right-10 text-[6rem] text-gray-400">5.25%  <span className='text-black text-4xl'>PA</span></h3>

       </div>

      
      {/* Section 5 */}
      {/* <div className="max-w-md text-center my-6">
        <p className="text-sm">Personal discounts and special rates for elite members, delivered in our luxury flight experiences.</p>
      </div> */}
    </div>
  );
}

export default BodyComp;