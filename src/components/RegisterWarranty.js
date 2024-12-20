import React from 'react';

const RegisterWarranty = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="text-center p-8 space-y-8 max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 sm:text-4xl md:text-5xl">
          Register Warranty 🛡️
        </h1>

        {/* Form */}
        <form className="bg-white p-6 rounded-lg shadow-lg text-gray-800 space-y-6 w-full max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="product"
              placeholder="Enter product name"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="serial" className="block text-sm font-medium text-gray-700">
              Serial Number
            </label>
            <input
              type="text"
              id="serial"
              placeholder="Enter serial number"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <div>
            <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">
              Purchase Date
            </label>
            <input
              type="date"
              id="purchaseDate"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-gray-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterWarranty;
