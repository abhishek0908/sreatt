import React from 'react';
import { Link } from 'react-router-dom';  // Import the Link component
import logo from '../images/logo1.jpeg';  // Import the logo image

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-300 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-16 w-16 rounded-full mr-3"  // Adjusted size and rounded
            />
            <span className="text-white text-3xl font-extrabold tracking-wide text-shadow-md">
              Sreatt
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"  // Specific path for Home
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"  // Specific path for About
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              About
            </Link>

            <Link
              to="/services"  // Specific path for Services
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              Services
            </Link>

            <Link
              to="/contact"  // Specific path for Contact
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Button */}
          <div className="hidden md:block">
            <Link
              to="#get-started"  // Use `to` instead of `href`
              className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
