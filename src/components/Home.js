import React from "react";
import { Link } from "react-router-dom";
import { FaCarSide, FaBatteryFull } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans relative">
      <div className="text-center pt-20 p-6 space-y-6 max-w-3xl mx-auto flex-grow">
        
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold text-shadow-md animate__animated animate__fadeIn animate__delay-0.3s sm:text-5xl md:text-6xl flex items-center justify-center space-x-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100">
            Welcome to Sreatt
          </span>
          <span className="text-4xl sm:text-5xl md:text-6xl flex items-center space-x-2">
            <FaCarSide className="text-red-500 text-5xl sm:text-6xl md:text-7xl animate-bounce" />
            <FaBatteryFull className="text-green-500 text-5xl sm:text-6xl md:text-7xl animate-pulse" />
          </span>
        </h1>

        <p className="text-lg font-medium text-gray-300 animate__animated animate__fadeIn animate__delay-1.5s sm:text-base md:text-xl">
          High-performance batteries and premium lubricants for every need. Powering your engines and machines with precision.
        </p>

        {/* Buttons Section */}
        <div className="mt-6 flex flex-col items-center space-y-4">
          {/* First Button on a new line */}
          <Link
            to="/products"
            className="bg-green-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300 sm:py-3 sm:px-6"
          >
            Discover Our Products
          </Link>

          {/* New line space before warranty buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/view-warranty"
              className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-300 sm:py-3 sm:px-6"
            >
              View Warranty
            </Link>
            <Link
              to="/register-warranty"
              className="bg-yellow-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-yellow-600 transform hover:scale-105 transition duration-300 sm:py-3 sm:px-6"
            >
              Register Warranty
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
