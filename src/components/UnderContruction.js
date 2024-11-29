import React from "react";
import logo from '../images/logo.jpeg';

const UnderConstruction = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="text-center p-8 space-y-8 max-w-3xl mx-auto">
        {/* Header with metallic theme */}
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 text-shadow-md animate__animated animate__fadeIn animate__delay-1s">
          🚧 Page Under Construction 🚧
        </h1>

        {/* Description */}
        <p className="text-xl font-medium text-gray-300 animate__animated animate__fadeIn animate__delay-1.5s">
          We're working hard to bring this page to life. Stay tuned for something amazing!
        </p>

        {/* Image Section */}
        <div className="mt-12 relative flex justify-center items-center p-4">
        <img
  src={logo}
  alt="Under Construction"
  className="w-[220px] h-[220px] rounded-3xl border-2 border-gray-100 shadow-2xl animate__animated animate__bounceIn animate__delay-1s transform hover:scale-105 transition-transform duration-300 ease-in-out"
  style={{ objectFit: "contain" }}
/>

          {/* Green leaf accent */}
          <div className="absolute bottom-6 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#4CAF50"  
              viewBox="0 0 24 24"
              className="w-12 h-12 animate__animated animate__zoomIn animate__delay-2s"
            >
              <path d="M12 2C8.134 2 2 8.134 2 12s6.134 10 10 10 10-6.134 10-10S15.866 2 12 2zm0 18c-3.866 0-8-4.134-8-8s4.134-8 8-8 8 4.134 8 8-4.134 8-8 8z" />
              <path d="M11 14.071c.586.156 1.2.263 1.836.318.34-.587.775-1.161 1.318-1.736a8.917 8.917 0 0 0 1.847-3.322A6.931 6.931 0 0 0 12 4.937V13a8.014 8.014 0 0 1-.09 1.071z" />
            </svg>
          </div>
        </div>

        {/* Message */}
        <div className="mt-6 text-lg text-gray-400 animate__animated animate__fadeIn animate__delay-2s">
          <p>Thanks for your patience. We'll be back shortly!</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 w-full text-center text-sm font-medium text-gray-500">
        <p>© 2024 Sreatt. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default UnderConstruction;
