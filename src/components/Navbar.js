import React from 'react'
import "./Navbar.css"
import Paypal from "./paypal.jpeg"
import bell from "./bell.jpg"
import setting from "./seting.png"

// import { IoSettingsOutline } from '@react-icons/all-files/io/IoSettingsOutline'; 
function Navbar() {
  return (
    <nav>
        <div className="navbar">
            <div div className="navbar-left">
            <img src={Paypal} alt="PayPal Logo" />
              <ul className="navbar-link">
                    <li> <a href="#">Home</a> </li> 
                    <li> <a href="#">Finances</a> </li> 
                    <li> <a href="#">Send and Request</a> </li> 
                    <li> <a href="#">Deals</a> </li> 
                    <li> <a href="#">Wallet</a> </li> 
                    <li  > <a className='active-nav' href="#">Activity</a> </li> 
                    <li> <a href="#">Help</a> </li> 
              </ul>
      </div>
            <div className="nav-right">
            <img src= {bell} alt="User Avatar" />
            <img src= {setting} alt="User Avatar" />
      <div>
        </div>
            LOG OUT
        
      </div>
    </div>

    </nav>
  )
}

export default Navbar
