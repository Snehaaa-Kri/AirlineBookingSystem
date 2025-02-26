import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import SearchBox from '../components/SearchBox.jsx'
import BodyComp from "../components/homeComponents/BodyComp.jsx";
import FAQs from '../components/homeComponents/FAQs.jsx';
function HomePage() {
  return (
    <>
      <Hero/>
      <SearchBox/>
      <BodyComp/>
      <FAQs/>
    </>
  )
}

export default HomePage