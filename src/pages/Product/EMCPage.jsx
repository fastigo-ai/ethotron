import React, { useState } from 'react';
import emcProducts from '../../Data/emcProducts'

const EMCPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">EMC / EMI Test Solutions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emcProducts.map((product, index) => (
          <div key={index} className="border rounded-xl p-4 shadow-md bg-white">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-sm text-gray-700">
              {expandedIndex === index
                ? product.fullDescription
                : product.shortDescription}
            </p>
            <button
              className="mt-2 text-blue-600 text-sm hover:underline"
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? 'See less' : 'See more'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EMCPage;
