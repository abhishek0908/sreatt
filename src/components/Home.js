import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import { FaCar, FaCarBattery } from 'react-icons/fa';

const HomePage = () => {
  const [isZoomed, setIsZoomed] = useState(false); 
  const [isLoading, setIsLoading] = useState(true); // Track image loading state
  const imageRef = useRef(null);

  const handleImageClick = (e) => {
    e.stopPropagation(); 
    setIsZoomed(!isZoomed); 
  };

  const handleImageLoad = () => {
    setIsLoading(false); // Set loading to false once image has loaded
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (imageRef.current && !imageRef.current.contains(e.target)) {
        setIsZoomed(false); 
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans relative">
      <div className="text-center p-8 space-y-8 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-shadow-md animate__animated animate__fadeIn animate__delay-0.3s sm:text-5xl md:text-6xl flex items-center justify-center space-x-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100">
            Welcome to Sreatt
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl flex items-center space-x-2">
            <FaCar className="text-red-500 text-5xl sm:text-6xl md:text-7xl" />
            <FaCarBattery className="text-green-500 text-5xl sm:text-6xl md:text-7xl" />
          </span>
        </h1>

        <p className="text-sm font-medium text-gray-300 animate__animated animate__fadeIn animate__delay-1.5s sm:text-base md:text-xl">
          High-performance batteries and premium lubricants for every need. Powering your engines and machines with precision.
        </p>

        <div className="mt-8 w-full max-w-full h-auto">
          {/* Shimmer effect */}
          {isLoading && (
            <div className="w-full h-auto bg-gray-300 animate-pulse rounded-xl shadow-xl">
              {/* Shimmer placeholder can be adjusted as needed */}
            </div>
          )}

          {/* Image with onLoad handler */}
          <img
            src="/media/our_products.jpeg" 
            alt="Our Products"
            ref={imageRef} 
            className={`w-full h-auto object-contain rounded-xl shadow-xl transition-transform duration-300 ease-in-out ${isZoomed ? 'transform scale-125' : ''}`}
            onClick={handleImageClick} 
            onLoad={handleImageLoad} // Handle image load
          />
        </div>

        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4CAF50"
            viewBox="0 0 24 24"
            className="w-8 h-8 animate__animated animate__zoomIn animate__delay-2s sm:w-10 sm:h-10 md:w-12 md:h-12"
          >
            <path d="M12 2C8.134 2 2 8.134 2 12s6.134 10 10 10 10-6.134 10-10S15.866 2 12 2zm0 18c-3.866 0-8-4.134-8-8s4.134-8 8-8 8 4.134 8 8-4.134 8-8 8z" />
            <path d="M11 14.071c.586.156 1.2.263 1.836.318.34-.587.775-1.161 1.318-1.736a8.917 8.917 0 0 0 1.847-3.322A6.931 6.931 0 0 0 12 4.937V13a8.014 8.014 0 0 1-.09 1.071z" />
          </svg>
        </div>

        <div className="mt-6">
          <Link
            to="/products"
            className="bg-green-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300 sm:py-3 sm:px-6"
          >
            Discover Our Products
          </Link>
        </div>

        <div className="mt-6 text-xs text-gray-100 animate__animated animate__fadeIn animate__delay-2s sm:text-sm md:text-lg">
          <p>Your trusted source for top-quality batteries and lubricants, designed to keep your machines running smoothly.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
