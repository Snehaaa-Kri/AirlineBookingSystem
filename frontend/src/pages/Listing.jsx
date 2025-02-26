import React from 'react'
import Sidebar from '../components/listingComponents/Sidebar'
import Lists from '../components/listingComponents/Lists'

function Listing() {
  return (
    <div className="flex justify-between ">
      <Sidebar/>
      <Lists />
    </div>
  )
}

export default Listing