import React from 'react'
import { Link, Links } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className='navp'>
        <Link to="/home">Home</Link>
        <Link to="/women">Women Ethnic</Link>
        <Link to="/womenwest">Women Western</Link>
        <Link to="/men">Men</Link>
        <Link to="/kids">Kids</Link>
      </div>
    </div>
  )
}

export default Navbar
