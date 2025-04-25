import React, { useState } from "react";
import axios from "axios";  
import logo from "../AirConnect.jpg";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState("login"); // "otp", "signup", "login"
  const [otpSent, setOtpSent] = useState(false);
  const [serverOtp, setServerOtp] = useState("");

  const [email, setEmail] = useState("");

  const [otpForm, setOtpForm] = useState({ email: "" });
  const [signupForm, setSignupForm] = useState({
    isAdmin: false,
    role: "user",
    name: "",
    email: "",
    otp: "",
    phone_number: "",
    password: "",
    age: "",
    gender: "",
    food_type: "",
    street: "",
    city: "",
    state: "",
    pin_code: ""
  });
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // =================== OTP Step ===================
  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/sendotp",
        { email: otpForm.email }
      );
      if (response.data.success) {
        alert("OTP Sent Successfully!");
        console.log("Otp sent successfully")
        setServerOtp(response.data.otp); // only for dev/debug
        setSignupForm((prev) => ({ ...prev, email: otpForm.email }));
        setStep("signup");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
    setLoading(false);
  };

  // =================== Sign Up Step ===================
  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/signup",
        signupForm
      );

      if (response.data.success) {
        alert("Sign Up Successful!");
        if(response.data.role === "Admin"){
          navigate("/dashboard"); // redirect
        }
        else {
          navigate("/home")
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }

    setLoading(false);
  };

  // =================== Login Step ===================
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/auth/login",
        loginForm,
        { withCredentials: true }
      );

      if (response.data.success) {
        console.log("Login details are: ",response.data);
        if (response.data.success) {
          console.log(response.data.role);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("loggedIn", true)
          localStorage.setItem("user", JSON.stringify(response.data.user));
          if(response.data.role === "Admin"){
            navigate("/dashboard"); // redirect
            toast.success(`Welcome ${response.data.user.name|| 'back'}!`);
          }
          else {
            navigate("/home")
            toast.success(`Welcome ${response.data.user.name || 'back'}!`);
          }
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login Failed");
    }

    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center p-4 w-full bg-gray-50 min-h-[75vh]">
            <div className="flex justify-center items-stretch min-h-[45vh] min-w-[45vw]">
                {/* Left Section */}
                    <div className="w-full p-8 flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-700 text-white rounded-l-lg">
                        <img className="h-32 rounded-full" src={logo} alt="logo" />
                    </div>
    
                {/* Right section  */}
                    <div className="w-full max-w-md bg-white p-6 rounded shadow-md flex items-center justify-center flex-col">
                    {/* Login */}
                {step === "login" && (
                <>
                    <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form onSubmit={handleLogin}  target="_self">
    
                    <label htmlFor="" className="text-gray-600 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={loginForm.email}
                        onChange={(e) =>
                            setLoginForm({ ...loginForm, email: e.target.value })
                        }
                        className="w-full mb-3 px-4 py-2 border rounded"
                        required
                    />
                    <label htmlFor="" className="text-gray-600 font-semibold">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={loginForm.password}
                        onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                        }
                        className="w-full mb-3 px-4 py-2 border rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-brown-700 text-white bg-gray-950 hover:bg-gray-800 py-2 rounded hover:bg-brown-800 mt-6"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    </form>
                    <p className="text-sm mt-4 text-center">
                        New here?{" "}
                    <button onClick={() => setStep("otp")} className=" text-purple-600 hover:font-semibold">
                        Register Now
                    </button>
                    </p>
                </>
                )}
    
                    {/* otp  */}
                {step === "otp" && (
                <>
                    <h2 className="text-3xl font-bold mb-6 text-center">Send OTP</h2>
                    <form onSubmit={handleSendOtp}>
                        <label htmlFor="" className="text-gray-700 font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={otpForm.email}
                        onChange={(e) =>
                        setOtpForm({ ...otpForm, email: e.target.value })
                        }
                        className="w-full mb-4 px-4 py-2 border rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full bg-brown-700 text-white bg-gray-950 hover:bg-gray-800 py-2 rounded hover:bg-brown-800 mt-4"
                    >
                        {loading ? "Sending OTP..." : "Send OTP"}
                    </button>
                    </form>
                    <p className="text-sm mt-4 text-center">
                    Already have an account?{" "}
                    <button
                        onClick={() => setStep("login")}
                        className="text-purple-600 hover:font-semibold"
                    >
                        Login
                    </button>
                    </p>
                </>
                )}
                    {/* sign up  */}
                {step === "signup" && (
                <>
                    <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={signupForm.name}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, name: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={signupForm.phone_number}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, phone_number: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={signupForm.password}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, password: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="OTP"
                        value={signupForm.otp}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, otp: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                    />
                    {/* Add more fields */}
                    <input
                        type="number"
                        placeholder="Age"
                        value={signupForm.age}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, age: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                    />
                    <select
                        value={signupForm.gender}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, gender: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                        >
                        <option className="text-gray-800" value="" >Select Gender</option>
                        <option className="text-gray-800" value="Male">Male</option>
                        <option className="text-gray-800" value="Female">Female</option>
                        <option className="text-gray-800" value="Other">Other</option>
                    </select>
    
                    <select
                        value={signupForm.food_type}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, food_type: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                        >
                          <option value="">Select Food Type</option>
                          <option value="Vegetarian">Vegetarian</option>
                          <option value="Non-vegetarian">Non-vegetarian</option>
                    </select>
    
                    <input
                        type="text"
                        placeholder="Street"
                        value={signupForm.street}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, street: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="City"
                        value={signupForm.city}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, city: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="State"
                        value={signupForm.state}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, state: e.target.value })
                        }
                        className="w-full mb-2 px-4 py-1 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Pin Code"
                        value={signupForm.pin_code}
                        onChange={(e) =>
                        setSignupForm({ ...signupForm, pin_code: e.target.value })
                        }
                        className="w-full mb-4 px-4 py-1 border rounded"
                        required
                    />
    
                    <div className="mb-4">
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                        Select Role
                      </label>
                      <select
                        id="role"
                        name="role"
                        value={signupForm.role}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, role: e.target.value })}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value="">-- Select --</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                      </select>
                    </div>
    
                    <div className="flex items-center mb-2">
                      <input
                        type="checkbox"
                        id="isAdmin"
                        checked={signupForm.isAdmin}
                        onChange={(e) =>
                          setSignupForm({ ...signupForm, isAdmin: e.target.checked })
                        }
                        className="mr-2"
                      />
                      <label htmlFor="isAdmin" className="text-sm text-gray-700">
                        Login as Admin
                      </label>
                    </div>
    
                    <button
                        type="submit"
                        className="w-full bg-brown-700 text-white bg-gray-950 hover:bg-gray-800 py-2 rounded hover:bg-brown-800 mt-4"
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>
                    </form>
                </>
                )}
    
                {error && <p className="text-red-500 mt-4 text-center">{error}</p>}
                    </div>
    
            </div>
        </div>
  );
};

export default UserLogin;
