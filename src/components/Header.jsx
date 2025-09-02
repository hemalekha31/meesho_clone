import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <div>
        <div className='header'>
            <div className='head'>
            <h1>meesho</h1>
            </div>
      

        <div className="search">

            <i className="fa-solid fa-magnifying-glass"></i>
            <input
             type="text" placeholder="       Try saree, kurti or search by..."/>
        </div>

        <div className="nav-item">
            <span>Become a Supplier</span>
            <hr className="he"/>
        </div>

        <div className="nav-item">
            <span>Investor Relations</span>
            <hr className="he"/>
        </div>

        <div className="nav-items">
            <i className="fa-solid fa-user"></i>
            <h4>Profile</h4>
        </div>

        <div className="nav-items">
            <a href="cart.html" style={{textDecoration: "none", color: "gray;"}}> <i className="fa-solid fa-cart-shopping"
                    id="cart"></i>
                <h4>Cart</h4>
            </a>
        </div>
</div>
</div>
  )
}

export default Header