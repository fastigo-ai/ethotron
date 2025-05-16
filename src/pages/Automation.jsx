import React from "react";

const capabilities = [
  {
    title: "🔧 Design & Development of Special Purpose Machines (SPMs)",
    text: `We build custom machines tailored to unique applications—eliminating inefficiencies, reducing manual intervention, and optimizing repetitive tasks. From control systems to mechanical integration, our SPMs are built for precision and performance.`
  },
  {
    title: "🔄 Automation of Production & Testing Lines",
    text: `We offer complete automation for:
- Assembly lines
- Product testing processes
- Testing/Measuring and calibration systems

Our automation enhances throughput, improves quality control, and reduces error rates—especially in high-mix, low-volume environments.`
  },
  {
    title: "🛠️ Hydraulic & Pneumatic Systems",
    text: `Our in-house expertise covers the design and manufacturing of:
- Hydraulic presses
- Pneumatic actuation systems
- Allied machines for force-based applications

These are integrated seamlessly into broader production or testing lines, offering smooth, durable, and low-maintenance operation.`
  },
  {
    title: "🚚 Material Handling Systems",
    text: `Efficient internal logistics are critical to any production setup. We provide:
- Belt, Roller, Chain, and Slate Conveyors
- Lifters, Turntables, and Transfer Units
- Fully integrated systems that support continuous production flow`
  },
  {
    title: "🔄 Manual & Automated Lines for Electronics & Appliance Manufacturing",
    text: `We engineer production lines (both manual and fully automated) for:
- PCB assembly
- Mobile, Television and AC manufacturing
- Other consumer electronic appliances

These lines are built to maximize space utilization, improve ergonomics, and support modular expansion.`
  },
  {
    title: "🧰 Workstations, Jigs, Fixtures & Calibration Tables",
    text: `We design and fabricate:
- Custom workstations tailored for operator comfort and productivity
- Visual aids & digital displays for real-time process visibility
- High-accuracy jigs, pallets, and fixtures that ensure repeatable quality
- Testing and calibration tables integrated with tools, sensors, and automation for accurate performance checks`
  }
];

const Automation = () => {
  return (
    <section className="bg-gray-50 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">
          Automation & Industrial Engineering Excellence
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-4xl mx-auto">
          Empowering Manufacturing Through Smart, Scalable, and Customized Automation Solutions
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="bg-white hover:bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2 whitespace-pre-line">
                {cap.title}
              </h3>
              <p className="text-gray-700 whitespace-pre-line">{cap.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Why Choose Ethotron for Automation?
          </h3>
          <ul className="text-gray-700 list-disc pl-5 space-y-2 text-lg">
            <li>
              <strong>Custom-Built Solutions:</strong> Every automation system is designed around your specific process and product requirements.
            </li>
            <li>
              <strong>High Engineering Standards:</strong> Our machines are built for long life, precision control, and operational reliability.
            </li>
            <li>
              <strong>Seamless Integration:</strong> We ensure that each system works harmoniously with your existing production infrastructure.
            </li>
            <li>
              <strong>Future-Ready Designs:</strong> Scalable automation systems that can adapt to evolving production needs and technologies.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Automation;
