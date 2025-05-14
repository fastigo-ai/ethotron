import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full">
      {/* Main Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white flex justify-between items-center px-6 py-4 shadow z-50">
        {/* Logo */}
        <div className="flex items-center flex-col ">
          {/* <div className="bg-blue-500 p-2 rounded"> */}
          <div className="text-xl font-bold text-gray-800">
            <Link to="/">ETHOTRON</Link>
          </div>
          {/* </div> */}
          <h1 className="">
            <span className="text-black text-sm">Partner For Every Test</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link to="/" className="text-blue-600 underline">
            Home
          </Link>
          <Link to="/about" onClick={handleMobileLinkClick}>
            About Us
          </Link>
          <Link to="/product" onClick={handleMobileLinkClick}>
            Product
          </Link>
          <Link to="/automation" onClick={handleMobileLinkClick}>
            Automation
          </Link>
          <Link to="/career" onClick={handleMobileLinkClick}>
            Career
          </Link>
          <Link to="/contact" onClick={handleMobileLinkClick}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(true)}>
            <FaBars className="text-2xl text-gray-700" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)}>
              <FaTimes className="text-xl text-gray-700" />
            </button>
          </div>
          <nav className="flex flex-col gap-4 px-6 text-gray-700 font-medium">
            <Link to="/" className="text-blue-600 underline">
              Home
            </Link>
            <Link to="/about" onClick={handleMobileLinkClick}>
              About Us
            </Link>
            <Link to="/product" onClick={handleMobileLinkClick}>
              Product
            </Link>
            <Link to="/automation" onClick={handleMobileLinkClick}>
              Automation
            </Link>
            <Link to="/career" onClick={handleMobileLinkClick}>
              Career
            </Link>
            <Link to="/contact" onClick={handleMobileLinkClick}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
