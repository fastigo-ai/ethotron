import React from 'react';
// import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
//   const navigate = useNavigate();

//   const handleViewServices = () => {
//     navigate('/service');
//   };

  return (
    <>
    <section
      className="relative bg-cover bg-center min-h-[90vh] flex  items-start"
      style={{
        backgroundImage: "url('/images/hero-bg.png')", // Save the image as 'public/images/hero-bg.png'
      }}
    >
      <div className="absolute inset-0 bg-[#1f2937]/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-2 lg:px-12 py-20 text-white">
        {/* <p className="text-blue-400 text-sm font-medium mb-2"></p> */}
        <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
          Trusted in Testing
        </h1>
        <p className="text-gray-300 max-w-xl mb-8">
            The Critical problem we solve is the optimum design, development, and ongoing <br />support of your solution. Because test solution can have hidden costs.
        </p>
        {/* <div className="flex flex-wrap items-center gap-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full shadow transition duration-300">
            Explore More →
          </button>
          <button
            className="text-white underline underline-offset-4 hover:text-blue-300 transition"
            onClick={handleViewServices}
          >
            View All Services
          </button>
        </div> */}
      </div>
    </section>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 border">
      {/* Left Column */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Welcome to Ethotron Pvt. Ltd.</h2>
        <p className="font-medium text-gray-700">
          Your One-Stop Partner for Automation, Testing, and Precision Engineering
        </p>
        <p>
          With over 18 years of industry expertise, Ethotron Pvt. Ltd. is a leading provider of high-tech
          solutions for the electronics and manufacturing sectors. From SMT and testing instruments to
          custom-built automation systems and turnkey projects, we deliver innovation with reliability.
        </p>
        <p>
          We offer a comprehensive range of products and services under one roof—including Testing Instruments,
          FCT Fixtures, SMT Consumables, ESD Products, SPM Machines, and Automation Solutions—designed to meet
          the evolving needs of modern manufacturing.
        </p>
        <p>
          Driven by a skilled team and a passion for engineering excellence, Ethotron combines deep industry
          knowledge with cutting-edge technology to empower your production with precision, efficiency, and
          performance.
        </p>
        <p className="font-medium text-blue-700">
          Let’s build smarter, faster, and more reliable systems—together.
        </p>
      </div>

      {/* Right Column */}
      <div className="border-l md:pl-6">
        <p className="font-semibold mb-2">ETHOTRON UPDATES: Running Banner</p>
        <img
          src="/your-image-path.png" // Replace with actual image path or import
          alt="AMETEK Partnership"
          className="w-full max-w-md mx-auto"
        />
        <div className="bg-blue-900 text-white p-3 mt-2 text-sm font-medium">
          Partnership with AMETEK Denmark A/S, Denmark
        </div>
      </div>
    </div>
    </>
  );
};

export default HeroSection;
