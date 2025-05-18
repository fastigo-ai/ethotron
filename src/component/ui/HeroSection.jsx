import React from "react";
import { useState, useEffect } from "react";
import Banner1 from "../../assets/Banner/banner1.jpg";
import Banner2 from "../../assets/Banner/banner2.jpg";
import Banner3 from "../../assets/Banner/banner3.jpg";
import Banner4 from "../../assets/Banner/banner4.jpg";
// import mobileDevice from '../../assets/Banner/mobileDevice.png'

// Separate slides for desktop and mobile 
const desktopSlides = [
  { image: Banner1 },
  { image: Banner2 },
  { image: Banner3 },
  { image: Banner4 },
];

const mobileSlides = [
  { image: Banner1 },
  { image: Banner2 },
  { image: Banner3 },
  { image: Banner4 },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === activeSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isMobile]);

  const activeSlides = isMobile ? mobileSlides : desktopSlides;

  return (
    <>
      {/* Banner Slideshow */}
      <div className="relative h-[60vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">
        {activeSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <section
              className="h-full bg-cover bg-top md:bg-center flex items-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              
            </section>
          </div>
        ))}

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {activeSlides.map((_, idx) => (
            <span
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                idx === current ? "bg-white" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome to Ethotron Pvt. Ltd.
          </h2>
          <p className="text-gray-700 font-medium">
            Your One-Stop Partner for Automation, Testing, and Precision
            Engineering
          </p>
          <p className="text-gray-700">
            With over 18 years of industry expertise, Ethotron Pvt. Ltd. is a
            leading provider of high-tech solutions for the electronics and
            manufacturing sectors. From SMT and testing instruments to
            custom-built automation systems and turnkey projects, we deliver
            innovation with reliability.
          </p>
          <p className="text-gray-700">
            We offer a comprehensive range of products and services under one
            roof—including Testing Instruments, FCT Fixtures, SMT Consumables,
            ESD Products, SPM Machines, and Automation Solutions—designed to
            meet the evolving needs of modern manufacturing.
          </p>
          <p className="text-gray-700">
            Driven by a skilled team and a passion for engineering excellence,
            Ethotron combines deep industry knowledge with cutting-edge
            technology to empower your production with precision, efficiency,
            and performance.
          </p>
          <p className="font-medium text-blue-700">
            Let’s build smarter, faster, and more reliable systems—together.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <p className="text-lg font-semibold text-gray-800">
            ETHOTRON UPDATES: Running Banner
          </p>
          <img
            src="/your-image-path.png" // Replace with actual image path
            alt="AMETEK Partnership"
            className="w-full rounded shadow-md"
          />
          <div className="bg-blue-900 text-white p-4 text-sm font-medium rounded shadow">
            Partnership with AMETEK Denmark A/S, Denmark
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
