import React, { useState } from 'react';
import './Contact.css';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
  <div className="contact-header">
    <h1>Contact Natural Farm</h1>
    <p>We're here to connect, answer your questions, and share our passion for fresh, organic produce.</p>
  </div>

  <div className="contact-content">
    <div className="contact-info">
      <div className="info-section">
        <h2>Get in Touch</h2>
        <div className="contact-details">
          <div className="detail-item" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="icon">📍:</span>
            <p>Natural Farm, Atardah, Muzaffarpur</p>
          </div>
          <div className="detail-item" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="icon">📞:</span>
            <p>
              <a href="tel:+917033620794">+91 7033620794</a>
            </p>
          </div>
          <div className="detail-item" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="icon">📧:</span>
            <p>
              <a href="mailto:sumitkes2002@gmail.com">sumitkes2002@gmail.com</a>
            </p>
          </div>
          <div className="detail-item" style={{ display: 'flex', alignItems: 'center' }}>
            <span className="icon" style={{ display: 'flex', alignItems: 'center' }}>
              <img src="/link.png"  height={22} width={22} alt="LinkedIn" className="linkedinIcon" /><p style={{marginLeft:"3.5px"}}>:</p>
              <p style={{ marginLeft: '32px' }}>
              <a href="https://www.linkedin.com/in/sumit-kumar176/" target="_blank" rel="noopener noreferrer">
                 Sumit Kumar
              </a>
            </p>
            </span>
            
          </div>
        </div>
      </div>
      <div className="business-hours">
        <h2>Business Hours</h2>
        <p>Monday to Sunday: 9:00 AM – 6:00 PM</p>
      </div>
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default Contact;