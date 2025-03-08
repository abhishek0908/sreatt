import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://sreatt-backend.vercel.app/api/product/product/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) {
    return <div className="text-center text-xl font-semibold text-gray-700">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-xl font-semibold text-red-600">{error}</div>;
  }

  if (!product) {
    return <div className="text-center text-xl font-semibold text-red-600">Product not found</div>;
  }

  return (
    <div className="p-6 lg:p-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 bg-gray-50 rounded-lg shadow-lg">
      {/* Left Side: Product Image */}
      <div className="lg:w-1/2 flex justify-center mb-4 lg:mb-0">
        <img
          src={product.images?.[0]}
          alt={product.productName}
          className="w-full lg:w-96 h-auto object-cover rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      {/* Right Side: Product Details */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800 tracking-wide">{product.productName}</h1>
        <p className="text-lg text-gray-600 leading-relaxed">{product.productDescription}</p>
        <div className="mt-4 text-gray-700">
          <p><strong>Category:</strong> {product.category}</p>
          {/* <p><strong>Price:</strong> ${product.price}</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;