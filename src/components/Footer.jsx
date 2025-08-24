import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#18392B] text-white py-8">
      <div className="container hidden md:flex mx-auto  flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        
        {/* Logo */}
        <div className="flex-shrink-0 text-center md:text-left">
          <h1 className="font-bold text-4xl">Equalis</h1>
        </div>

        {/* Navigation Links & Contacts */}
        <div className="flex flex-col md:flex-row md:space-x-12 space-y-8 md:space-y-0 text-center md:text-left">
          {/* Links */}
          <div>
            <h2 className="font-bold mb-2">Links</h2>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
              <li><NavLink to="/services" className="hover:underline">Service</NavLink></li>
              <li><NavLink to="/contact" className="hover:underline">Contact Us</NavLink></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h2 className="font-bold mb-2">Contacts</h2>
            <ul className="space-y-2">
              <li>Email: equalistech@equalis.com</li>
              <li>Address: Kigali, Rwanda</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Equalis. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
