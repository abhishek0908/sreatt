import React, { useState } from 'react';
import Modal from 'react-modal';

const ViewWarranty = () => {
  const [formData, setFormData] = useState({
    email: '',
    serial: '',
  });

  const [warrantyData, setWarrantyData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryParam = formData.serial
      ? `serialNumber=${formData.serial}`
      : `phoneNumber=${formData.email}`;

    try {
      const response = await fetch(`https://sreatt-backend.vercel.app/api/warranty/view-warranty?${queryParam}`, {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setWarrantyData(data);
        setErrorMessage(null); // Clear any previous error
        setIsModalOpen(true); // Open modal
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'No warranty data found.');
        setWarrantyData(null);
      }
    } catch (error) {
      setErrorMessage('Error: Could not connect to the server.');
      setWarrantyData(null);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setWarrantyData(null);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="text-center p-8 space-y-8 max-w-3xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 sm:text-4xl md:text-5xl">
          View Warranty 📜
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg text-gray-800 space-y-6 w-full max-w-md mx-auto">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Registered Phone Number
            </label>
            <input
              type="tel"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your registered phone number"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <div>
            <label htmlFor="serial" className="block text-sm font-medium text-gray-700">
              Serial Number
            </label>
            <input
              type="text"
              id="serial"
              value={formData.serial}
              onChange={handleChange}
              placeholder="Enter serial number"
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-gray-700 transition duration-300"
          >
            Search
          </button>
        </form>

        {/* Display Result */}
        {errorMessage && <div className="mt-4 p-4 bg-red-500 rounded-lg">{errorMessage}</div>}

        <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 p-8 rounded-lg shadow-lg max-w-md mx-auto mt-20" overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          {warrantyData && (
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-4">Warranty Details</h2>
              <div className="space-y-2">
                <p><strong>Dealer Name:</strong> {warrantyData.data.dealerName}</p>
                <p><strong>Address:</strong> {warrantyData.data.address}</p>
                <p><strong>Customer Name:</strong> {warrantyData.data.customerName}</p>
                <p><strong>Phone Number:</strong> {warrantyData.data.customerMobileNumber}</p>
                <p><strong>Vehicle Type:</strong> {warrantyData.data.vehicleType}</p>
                <p><strong>Battery Model:</strong> {warrantyData.data.batteryModelNumber}</p>
                <p><strong>Serial Number:</strong> {warrantyData.data.BatterySerialNumber}</p>
                <p><strong>Date of Purchase:</strong> {new Date(warrantyData.data.dateOfPurchase).toLocaleDateString()}</p>
              </div>
              <button onClick={closeModal} className="mt-6 bg-red-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-red-600 transition duration-300">
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
};

export default ViewWarranty;

// Add this to ensure the modal is properly accessible
Modal.setAppElement('#root');
