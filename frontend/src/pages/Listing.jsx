import React from 'react'
import Sidebar from '../components/listingComponents/Sidebar'
import Lists from '../components/listingComponents/Lists'
import { useLocation } from 'react-router-dom' 

function Listing() {
  const location = useLocation();
  const { searchedFlight, formData } = location.state || {};
  // const searchedFlight = location.state?.searchedFlight?.data;
  // const formData = location?.state?.formData?.data;
  console.log("Listing page searched flights: ", searchedFlight?.data);
  console.log("Listing page form data: ", formData);
  return (
    <div className="flex justify-between ">
      <Sidebar/>
      <Lists searchedFlight={searchedFlight} formData={formData} />
    </div>
  )
}

export default Listing