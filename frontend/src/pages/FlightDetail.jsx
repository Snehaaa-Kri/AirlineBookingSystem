import React from 'react'
import { Link } from 'react-router-dom'
import AddPassengers from '../components/flightDetailsComponents/AddPassengers'
import ShowDetails from '../components/flightDetailsComponents/ShowDetails'
import PaymentOptions from '../components/flightDetailsComponents/PaymentOptions'
import { useLocation } from 'react-router-dom'

function FlightDetail() {
  const location = useLocation();
  const {flight, formData} = location?.state || {};

  console.log("Detail page flight: ", flight);
  console.log("Detail page formData: ", formData);
  return (
    <div className='p-4'>
      <ShowDetails flight={flight} formData={formData}/>
      <AddPassengers formData={formData}/>
      {/* <PaymentOptions/> */}
      <div className='space-x-3 text-center shadow-lg p-8 '>
            <Link
                to="/payment"
                className="px-4 py-2 bg-black text-white rounded-full font-medium transition hover:bg-gray-800"
            >
                Proceed to Payment
            </Link>
            
        </div>
    </div>
  )
}

export default FlightDetail