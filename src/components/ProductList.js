import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch product data from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://sreatt-backend.vercel.app/api/product/products/1");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        console.log(data)
        setProducts(data.products); // Accessing the 'products' array from API response
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductSelect = (id) => {
    navigate(`/products/${id}`); // Navigate to product detail page using product ID
  };

  if (loading) return <p className="text-center text-xl">Loading products...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
        Our Products
      </h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((product) => (
          <div
            key={product._id}
            className="relative group cursor-pointer rounded-lg shadow-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105"
            onClick={() => handleProductSelect(product._id)}
          >
            <div className="relative">
              <img
                src={product.images?.[0] || "https://via.placeholder.com/150"} // Fallback image
                alt={product.productName}
                className="w-full h-56 object-cover object-center rounded-t-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white space-y-3">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                {product.productName}
              </h2>
              <p className="text-gray-500 truncate">{product.productDescription}</p>
              {/* <p className="font-bold text-lg text-blue-700">₹{product.price}</p> */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents div click from triggering navigation
                  handleProductSelect(product._id);
                }}
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
