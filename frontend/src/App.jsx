import './App.css'
import { Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 

  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} theme="light" />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/my-bookings">My Bookings</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default App
