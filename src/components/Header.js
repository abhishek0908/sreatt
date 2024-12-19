import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import logo from '../images/logo1.jpeg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);  // Store the user role
  const navigate = useNavigate(); // For navigation after logout or role-based redirection

  // Check authentication status and user role on initial render and whenever the component re-renders
  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');  // Assuming role is stored in localStorage

    setIsAuthenticated(!!token);  // If token exists, user is authenticated
    setUserRole(role);  // Set the user role from localStorage

    // Redirect if the user is already signed in and tries to go to the /signin page
    if (token && role) {
      if (window.location.pathname === '/signin') {
        if (role === 'admin') {
          navigate('/admin');  // Redirect to admin page if the role is admin
        } else if (role === 'distributor') {
          navigate('/distributor');  // Redirect to distributor page if the role is distributor
        }
      }
    }
  }, [navigate]);  // Empty dependency array ensures this effect runs once when the component mounts

  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to handle logout and redirect to SignIn page
  const handleLogout = () => {
    localStorage.removeItem('token');  // Clear token from localStorage
    localStorage.removeItem('role');  // Clear role from localStorage
    setIsAuthenticated(false);  // Update authentication state
    setUserRole(null);  // Clear user role
    navigate('/signin');  // Redirect to the Sign-In page
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
              className="h-16 w-16 rounded-full mr-3"
            />
            <span className="text-white text-3xl font-extrabold tracking-wide text-shadow-md">
              Sreatt
            </span>
          </div>

          {/* Navigation Links */}
          <nav className={`hidden md:flex space-x-8 ${isMobileMenuOpen ? 'block' : ''}`}>
            <Link
              to="/"
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg font-medium hover:text-green-400 hover:scale-105 transform transition duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-red-600 transform hover:scale-105 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/signin"
                className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-300"
              >
                Sign In
              </Link>
            )}
            {/* Render "Be a Distributor" button only if the user is not authenticated */}
            {!isAuthenticated && (
              <Link
                to="/register"
                className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300"
              >
                Be a Distributor
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
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
                onClick={() => setIsMobileMenuOpen(false)}
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
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="bg-red-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-red-600 transform hover:scale-105 transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/signin"
                  className="bg-blue-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              )}
              {/* Render "Be a Distributor" only if the user is not authenticated */}
              {!isAuthenticated && (
                <Link
                  to="/register"
                  className="bg-green-500 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Be a Distributor
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
