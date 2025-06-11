
import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaYoutube, FaLinkedin } from 'react-icons/fa';
import Logo from '../assets/logo/logo2.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-amber-100 text-gray-800 py-10 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Logo and Socials */}
        <div>
          <img src={Logo} alt="ethotron" className="h-10 mb-2" />
          
          
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to='/' className="hover:text-blue-600">Home</Link></li>
            <li><Link to='/about' className="hover:text-blue-600">About Us</Link></li>
            <li><Link to='/product' className="hover:text-blue-600">Products</Link></li>
            <li><Link to='/automation' className="hover:text-blue-600">Automation</Link></li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-1">Address</h3>
          <p className="mb-3">
            <strong>Corporate Office:</strong><br />
            AHS-610, 6th Floor,<br />
           High Street, South Side GT Road Industrial Area, Ghaziabad (Delhi-NCR), India - 201009
          </p>
          
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Details</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt className="text-blue-600" />
              <p><a href="tel:+91-9997547656">+91-9997547656</a></p>
              <span></span>
            </li>
            <li className="flex items-center space-x-2">
              <FaWhatsapp className="text-blue-600" />
              <p><a href="https://wa.me/919997547656">+91-9997547656</a></p>
            </li>
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-blue-600" />
              <p><a href={`mailto:${`info@ethotron.com`}?subject`}>info@ethotron.com</a></p>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-xs mt-10 text-gray-500">
        <p>Copyright © 2025 ethotron.com</p>
        <p className="mt-1">Powered by ethotron.com</p>
      </div>
    </footer>
  );
};

export default Footer;
