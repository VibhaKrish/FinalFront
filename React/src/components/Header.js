import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="https://w0.peakpx.com/wallpaper/693/992/HD-wallpaper-mercedes-logo-white-logo-white-mercedes.jpg" alt="Mercedes-Benz Logo" />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/aboutus">About Us</Link>
      </nav>
    </header>
  );
};

export default Header;
