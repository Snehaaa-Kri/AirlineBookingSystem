import React from 'react';

const MyProfile = () => {

  // Fetch user data from localStorage
  const userObj = JSON.parse(localStorage.getItem('user'));
  
  console.log("Getting userObj: ", userObj);
  console.log("name", userObj?.name);
  
  if (!userObj) {
    return <div className="text-center text-red-500 mt-10">User data not found. Please log in.</div>;
  }
  const userData = {
    name: 'User Name',
    email: 'user@airlineapp.com',
    phone_number: '+91 2345769845',
    age: '19',
    gender: 'Male',
    address: 'Patna, Bihar',
    about: 'I enjoy exploring new places and rely on this platform to find and book flights with ease. It\'s been my go-to for managing travel plans, checking schedules, and staying updated. Whether it\'s for a quick trip or a long vacation, this app helps make traveling smoother..',
    role: 'User',
    status: 'Active',
    country: 'India',
    emailVerification: 'Pending',
    mobileVerification: 'Verified',
    image: 'https://i.pravatar.cc/150?img=12'
  };
  
  return (
    <div className="p-6 max-w-6xl mx-auto bg-white shadow-md rounded-2xl">
      {/* Tabs section */}
      <div className="flex items-center gap-6 text-gray-600 font-medium mb-6 border-b pb-2 text-sm md:text-base">
        <span className="text-blue-600 border-b-2 border-blue-600 pb-1">My Profile</span>
        <span className="hover:text-blue-600 cursor-pointer">Edit Profile</span>
        <span className="hover:text-blue-600 cursor-pointer">Reset Password</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section with image */}
        <div className="flex flex-col items-center text-center">
          <img
            src={userObj.image || 'https://i.pravatar.cc/150?img=12'}
            alt="User"
            className="rounded-full w-32 h-32 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{userObj.name}</h2>
          <p className="text-sm text-gray-600">{userObj.email}</p>
          <p className="text-sm text-gray-600">{userObj.country || 'India'}</p>
        </div>

        {/* Right section with user details */}
        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-800">
          <Info label="Name" value={userObj.name} />
          <Info label="Role" value={userObj.role || 'User'} />
          <Info label="Email" value={userObj.email} />
          <Info label="Contact" value={userObj.phone_number|| 'Not Provided'} />
          <Info label="Gender" value={userObj.gender || 'Not Provided'} />
          <Info label="Age" value={userObj.age || 'Not Provided'} />
          <Info label="Status" value={userObj.status || 'Active'} />
          <Info label="Address" value={userData.address || 'Not Provided'} full />
          <Info label="About Me" value={userData.about || 'User of the airline booking platform.'} full />
        </div>
      </div>
    </div>
  );
};

// Info component
const Info = ({ label, value, highlight = false, full = false }) => (
  <div className={`${full ? 'sm:col-span-2' : ''}`}>
    <p className="text-gray-500 font-medium">{label}:</p>
    <p className={`mt-1 ${highlight ? 'text-orange-500 font-semibold' : 'text-gray-800'}`}>{value}</p>
  </div>
);

export default MyProfile;