// src/components/ServicesSection.jsx
import React from 'react';
import { Products } from '../../Data/ProductData';


const ProductPage = () => {
  

  return (
    <section className="py-20 px-6 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex  mb-10 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured of Product <br />
              
            </h2>
          </div>
          
        </div>

        <div className="flex flex-wrap gap-4 md:gap-2 justify-between md:justify-center-start">
          {Products.map((Product) => (
            <div
              key={Product.id}
              className="bg-white  w-full sm:w-[300px] p-6 rounded-xl shadow hover:shadow-xl transition-all"
            >
              <img src={Product.icon} alt={Product.title} className="w-auto h-52 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{Product.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{Product.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
