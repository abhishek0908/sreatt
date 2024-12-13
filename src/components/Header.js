import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Import the Link component
import logo from '../images/logo1.jpeg';  // Import the logo image

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to toggle the mobile menu

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          <nav className={`hidden md:flex space-x-8 ${isMobileMenuOpen ? 'block' : ''}`}>
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
              to="/services"  // Specific path for Products
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              Products
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
              to="/distributor"  // Use `to` instead of `href`
              className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300"
            >
                Be a Distributor
                </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}  // Toggle the menu on click
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-20 bg-gradient-to-r from-gray-600 via-gray-400 to-gray-300 p-4">
            <div className="flex flex-col items-center space-y-4">
              <Link
                to="/"
                className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)} // Close the menu after clicking a link
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                to="/services"
                className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                to="/distributor"
                className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Be a Distributor
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
