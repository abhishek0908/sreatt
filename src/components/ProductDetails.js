// src/components/ProductDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../productsData"; // Import the products data

const ProductDetail = () => {
  const { productId } = useParams(); // Get the productId from the URL
  const product = products.find((prod) => prod.id === parseInt(productId)); // Find the product by ID

  if (!product) {
    return <div className="text-center text-xl font-semibold text-red-600">Product not found</div>; // Return "Product not found" if no product is found
  }

  return (
    <div className="p-6 lg:p-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 bg-gray-50 rounded-lg shadow-lg">
      {/* Left Side: Product Image */}
      <div className="lg:w-1/2 flex justify-center mb-4 lg:mb-0">
        <img
          src={product.image}
          alt={product.name}
          className="w-full lg:w-96 h-auto object-cover rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      {/* Right Side: Product Details */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">{product.name}</h1>

        {/* Product Description */}
        <p className="text-lg text-gray-600 leading-relaxed">
          {product.description}
        </p>

        {/* Additional Info (Stock info) */}
        <div className="mt-4 text-gray-700">
          <p><strong>Stock:</strong> {product.stock} units available</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
