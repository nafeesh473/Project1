import React from 'react'
import logo from '../img/logo.jpeg'

const About = () => {
  return (
    <>
   
<div className='container' id='About'>
    <div class="row g-0  position-relative">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img src={logo} class="w-100" alt="..."/>
  </div>
  <div class="col-md-6 p-4 ps-md-0">
    <h2 class="mt-0 text-center"> About Us</h2>
    <p className='fs-5'>
            At Armored Vehicles, we specialize in  Providing state-of-the-art military vehicles, including armored tanks, tactical transporters, and cutting-edge defense systems. With a commitment to quality, innovation, and reliability, we serve armed forces globally, ensuring superior performance in critical missions Trust us for unmatched expertise in military mobility and protection.
            </p>
  </div>
</div>
    </div>
  
    </>
  )
}

export default About