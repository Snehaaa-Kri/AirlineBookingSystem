import React, { useEffect, useState } from 'react';
import profilePic from '../../assets/profilePic.jpeg'

const Profile = () => {
  const adminData = {
    name: 'Sneha Kumari',
    email: 'sneha.admin@airlineapp.com',
    phone: '+91 98765 43210',
    age: 20,
    gender: 'Female',
    address: 'IIIT Una Campus, Himachal Pradesh, India',
    about: 'Admin of the airline booking platform. I manage flights, bookings, and monitor all user activities.',
    role: 'Administrator',
    status: 'Active',
    country: 'India',
    emailVerification: 'Verified',
    mobileVerification: 'Active',
    profileImage: 'https://i.pravatar.cc/150?img=47' // Replace with actual image URL or path
  };

  //user profile fetching
  // const userObj = localStorage.getItem('user'); //localStorage always returns a string, so to get json -parse it.
  const userObj = JSON.parse(localStorage.getItem('user')); //localStorage always returns a string, so to get json -parse it.
  console.log("Getting userObj: ", userObj);
  console.log("name", userObj.name)


  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-2xl min-h-[75.8vh] ">
      {/* Tabs section */}
      <div className="flex items-center gap-6 text-gray-600 font-medium mb-6 border-b pb-2 text-sm md:text-base">
        <span className="text-blue-600 border-b-2 border-blue-600 pb-1">Profile</span>
        <span className="hover:text-blue-600 cursor-pointer">Edit Profile</span>
        <span className="hover:text-blue-600 cursor-pointer">Phone Verification</span>
        <span className="hover:text-blue-600 cursor-pointer">ID Verification</span>
        <span className="hover:text-blue-600 cursor-pointer">Reset Password</span>
        <span className="hover:text-blue-600 cursor-pointer">Activity Log</span>
        <span className="hover:text-blue-600 cursor-pointer">Delete Account</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section with image */}
        <div className="flex flex-col items-center text-center">
          <img
            src={userObj.image}
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{userObj.name}</h2>
          <p className="text-sm text-gray-600">{userObj.email}</p>
          <p className="text-sm text-gray-600">{adminData.country}</p>
        </div>

        {/* Right section with details */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800">
          <Info label="Name" value={userObj.name} />
          <Info label="Role" value={userObj.role} />
          <Info label="Email" value={userObj.email} />
          <Info
            label="Email Verification"
            value={adminData.emailVerification}
            highlight={adminData.emailVerification !== 'Verified'}
          />
          <Info label="Contact" value={userObj.phone_number} />
          <Info label="Mobile Verification" value={adminData.mobileVerification} />
          <Info label="Status" value={adminData.status} />
          <Info label="Gender" value={userObj.gender} />
          <Info label="Age" value={userObj.age} />
          <Info label="Address" value={adminData.address} full />
          <Info label="About Me" value={adminData.about} full />
        </div>
      </div>
    </div>
  );
};

// Info component for consistent row rendering
const Info = ({ label, value, highlight = false, full = false }) => (
  <div className={`${full ? 'sm:col-span-2' : ''}`}>
    <p className="text-gray-500 font-medium">{label}:</p>
    <p className={`mt-1 ${highlight ? 'text-orange-500 font-semibold' : 'text-gray-800'}`}>{value}</p>
  </div>
);

export default Profile;
