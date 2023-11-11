
import React from 'react';
import './Footer';

const Footer = () => {
 return (
    <footer className="footer">
      <div className="footer-column">
        <h3>Contact Us</h3>
        <p>Email: ems.mercedesbenz@mercedes.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="footer-column">
        <h3>About Us</h3>
        <p>Mercedes-Benz Employee Management System</p>
      </div>
      <div className="footer-column">
        <h3>Follow Us</h3>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>LinkedIn</p>
      </div>
    </footer>
 );
};

export default Footer;