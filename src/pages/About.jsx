import React from "react";
import Renewable from "../assets/New folder/download.jpg";
import Voltage from "../assets/New folder/Voltage.jpg";
import Motor from "../assets/New folder/Motor.jpg";
import UPS from "../assets/New folder/UPS.jpg";
import Data from "../assets/New folder/Center.jpg";
import Telecom from "../assets/New folder/Telecom.jpg";
import Defense from "../assets/New folder/Defense.webp";
import Welding from "../assets/New folder/Welding.jpg";
import Medical from "../assets/New folder/Medical.jpg";
import Electric from "../assets/New folder/Electric.jpg";

const industries = [
  { title: "Renewables", icon: Renewable },
  { title: "High Voltage", icon: Voltage },
  { title: "Motor Control", icon: Motor },
  { title: "Electric Vehicles", icon: Electric },
  { title: "Data Centers", icon: Data },
  { title: "Defense", icon: Defense },
  { title: "Welding & Heating", icon: Welding },
  { title: "Medical", icon: Medical },
  { title: "Telecom", icon: Telecom },
  { title: "UPS", icon: UPS },
];

const About = () => {
  const DetailsAbout = [
    {
      id: 1,
      title: "our Vision",
      description:
        "To be the global leader in the field of industrial automation and testing solutions, recognized for our commitment to precision, innovation, and customer satisfaction. We envision transforming manufacturing processes through advanced technologies and customized solutions, driving the future of automation and ensuring sustainable growth for our clients and stakeholders.",
    },
    {
      id: 2,
      title: "Our Value Drive Our Vision.",
      description:
        "We build trust and excellence through every action, every solution.Integrity. Trust. Reliability. Perseverance. Responsibility.These are the principles that define who we are and how we work—fueling our commitment to quality, innovation, and long-term partnerships.",
    },
    {
      id: 3,
      title: "Our Social Responsibility.",
      description:
        "Engineering with Purpose. Growing with Responsibility.At Ethotron, we believe that progress is meaningful only when it contributes to the well-being of people, industry, and the planet. As a manufacturer of precision testing fixtures, special purpose machines, and a supplier of advanced testing equipment, we recognize our responsibility to drive innovation sustainably and ethically. We maintain a safe, inclusive, and fair workplace where our employees can grow and contribute meaningfully. Safety and skill development are at the core of our operations.",
    },
  ];
  return (
    <>
      <section className="flex flex-col lg:flex-row bg-white text-gray-800">
        {/* Left Text Content */}
        <div className="lg:w-1/2 bg-white shadow-2xl text-black p-10 flex items-center rounded-2xl mt-4">
          <div>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              Innovation. Reliability. Integration.
            </h2>
            <p className="text-sm md:text-base leading-relaxed">
              Founded by industry experts with over 20 years of experience,{" "}
              <strong>Ethotron Pvt. Ltd.</strong> is a trusted name in the field
              of Surface Mount Technology (SMT), Testing & Measuring
              Instruments, and Industrial Automation Solutions. We specialize in
              delivering comprehensive, end-to-end solutions—from pre-sales
              consultation to post-sales service and complete turnkey project
              execution.
              <br />
              <br />
              At Ethotron, we go beyond just supplying testing equipment. We
              build long-term partnerships by offering a broad portfolio of
              cutting-edge solutions under one roof, including:
              <ul className="list-disc list-inside mt-3 ml-4">
                <li>Testing/Measuring Instruments & FCT Fixtures</li>
                <li>SMT Consumables & Spare Parts</li>
                <li>ESD Products & Equipment</li>
                <li>Special Purpose Machines (SPMs)</li>
                <li>Material Handling Systems & Conveyor Lines</li>
                <li>Hydraulic and Pneumatic Presses</li>
                <li>Custom Automation for Manufacturing & Testing Processes</li>
              </ul>
              <br />
              Our in-house team excels in the design and development of
              automation systems, precision jigs and fixtures, digital displays,
              calibration stations, and more. We support industries such as
              electronics, electricals, appliance manufacturing, and industrial
              engineering with tailored solutions that match unique operational
              needs.
              <br />
              <br />
              Ethotron thrives in a high-mix, low-volume manufacturing
              environment and embraces the challenges of global competition. By
              blending domain expertise with smart use of technology and
              e-commerce, we deliver flexible, scalable, and value-driven
              solutions to customers across India and beyond.
              <br />
              <br />
              At Ethotron Our mission: to empower manufacturers with innovative
              testing solutions, intelligent automation, and unwavering support.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/4">
          <img
            src="/path-to-your-image/about-section-image.png"
            alt="About Ethotron"
            className="w-full h-full object-cover rounded-2xl mt-4"
          />
        </div>
      </section>
      <div className="flex flex-wrap gap-6 justify-center mt-6">
        {DetailsAbout.map((id) => (
          <div
            key={id}
            className="bg-white w-full sm:w-[300px] p-6 rounded-xl shadow hover:shadow-xl transition-all"
          >
            <h3 className="text-lg font-semibold mb-2">{id.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{id.description}</p>
          </div>
        ))}
      </div>
      <section className="px-6 py-12 bg-white">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">
          Powerful Solutions – Powering the Future
        </h2>
        <p className="text-center text-gray-600 mb-10">Industries we serve:</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {industries.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md flex flex-col items-center p-2 hover:shadow-xl transition duration-300 cursor-pointer w-full h-38" // <-- Fixed height
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-12 mb-2 object-contain"
              />
              <p className="text-center font-medium text-gray-800 mt-auto">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
