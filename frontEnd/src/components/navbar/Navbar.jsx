import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'



const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo'/>
        <ul>
          <li>Home</li>
          <li>Routes</li>
          <li>Tickets</li>
          <li>Contact</li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder='Find Your Way' />
          <img src="" alt="" />
        </div>
       <img src="" alt="" className='toggle-icon'/>
    </div>
  )
}

export default NavBar