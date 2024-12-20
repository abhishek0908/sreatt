import React, { useState } from 'react';

const RegisterWarranty = () => {
  const [formData, setFormData] = useState({
    dealerName: '',
    location: '',
    customerName: '',
    customerMobile: '',
    vehicleType: '',
    batteryModel: '',
    batterySerial: '',
    purchaseDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission (e.g., send data to backend)
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="text-center p-8 space-y-8 max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 sm:text-4xl md:text-5xl">
          Register Warranty 🛡️
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg text-gray-800 space-y-6 w-full max-w-md mx-auto">
          
          {/* Dealer Name */}
          <div>
            <label htmlFor="dealerName" className="block text-sm font-medium text-gray-700">
              Dealer Name
            </label>
            <input
              type="text"
              id="dealerName"
              name="dealerName"
              value={formData.dealerName}
              onChange={handleChange}
              placeholder="Enter dealer name"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Customer Name */}
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">
              Customer Name
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Enter customer name"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Customer Mobile Number */}
          <div>
            <label htmlFor="customerMobile" className="block text-sm font-medium text-gray-700">
              Customer Mobile Number
            </label>
            <input
              type="tel"
              id="customerMobile"
              name="customerMobile"
              value={formData.customerMobile}
              onChange={handleChange}
              placeholder="Enter customer mobile number"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
              Vehicle Type
            </label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            >
              <option value="">Select vehicle type</option>
              <option value="2wheeler">2 Wheeler</option>
              <option value="3wheeler">3 Wheeler</option>
              <option value="4wheeler">4 Wheeler</option>
              <option value="tractor">Tractor</option>
              <option value="inverter">Inverter</option>
              <option value="LCV">LCV</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Battery Model */}
          <div>
            <label htmlFor="batteryModel" className="block text-sm font-medium text-gray-700">
              Battery Model Number
            </label>
            <input
              type="text"
              id="batteryModel"
              name="batteryModel"
              value={formData.batteryModel}
              onChange={handleChange}
              placeholder="Enter battery model number"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Battery Serial Number */}
          <div>
            <label htmlFor="batterySerial" className="block text-sm font-medium text-gray-700">
              Battery Serial Number
            </label>
            <input
              type="text"
              id="batterySerial"
              name="batterySerial"
              value={formData.batterySerial}
              onChange={handleChange}
              placeholder="Enter battery serial number"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Date Of Purchase */}
          <div>
            <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700">
              Date Of Purchase
            </label>
            <input
              type="date"
              id="purchaseDate"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
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
