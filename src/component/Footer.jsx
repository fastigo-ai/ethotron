import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-orange-400 to-yellow-300 text-gray-900 pt-10 mt-6 shadow-inner relative">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Contact CTA */}
        <div className="bg-black text-center mb-6 p-4 rounded-md shadow-sm">
          <h2 className="text-2xl font-bold text-white">
            Get in touch with our experts,&nbsp;
            <a
              href="tel:+91-9997547656"
              className="underline text-white hover:text-orange-400 transition"
            >
              Call +91-9997547656
            </a>
            &nbsp;or&nbsp;
            <a
              href="info@ethotron.com"
              className="underline text-white hover:text-orange-400 transition"
            >
              Write to us
            </a>
          </h2>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-base pb-16 text-center sm:text-left">
          {/* Products Column */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Products</h3>
            <ul className="space-y-1">
              <li>
                <Link
                  to="#oscilloscopes"
                  className="hover:text-white transition"
                >
                  Oscilloscopes
                </Link>
              </li>
              <li>
                <Link to="#meters" className="hover:text-white transition">
                  Meters
                </Link>
              </li>
              <li>
                <Link
                  to="#dc-power-supplies"
                  className="hover:text-white transition"
                >
                  DC Power Supplies
                </Link>
              </li>
              <li>
                <Link
                  to="#electronic-loads"
                  className="hover:text-white transition"
                >
                  Electronic Loads
                </Link>
              </li>
              <li>
                <Link
                  to="#emi-emc-test-solutions-for-emission"
                  className="hover:text-white transition"
                >
                  EMI EMC for Emission
                </Link>
              </li>
              <li>
                <Link
                  to="#work-benches"
                  className="hover:text-white transition"
                >
                  Work Benches
                </Link>
              </li>
              <li>
                <Link
                  to="#accessories"
                  className="hover:text-white transition"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* More Products */}
          <div>
            <ul className="space-y-1 mt-6 sm:mt-0">
              <li>
                <Link
                  to="#generators"
                  className="hover:text-white transition"
                >
                  Generators
                </Link>
              </li>
              <li>
                <Link
                  to="#analyzers"
                  className="hover:text-white transition"
                >
                  Analyzers
                </Link>
              </li>
              <li>
                <Link
                  to="#ac-power-supplies"
                  className="hover:text-white transition"
                >
                  AC Power Supplies
                </Link>
              </li>
              <li>
                <Link
                  to="#safety-testers"
                  className="hover:text-white transition"
                >
                  Safety Testers
                </Link>
              </li>
              <li>
                <Link
                  to="#emi-emc-test-solutions-for-immunity"
                  className="hover:text-white transition"
                >
                  EMI EMC for Immunity
                </Link>
              </li>
              <li>
                <Link
                  to="#power-amplifier"
                  className="hover:text-white transition"
                >
                  Power Amplifier
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 uppercase">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/home" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="hover:text-white transition"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-white transition">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/sitemap"
                  className="hover:text-white transition"
                >
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Company */}
          <div>
            <ul className="space-y-1 mt-6 lg:mt-0">
              <li>
                <Link
                  to="/service-&-support"
                  className="hover:text-white transition"
                >
                  Service & Support
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  Company
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="absolute mt-6 flex md:items-center space-x-3">
              <Link
                to="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                to="https://wa.me/9100000000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition"
              >
                <FaWhatsapp size={24} />
              </Link>
              <Link
                to="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-700 transition"
              >
                <FaFacebookF size={24} />
              </Link>
              <Link
                to="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500 transition"
              >
                <FaLinkedinIn size={24} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons Bottom Right */}
      {/* <div className="absolute bottom-4 right-6 flex space-x-3">
        <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-pink-600 transition">
          <FaInstagram size={20} />
        </Link>
        <Link to="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-green-600 transition">
          <FaWhatsapp size={20} />
        </Link>
        <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-700 transition">
          <FaFacebookF size={20} />
        </Link>
        <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-500 transition">
          <FaLinkedinIn size={20} />
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
