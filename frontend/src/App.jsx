import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// import {Toaster, toast} from 'sonner'
import { Toaster } from 'react-hot-toast';
import toast from 'react-hot-toast';
//routes
import HomePage from "./pages/HomePage";
import BookingConfirmation from "./pages/BookingConfirmation";
import CustomerSupport from "./pages/CustomerSupport";
import FlightDetail from "./pages/FlightDetail";
import Listing from "./pages/Listing";
import MyBookings from "./pages/MyBookings";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import Status from "./pages/Status";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import ProtectedRoute from './components/ProtectedRoute.jsx';
import MyProfile from './pages/MyProfile.jsx';

//Admin routes
import AirportListing from './pages/Admin/AirportListing.jsx';
import AirplaneListing from './pages/Admin/AirplaneListing.jsx';
import FlightListing from './pages/Admin/FlightListing.jsx';
import Profile from './pages/Admin/Profile.jsx';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [userRole, setUserRole] = useState(null);

  // Effect to check for changes in localStorage
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("loggedIn") === "true";
    setIsLoggedIn(loggedInStatus);

    if (loggedInStatus) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUserRole(user?.role || null);
    } else {
      setUserRole(null);
    }
  }, []);

  // Function to handle login
  const handleLogin = (user) => {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("user", JSON.stringify(user));
    setIsLoggedIn(true);
    setUserRole(user.role);
    toast.success(`Welcome ${user.username || 'back'}!`);
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserRole(null);
    toast.success("Logged out successfully.");
  };

  console.log("IsLoggedIn = ", isLoggedIn, "\nUser type = ",userRole);

  return (
    <Router>
      {/* <Toaster position="top-right" />  adding toaster - step 2 */}
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: '#fff',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            marginTop: '46px',
            marginRight: '15px'
          },
          success: {
            style: {
              background: 'rgba(204, 255, 204, 0.2)',
              color: '#0f5132',
              border: '1px solid #a3d9a5',
            },
          },
          error: {
            style: {
              background: 'rgba(255, 204, 204, 0.2)',
              color: '#842029',
              border: '1px solid #f5c2c7',
            },
          },
        }}
        reverseOrder={false} />
      <Navbar isLoggedIn={isLoggedIn} userRole={userRole} handleLogout={handleLogout}/>
        {/* Conditions written are :  1. if user is not loggedIn => i'll show unauthorized routes    2.  */}
      <Routes>
        {(!isLoggedIn) && (
          <>
            {/* unauthorized routes  */}
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/search" element={<Search />} />
            <Route path="/listing" element={<Listing />} />
          </>
        ) }
        {/* protected routes  */}
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={< Navigate to='/' />} />  
          {/* private route  */}
          {userRole === "Admin"? (
            <>
              <Route path="/dashboard" element={<AdminDashboard />} />
              <Route path="/airports" element={<AirportListing />} />
              <Route path="/airplanes" element={<AirplaneListing />} />
              <Route path="/flights" element={<FlightListing />} />
              <Route path="/profile" element={<Profile />} />
            </>
          ): (
            <>
              <Route path="/booking-confirmation" element={<BookingConfirmation />} />
              <Route path="/search" element={<Search />} />
              <Route path="/listing" element={<Listing />} />
              <Route path="/flight-detail" element={<FlightDetail />} />
              <Route path="/mybookings" element={<MyBookings />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/status" element={<Status />} />
              <Route path="/myprofile" element={<MyProfile />} />
            </>
          )}
        </Route>
        {/* public routes  */}
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} /> {/*Handle undefined routes*/}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App


//protected routes are the routes that are only accessible once the user is logged in
//private routes are the routes that are accessible for admins only