import React from 'react'
import { Link } from 'react-router-dom'
import AddPassengers from '../components/flightDetailsComponents/AddPassengers'
import ShowDetails from '../components/flightDetailsComponents/ShowDetails'
import PaymentOptions from '../components/flightDetailsComponents/PaymentOptions'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function FlightDetail() {
  const navigate = useNavigate();

  const location = useLocation();
  const {flight, formData} = location?.state || {};
  
  const priceToPay = flight.price*formData.total_passengers;
  console.log("Total amt: ",priceToPay)
  
  //to bring back the passenger details
  const [passengerData, setPassengerData] = React.useState([]);
  
    console.log("Detail page flight: ", flight);
    console.log("Detail page formData: ", formData);
    console.log("passengers from : ", passengerData);
    return (
    <div className='p-4'>
      <ShowDetails flight={flight} formData={formData}/>
      <AddPassengers formData={formData} onPassengerDataChange={setPassengerData} />

      {/* <PaymentOptions/> */}
      <div className='space-x-3 text-center shadow-lg p-8'>
        <button
          onClick={() => navigate('/payment', { state: {flight, formData, passengerData } })}
          className="px-4 py-2 bg-black text-white rounded-full font-medium transition hover:bg-gray-800"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  )
}

export default FlightDetail