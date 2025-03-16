import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.jpg';
import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-info">
          <img src={logo} alt="Natural Farm Logo" className="footer-logo" />
          <p>Nurturing health naturally through sustainable farming and premium produce.</p>
          
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
           
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section products">
          <h3>Our Products</h3>
          <ul>
            <li>Fresh Grapes</li>
            <li>Natural Raisins</li>
            <li>Raisin Bars</li>
            <li>Grape Derivatives</li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <div className="contact-detail">
            <MapPin size={20} />
            <span>Natural Farm, Atardah, Muzaffarpur</span>
          </div>
          <div className="contact-detail">
            <Phone size={20} />
            <span><a href="tel:+917033620794">+91 7033620794</a></span>
          
          </div>
          <div className="contact-detail">
            <Mail size={20} />
            <span><a href="mailto:sumitkes2002@gmail.com">sumitkes2002@gmail.com</a></span>
            
          </div>
          <div className="contact-detail">
            <Linkedin size={20} />
            <span><a href="https://www.linkedin.com/in/sumit-kumar176/">Sumit Kumar</a></span>
            
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms of Service</Link>
        </div>
        <div className="footer-copyright">
          © {new Date().getFullYear()} Natural Farm. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;