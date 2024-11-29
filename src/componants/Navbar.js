import React from 'react'
import logo from '../img/logo.jpeg'

const Navbar = () => {

  return (
    <>
<header>
  <div className='container-fluid'>
    <div className='row'>
      <div className='col-lg'>



<nav className="navbar navbar-expand-lg  bg-transeparent p-4 " id='navbar'>
  <div className="container">
    <a className="navbar-brand" href='#'>
      <img src={logo} className='img-fluid' style={{height:'100px', width:'130px', backgroundColor:"transparent", marginRight:'20px'}} alt='logo'/>
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item" >
          <a className="nav-link" aria-current="page" href='#navbar'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#product'>Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#Technology'>Technology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#About'>About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#Contact'>Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
    </div>
      </div>
</header>




</>
  )
}

export default Navbar;