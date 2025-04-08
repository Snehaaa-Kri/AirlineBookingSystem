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
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import UserLogin from "./pages/UserLogin.jsx";
const AppRoutes = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/flight-detail" element={<FlightDetail />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/search" element={<Search />} />
        <Route path="/status" element={<Status />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<h2>404 Page Not Found</h2>} /> {/* Handle undefined routes */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default AppRoutes;
