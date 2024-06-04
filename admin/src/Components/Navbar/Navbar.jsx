import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo_jordan.png'
import admin_logo from '../../assets/admin_logo.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div>
            <img className="nav_logo" src={navlogo} alt="" />
            <p>Admin Panel</p>
        </div>
        <img className="admin_logo" src={admin_logo} alt="" />
    </div>
  )
}

export default Navbar