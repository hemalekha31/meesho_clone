import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="meesho-footer">
      <div className="me-footer-links">
        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/women">Women Ethnic</Link></li>
            <li><Link to="/womenwest">Women Western</Link></li>
            <li><Link to="/men">Men</Link></li>
            <li><Link to="/kids">Kids</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Meesho</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/investor">Investor Relations</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/returns">Returns & Refunds</Link></li>
            <li><Link to="/shipping">Shipping</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="https://www.facebook.com/meeshosupply/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/meeshoapp/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://x.com/meesho_official?lang=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="me-footer-bottom">
        <p>&copy; 2025 Meesho. All rights reserved.</p>
        <div className="policies">
          <Link to="/privacy">Privacy Policy</Link> | 
          <Link to="/terms">Terms of Service</Link> | 
          <Link to="/sitemap">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
