import React, { useState } from 'react';

const BatteryWarrantyForm = () => {
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phoneNumber: '',
    purchaseDate: '',
    serialNumber: '',
    warrantyStartDate: '',
    warrantyPeriod: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.customerName ||
      !formData.email ||
      !formData.phoneNumber ||
      !formData.purchaseDate ||
      !formData.serialNumber ||
      !formData.warrantyStartDate ||
      !formData.warrantyPeriod
    ) {
      setMessage('Please fill in all the fields.');
      return;
    }

    // If valid, display success message (could be used for API submission)
    setMessage('Warranty form submitted successfully!');
  };

  return (
    <main className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="w-full max-w-md p-6 bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Battery Warranty Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="customerName" className="text-lg">Customer Name</label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-lg">Phone Number</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="purchaseDate" className="text-lg">Purchase Date</label>
            <input
              type="date"
              id="purchaseDate"
              name="purchaseDate"
              value={formData.purchaseDate}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="serialNumber" className="text-lg">Battery Serial Number</label>
            <input
              type="text"
              id="serialNumber"
              name="serialNumber"
              value={formData.serialNumber}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="warrantyStartDate" className="text-lg">Warranty Start Date</label>
            <input
              type="date"
              id="warrantyStartDate"
              name="warrantyStartDate"
              value={formData.warrantyStartDate}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="warrantyPeriod" className="text-lg">Warranty Period (in months)</label>
            <input
              type="number"
              id="warrantyPeriod"
              name="warrantyPeriod"
              value={formData.warrantyPeriod}
              onChange={handleChange}
              className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>

        {message && (
          <p className={`mt-4 text-lg ${message.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
            {message}
          </p>
        )}
      </div>
    </main>
  );
};

export default BatteryWarrantyForm;
