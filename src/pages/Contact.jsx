import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import R from '../assets/product/R.jpg'

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center gap-2 p-4 bg-gray-50">
      {/* Left Image */}
      <img
        src={R} // Replace with your actual image path
        alt="Building Left"
        className="w-full md:w-1/4 object-cover rounded-md shadow"
      />

      {/* Contact Card */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="bg-white shadow border rounded-md text-sm w-full max-w-md">
          <div className="bg-orange-500 text-white px-4 py-2 font-semibold">
            Delhi Office
          </div>
          <div className="p-4 space-y-2">
            <p className="flex"><MapPin className="w-4 h-4 mt-1 mr-2" /> Ethotron Pvt Ltd
              , AHS-514, 5th Floor, Aditya High Street, South Side GT Road Industrial Area
              Lal kuan, Ghaziabad-201009
            </p>
            <p className="flex"><Phone className="w-4 h-4 mr-2" /> +91-9997547656</p>
            {/* <p className="flex"><Phone className="w-4 h-4 mr-2" /> 011-26950011</p> */}
            <p className="flex"><Mail className="w-4 h-4 mr-2" /> info@ethotron.com</p>
            <div className="pt-2 border-t text-xs">
              <p><strong>Area Manager:</strong> Mr. Sunil Grover</p>
              <p><strong>Email:</strong> sunilgrover@aimil.com</p>
              <p><strong>State/UT Catered:</strong> Delhi & NCR, Haryana (except Ambala & Panchkula), Rajasthan, Uttar Pradesh, Uttarakhand</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <img
        src={R} // Replace with your actual image path
        alt="Building Right"
        className="w-full md:w-1/4 object-cover rounded-md shadow"
      />
    </div>
  );
};

export default Contact;
