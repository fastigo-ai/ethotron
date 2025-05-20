import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import R from '../assets/New folder/medium.png';
import Left from '../assets/New folder/R.jpg';

const Contact = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-6 max-w-7xl mx-auto">
        
        {/* Left Image */}
        <div className="w-full md:w-1/4 mt-8">
          <img
            src={R}
            alt="Building Left"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </div>

        {/* Contact Card */}
        <div className="w-full md:w-1/2">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-orange-500 text-white px-6 py-3 text-lg font-semibold">
              Delhi Office
            </div>
            <div className="p-6 space-y-4 text-gray-700 text-sm leading-relaxed">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-2 text-orange-600" />
                <span>
                  <strong>Ethotron Pvt Ltd</strong>, AHS-514, 5th Floor, Aditya High Street, South Side GT Road Industrial Area,
                  Lal Kuan, Ghaziabad - 201009
                </span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-orange-600" /> +91-9997547656
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-orange-600" /> info@ethotron.com
              </p>

              
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/4 ">
          <img
            src={Left}
            alt="Building Right"
            className="rounded-xl shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
