// src/components/ServicesSection.jsx
import React from 'react';
import { Products } from '../../Data/ProductData';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const navigate = useNavigate();

  const handleAllService =()=>{
    // navigate('/productDetail');
  }

  return (
    <section className="py-20 px-6 lg:px-20 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
          <div>
            <p className="text-blue-600 text-sm font-semibold">// Our Product</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured of Product <br />
              {/* <span className="text-blue-600">Elevate Your Business</span> */}
            </h2>
          </div>
          {/* <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700" onClick={handleAllService}>
            View All Services
          </button> */}
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          {Products.map((Product) => (
            <div
              key={Product.id}
              className="bg-white w-full sm:w-[300px] p-6 rounded-xl shadow hover:shadow-xl transition-all"
            >
              <img src={Product.icon} alt={Product.title} className="w-auto h-52 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{Product.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{Product.description}</p>
              {/* <button
                className="text-blue-600 font-medium text-sm flex items-center gap-1"
                onClick={() => navigate(`/product/${Product.id}`)}
              >
                More Details →
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
