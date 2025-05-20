import React from "react";
import { motion } from "framer-motion";
const Vision = () => {
  const Details = [
    {
      id: 1,
      title: "our Mission",
      description:
        "At Ethotron Pvt. Ltd., our mission is to be a trusted partner in providing innovative, reliable, and high-performance solutions that empower our customers. We aim to be at the forefront of technology by delivering cutting-edge automation, testing, and manufacturing solutions, ensuring operational excellence and fostering long-term partnerships based on trust and value.",
    },
    {
      id: 2,
      title: "our Vision",
      description:
        "To be the global leader in the field of industrial automation and testing solutions, recognized for our commitment to precision, innovation, and customer satisfaction. We envision transforming manufacturing processes through advanced technologies and customized solutions, driving the future of automation and ensuring sustainable growth for our clients and stakeholders.",
    },
    {
      id: 3,
      title: "Why US",
      description:
        "At Ethotron Pvt. Ltd., we stand out for our commitment to quality, affordability, and reliability. We offer a comprehensive range of high-performance products, each carefully designed to meet the most demanding industry standards. Our Objective: We are committed to consistently fulfilling our customers’ unique requirements with 100% quality assurance, offering the best value at the most competitive prices.",
    },
  ];
  return (
    <div>
      <div className="flex flex-wrap gap-6 justify-center mt-6 mb-6">
        {Details.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white hover:bg-blue-100 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer w-full sm:w-[300px]"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
