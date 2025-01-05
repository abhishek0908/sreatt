// src/components/ProductList.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { products } from "../productsData"; // Import the products data

const ProductList = () => {
  const navigate = useNavigate();

  const handleProductSelect = (id) => {
    navigate(`/products/${id}`); // Navigate to product detail page using the product ID
  };

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
        Our Products
      </h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105"
            onClick={() => handleProductSelect(product.id)} // Correct navigation
          >
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover object-center rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white space-y-3">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {product.name}
              </h2>
              <button
                onClick={() => handleProductSelect(product.id)}
                className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
              >
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
