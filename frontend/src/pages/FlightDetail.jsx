import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import AddPassengers from '../components/flightDetailsComponents/AddPassengers'
import ShowDetails from '../components/flightDetailsComponents/ShowDetails'

function FlightDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { flight, formData } = location?.state || {};

  const [passengerData, setPassengerData] = React.useState([]);

  // Redirect if no data
  React.useEffect(() => {
    if (!flight || !formData) {
      navigate('/'); // or a custom 404/error page
    }
  }, [flight, formData, navigate]);

  const priceToPay = flight?.price * formData?.total_passengers;

  const handleProceed = () => {
    navigate('/payment', { state: { flight, formData, passengerData } });
  };

  return (
    <div className='p-4'>
      <ShowDetails flight={flight} formData={formData} />
      <AddPassengers formData={formData} onPassengerDataChange={setPassengerData} />

      {/* Total Price */}
      <div className='my-6 text-center text-xl font-semibold text-blue-700'>
        Total to Pay: ₹{priceToPay}
      </div>

      {/* Payment CTA */}
      <div className='space-x-3 text-center shadow-lg p-8'>
        <button
          onClick={handleProceed}
          className="px-4 py-2 bg-black text-white rounded-full font-medium transition hover:bg-gray-800"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default FlightDetail;
