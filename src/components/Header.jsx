import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='head'>
        <h1>meesho</h1>
      </div>

      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Try saree, kurti or search by..." />
      </div>

      <div className="nav-item">
        <span>Become a Supplier</span>
        <hr className="he" />
      </div>

      <div className="nav-item">
        <span>Investor Relations</span>
        <hr className="he" />
      </div>

      <div className="nav-items">
        <i className="fa-solid fa-user"></i>
        <h4>Profile</h4>
      </div>

      <div className="nav-items">
        <Link to="/cart" style={{ textDecoration: "none", color: "gray" }}>
          <i className="fa-solid fa-cart-shopping" id="cart"></i>
          <h4>Cart</h4>
        </Link>
      </div>
    </header>
  );
};

export default Header;
