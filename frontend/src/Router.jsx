import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingConfirmation from "./pages/BookingConfirmation";
import CustomerSupport from "./pages/CustomerSupport";
import FlightDetail from "./pages/FlightDetail";
import Listing from "./pages/Listing";
import MyBookings from "./pages/MyBookings";
import Payment from "./pages/Payment";
import Search from "./pages/Search";
import Status from "./pages/Status";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import App from "./App"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const AppRoutes = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/flight-detail" element={<FlightDetail />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/search" element={<Search />} />
        <Route path="/status" element={<Status />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} /> {/* Handle undefined routes */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;
