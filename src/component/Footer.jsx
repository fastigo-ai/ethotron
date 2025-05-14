import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-orange-300 text-gray-800 pt-10 mt-6 shadow-md">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        {/* Contact CTA */}
        <div className="bg-black text-center mb-6 p-4 shadow-sm">
          <h2 className="text-2xl font-bold text-white text-sm sm:text-lg md:text-xl lg:text-2xl">
            Get in touch with our experts,&nbsp;
            <a href="tel:+917312422330" className="underline text-white hover:text-blue-500">
              Call +91-000-242 0000
            </a>&nbsp;or&nbsp;
            <a href="mailto:info@example.com" className="underline text-white hover:text-blue-500">
              Write to us
            </a>
          </h2>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-lg pb-10 text-center sm:text-left">
          
          {/* Products Column */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-2">PRODUCTS</h3>
            <ul className="space-y-1">
              <li><Link to="#oscilloscopes" className="hover:underline">Oscilloscopes</Link></li>
              <li><Link to="#meters" className="hover:underline">Meters</Link></li>
              <li><Link to="#dc-power-supplies" className="hover:underline">DC Power Supplies</Link></li>
              <li><Link to="#electronic-loads" className="hover:underline">Electronic Loads</Link></li>
              <li><Link to="#emi-emc-test-solutions-for-emission" className="hover:underline">EMI EMC test Solutions for Emission</Link></li>
              <li><Link to="#work-benches" className="hover:underline">Work Benches</Link></li>
              <li><Link to="#accessories" className="hover:underline">Accessories</Link></li>
            </ul>
          </div>

          {/* More Products */}
          <div className="flex flex-col items-center sm:items-start">
            <ul className="mt-6 sm:mt-0 space-y-1">
              <li><Link to="#generators" className="hover:underline">Generators</Link></li>
              <li><Link to="#analyzers" className="hover:underline">Analyzers</Link></li>
              <li><Link to="#ac-power-supplies" className="hover:underline">AC Power Supplies</Link></li>
              <li><Link to="#safety-testers" className="hover:underline">Safety Testers</Link></li>
              <li><Link to="#emi-emc-test-solutions-for-immunity" className="hover:underline">EMI EMC test Solutions for Immunity</Link></li>
              <li><Link to="#power-amplifier" className="hover:underline">Power Amplifier</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="font-bold mb-2">QUICK LINKS</h3>
            <ul className="space-y-1">
              <li><Link to="/home" className="hover:underline">Home</Link></li>
              <li><Link to="/solutions" className="hover:underline">Solutions</Link></li>
              <li><Link to="/events" className="hover:underline">Events</Link></li>
              <li><Link to="/career" className="hover:underline">Careers</Link></li>
              <li><Link to="/sitemap" className="hover:underline">Sitemap</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col items-center sm:items-start">
            <ul className="mt-6 lg:mt-0 space-y-1">
              <li><Link to="/service-&-support" className="hover:underline">Service & Support</Link></li>
              <li><Link to="/about" className="hover:underline">Company</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
