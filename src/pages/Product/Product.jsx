
import React from 'react';
import { Products } from '../../Data/ProductData';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

const ProductPage = () => {
  const navigate = useNavigate()
  const handleclick = ()=>{
    navigate('/product');
  }
  return (
    <section className="py-20 px-6 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0">
           
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured of Product <br />
              
            </h2>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 cursor-pointer" onClick={handleclick}>
            View All Services
          </button>
        </div>

        {/* Product Cards */}
       <div className="flex flex-wrap gap-6 justify-center">
  {Products.map((product, index) => (
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
      <img
        src={product.icon}
        alt={product.title}
        className="w-full h-52 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
    </motion.div>
  ))}
</div>

        
      </div>
    </section>
  );
};

export default ProductPage;
