import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navp'>
      <Link to="/home">Home</Link>
      <Link to="/women">Women Ethnic</Link>
      <Link to="/womenwest">Women Western</Link>
      <Link to="/men">Men</Link>
      <Link to="/kids">Kids</Link>
    </nav>
  );
}

export default Navbar;
