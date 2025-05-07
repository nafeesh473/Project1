import React from 'react'
import pic1 from '../img/1 pic.jpeg'

const Header = () => {
  return (
    <>
    <div className="container-fluid p-0 hero" id="Home">
  <div className="position-relative text-center">
    <img src={pic1} className="img-fluid" alt="pic" style={{height:"500px"}}/>
    {/* Optional: Overlay text or content */}
    {/* <div className="position-absolute top-50 start-50 translate-middle text-white">
      <h1>Welcome to Our Site</h1>
    </div> */}
  </div>
</div>

    
    </>
  )
}

export default Header;