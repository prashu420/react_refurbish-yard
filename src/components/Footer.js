import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'; // Import the custom CSS

function Footer() {
  return (
    <footer className="footer bg-blue">
      <div className="container d-flex justify-content-between align-items-center">
        <p className="footer-text">&copy; 2024 Refurbish Yard. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://www.facebook.com/profile.php?id=61564413098155" className="footer-icon-link">
            <FaFacebook className="footer-icon" />
          </a>
          <a href="https://x.com/RefurbishY43509" className="footer-icon-link">
            <FaTwitter className="footer-icon" />
          </a>
          <a href="https://www.instagram.com/refurbishyard24/" className="footer-icon-link">
            <FaInstagram className="footer-icon" />
          </a>
          <a href="https://www.linkedin.com/company/104170068" className="footer-icon-link">
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
