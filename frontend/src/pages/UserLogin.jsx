import React, { useState } from "react";
import logo from '../AirConnect.jpg'
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('')" }}
    >
      <div className="w-full max-w-4xl bg-white bg-opacity-90 shadow-lg rounded-lg flex">
        {/* Left Section */}

        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-700 text-white rounded-l-lg">
          <img className="h-20 rounded-full mb-6" src={logo} alt="logo" />
          <h2 className="text-3xl font-bold">
            {isSignUp ? "Create Account" : "Login"}
          </h2>
          <p className="mt-2 text-sm">
            {isSignUp
              ? "Join us and experience the best!"
              : "You chose the right option!"}
          </p>

          {/* Social Login Buttons */}
          <div className="mt-6 space-y-3 w-full">
            <button className="w-full py-2 bg-blue-700 hover:bg-blue-800 rounded-lg">
              Continue with Facebook
            </button>
            <button className="w-full py-2 bg-sky-500 hover:bg-sky-600 rounded-lg">
              Continue with Twitter
            </button>
          </div>
        </div>

        {/* Right Section - Login/Sign Up Form */}
        <div className="w-1/2 p-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800">
            {isSignUp ? "Create Account" : "Enter Credentials"}
          </h2>

          <form className="mt-4 space-y-4">
            {isSignUp && (
              <>
              <p className="font-semibold">Name:</p>
              <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              />
              </>
            )}

            <p className="font-semibold">Email:</p>
            <input
              type="email"
              placeholder="Email-Id"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <p className="font-semibold">Password:</p>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg "
            />

            <Link to="/" className="py-5 ">
              <button className="w-full py-3 bg-black hover:bg-gray-800 text-white rounded-lg">
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </Link>
          </form>

          <p className="mt-4 text-center text-gray-600">
            {isSignUp ? "Already have an account?" : "New here?"}{" "}
            <span
              className="text-purple-600 cursor-pointer hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
