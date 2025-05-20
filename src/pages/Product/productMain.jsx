import React from "react";
import { Link } from "react-router-dom";
import productCategories from "../../Data/productMain";
import { motion } from "framer-motion";

const bannerImage = "/images/ethotron-banner.jpg";

const DetailsAbout = [
  {
    id: 1,
    title: "Our Vision",
    description:
      "To be the global leader in the field of industrial automation and testing solutions, recognized for our commitment to precision, innovation, and customer satisfaction...",
  },
  {
    id: 2,
    title: "Our Value Drive Our Vision.",
    description:
      "We build trust and excellence through every action, every solution. Integrity. Trust. Reliability. Perseverance. Responsibility...",
  },
  {
    id: 3,
    title: "Our Social Responsibility.",
    description:
      "Engineering with Purpose. Growing with Responsibility. At Ethotron, we believe that progress is meaningful only when it contributes to the well-being of people, industry, and the planet...",
  },
];

const ProductMain = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Top Banner Image */}
      <div className="w-full">
        <img
          src={bannerImage}
          alt="Ethotron Product Banner"
          className="w-full h-64 object-cover rounded-b-xl shadow-md"
        />
      </div>

      {/* Introductory Paragraph */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">
            We offer a comprehensive range of products and services under one roof—including Testing Instruments, FCT Fixtures, SMT Consumables, ESD Products, SPM Machines, and Automation Solutions—designed to meet the evolving needs of modern manufacturing...
          </p>
          <p className="mb-4">
            The systems can be used to test PC/Server/Telecom power supplies, adapters, chargers, backlight inverters, LED power drivers, UPS’s, PV Inverters, EV chargers, and battery packs...
          </p>
          <p>
            Ethotron is a premier supplier of EMC generators, proudly serving the automotive industry and standing among the leaders in testing solutions for IEC standards, telecommunications, medical devices, and electronic components.
          </p>
        </motion.div>
      </div>

      {/* Product Categories Grid */}
      {/* Product Categories Grid */}
<div className="max-w-7xl mx-auto px-6 pb-10">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {productCategories.map((category, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
        className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 p-5 flex flex-col"
      >
        <div className="space-y-4 mb-4">
          <img
            src={category.image1}
            alt={category.title}
            className="w-full h-40 object-contain rounded-md"
          />
          <img
            src={category.image2}
            alt={category.title}
            className="w-full h-40 object-contain rounded-md"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>

        {category.items.length > 0 && (
          <ul className="text-sm text-gray-600 list-disc list-inside mb-4">
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        <div className="mt-auto">
          <Link
            to={category.link}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-md transition-all duration-300"
          >
            More Details
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</div>


      {/* Details About Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-6 py-10">
        {DetailsAbout.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white w-full sm:w-[300px] p-6 rounded-xl shadow hover:shadow-xl hover:bg-blue-50 transition-all duration-300"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductMain;
