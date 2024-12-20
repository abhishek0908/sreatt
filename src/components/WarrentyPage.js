import React from 'react';
import { Link } from 'react-router-dom';

const WarrantyPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="text-center p-8 space-y-8 max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 animate__animated animate__fadeIn animate__delay-1s sm:text-4xl md:text-5xl">
          Warranty Services 🛠️
        </h1>

        {/* Description */}
        <p className="text-sm font-medium text-gray-200 animate__animated animate__fadeIn animate__delay-1.5s sm:text-base md:text-lg">
          Register your product warranty and access your warranty details easily. We've got you covered!
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
          <Link
            to="/register-warranty"
            className="bg-gray-700 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-gray-800 transform hover:scale-105 transition duration-300 sm:py-3 sm:px-6"
          >
            Register Warranty
          </Link>
          <Link
            to="/view-warranty"
            className="bg-gray-600 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-gray-700 transform hover:scale-105 transition duration-300 sm:py-3 sm:px-6"
          >
            View Warranty
          </Link>
        </div>

        {/* Warranty Illustration */}
        <div className="mt-12 relative flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            className="w-32 h-32 animate__animated animate__zoomIn animate__delay-2s sm:w-40 sm:h-40 md:w-48 md:h-48"
          >
            <path d="M12 2C8.134 2 2 8.134 2 12s6.134 10 10 10 10-6.134 10-10S15.866 2 12 2zm-1 15v-4H9v-2h2V9c0-1.105.895-2 2-2h2v2h-2v2h2v2h-2v4h-2zm-3.707-7.293a1 1 0 011.414 0L12 12.586l2.293-2.293a1 1 0 011.414 1.414L13.414 14l2.293 2.293a1 1 0 01-1.414 1.414L12 15.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 14l-2.293-2.293a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WarrantyPage;
