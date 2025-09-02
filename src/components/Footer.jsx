import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div className="meesho-footer">
                <div className="me-footer-links">
                    <div className="footer-col">
                        <h4>Shop</h4>
                        <ul>
                            <li><a href="women.html">Women Ethnic</a></li>
                            <li><a href="womenwest.html">Women Western</a></li>
                            <li><a href="mens.html">Men</a></li>
                            <li><a href="kid.html">Kids</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Meesho</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Investor Relations</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Support</h4>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Returns & Refunds</a></li>
                            <li><a href="#">Shipping</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="socials">
                            <a href="https://www.facebook.com/meeshosupply/"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/meeshoapp/?hl=en"><i className="fab fa-instagram"></i></a>
                            <a href="https://x.com/meesho_official?lang=en"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <div className="me-footer-bottom">
                    <p>&copy; 2025 Meesho. All rights reserved.</p>
                    <div className="policies">
                        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="#">Sitemap</a>
                    </div>
                </div></div>
        </div>
    )
}

export default Footer