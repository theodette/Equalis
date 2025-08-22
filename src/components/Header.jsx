import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 left-0 w-full bg-[#18392B] text-white z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold">Equalis</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-bold text-lg">
          <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:underline">About Us</NavLink></li>
          <li><NavLink to="/services" className="hover:underline">Service</NavLink></li>
          <li><NavLink to="/contact" className="hover:underline">Contact Us</NavLink></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-[#18392B] flex flex-col items-center space-y-4 py-4">
          <li><NavLink to="/" className="hover:underline" onClick={toggleMenu}>Home</NavLink></li>
          <li><NavLink to="/about" className="hover:underline" onClick={toggleMenu}>About Us</NavLink></li>
          <li><NavLink to="/services" className="hover:underline" onClick={toggleMenu}>Service</NavLink></li>
          <li><NavLink to="/contact" className="hover:underline" onClick={toggleMenu}>Contact Us</NavLink></li>
        </ul>
      )}
    </header>
  );
};

export default Header;
