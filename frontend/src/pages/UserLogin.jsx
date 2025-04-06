import React, { useState } from "react";
import axios from "axios";  
import logo from "../AirConnect.jpg";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const url = isSignUp ? "http://localhost:8000/api/auth/register" : "http://localhost:8000/api/auth/login";
      const { data } = await axios.post(url, formData, { headers: { "Content-Type": "application/json" } });
      console.log(data);

      localStorage.setItem("token", data.token);  // Store JWT token
      localStorage.setItem("user", JSON.stringify(data.user)); // Store user info

      navigate("/"); // Redirect user after login
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
      <div className="w-full max-w-4xl bg-white bg-opacity-90 shadow-lg rounded-lg flex">
        {/* Left Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-700 text-white rounded-l-lg">
          <img className="h-20 rounded-full mb-6" src={logo} alt="logo" />
          <h2 className="text-3xl font-bold">{isSignUp ? "Create Account" : "Login"}</h2>
          <p className="mt-2 text-sm">{isSignUp ? "Join us and experience the best!" : "You chose the right option!"}</p>
        </div>

        {/* Right Section - Login/Sign Up Form */}
        <div className="w-1/2 p-8 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-800">{isSignUp ? "Create Account" : "Enter Credentials"}</h2>

          {error && <p className="text-red-500">{error}</p>} {/* Show error message */}

          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            {isSignUp && (
              <>
                <p className="font-semibold">Name:</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </>
            )}

            <p className="font-semibold">Email:</p>
            <input
              type="email"
              name="email"
              placeholder="Email-Id"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <p className="font-semibold">Password:</p>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />

            <button type="submit" className="w-full py-3 bg-black hover:bg-gray-800 text-white rounded-lg">
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </form>

          <p className="mt-4 text-center text-gray-600">
            {isSignUp ? "Already have an account?" : "New here?"}{" "}
            <span className="text-purple-600 cursor-pointer hover:underline" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
