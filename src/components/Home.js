import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import { FaCarSide, FaBatteryFull } from 'react-icons/fa';
import logo from '../images/logo.jpeg'; // Import the image

const HomePage = () => {
  const [isZoomed, setIsZoomed] = useState(false); 
  const [isLoading, setIsLoading] = useState(true);
  const imageRef = useRef(null);

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (imageRef.current && !imageRef.current.contains(e.target)) {
        setIsZoomed(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans relative">
      <div className="text-center p-8 space-y-8 max-w-3xl mx-auto">
        {/* Logo Section */}
        <div className="flex justify-center">
          {isLoading && <div className="w-40 h-40 bg-gray-400 animate-pulse rounded-lg"></div>}
          <img
            src={logo}
            alt="Company Logo"
            onLoad={handleImageLoad}
            ref={imageRef}
            className={`w-40 h-40 object-cover rounded-lg shadow-lg transition-transform duration-300 cursor-pointer ${
              isZoomed ? 'scale-125' : 'scale-100'
            }`}
            onClick={handleImageClick}
          />
        </div>

        <h1 className="text-4xl font-extrabold text-shadow-md animate__animated animate__fadeIn animate__delay-0.3s sm:text-5xl md:text-6xl flex items-center justify-center space-x-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100">
            Welcome to Sreatt
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl flex items-center space-x-2">
            <FaCarSide className="text-red-500 text-5xl sm:text-6xl md:text-7xl" />
            <FaBatteryFull className="text-green-500 text-5xl sm:text-6xl md:text-7xl" />
          </span>
        </h1>

        <p className="text-sm font-medium text-gray-300 animate__animated animate__fadeIn animate__delay-1.5s sm:text-base md:text-xl">
          High-performance batteries and premium lubricants for every need. Powering your engines and machines with precision.
        </p>

        <div className="mt-6">
          <Link
            to="/products"
            className="bg-green-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300 sm:py-3 sm:px-6"
          >
            Discover Our Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
