import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Employee from './components/Employee';
import HR from './components/HR';
import Home from './components/Home';
import AboutUs from './components/Aboutus';
import Contact from './components/Contact';
function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/hr" element={<HR />} />
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default AppRoutes;


