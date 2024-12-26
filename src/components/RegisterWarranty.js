import React, { useState } from 'react';

const VehicleTypeEnum = {
    TWO_WHEELER: "2 Wheeler",
    THREE_WHEELER: "3 Wheeler",
    FOUR_WHEELER: "4 Wheeler",
    TRACTOR: "Tractor",
    INVENTOR: "Inventor",
    LCV: "LCV",
    OTHER: "Other",
};

const RegisterWarranty = () => {
  const [formData, setFormData] = useState({
    dealerName: '',
    address: '',
    customerName: '',
    customerMobileNumber: '',
    vehicleType: '',
    batteryModelNumber: '',
    BatterySerialNumber: '',
    dateOfPurchase: '',
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 5000); // Clear after 5 seconds
  };

  const showErrorMessage = (message) => {
    setErrorMessage(message);
    setTimeout(() => setErrorMessage(''), 5000); // Clear after 5 seconds
  };

  const resetForm = () => {
    setFormData({
      dealerName: '',
      address: '',
      customerName: '',
      customerMobileNumber: '',
      vehicleType: '',
      batteryModelNumber: '',
      BatterySerialNumber: '',
      dateOfPurchase: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await fetch('https://sreatt-backend.vercel.app/api/warranty/register-warranty', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        throw new Error(data.message || 'Failed to register warranty');
      }
      
      showSuccessMessage(data.message || 'Warranty registered successfully!');
      resetForm();
    } catch (error) {
      showErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Shimmer loading component
  const ShimmerEffect = () => (
    <div className="animate-pulse space-y-4">
      <div className="h-10 bg-gray-200 rounded-lg"></div>
      <div className="h-10 bg-gray-200 rounded-lg"></div>
      <div className="h-10 bg-gray-200 rounded-lg"></div>
      <div className="h-10 bg-gray-200 rounded-lg"></div>
    </div>
  );

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="text-center p-8 space-y-8 max-w-3xl mx-auto w-full">
        <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 sm:text-4xl md:text-5xl">
          Register Warranty 🛡️
        </h1>

        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}

        {loading ? (
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto">
            <ShimmerEffect />
          </div>
        ) : (
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
                className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 ${
                  errors.dealerName ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.dealerName && (
                <p className="mt-1 text-sm text-red-600">{errors.dealerName}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter address"
                className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 ${
                  errors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address}</p>
              )}
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
                className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 ${
                  errors.customerName ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.customerName && (
                <p className="mt-1 text-sm text-red-600">{errors.customerName}</p>
              )}
            </div>

            {/* Customer Mobile Number */}
            <div>
              <label htmlFor="customerMobileNumber" className="block text-sm font-medium text-gray-700">
                Customer Mobile Number
              </label>
              <input
                type="tel"
                id="customerMobileNumber"
                name="customerMobileNumber"
                value={formData.customerMobileNumber}
                onChange={handleChange}
                placeholder="Enter 10-digit mobile number"
                pattern="[0-9]{10}"
                className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 ${
                  errors.customerMobileNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.customerMobileNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.customerMobileNumber}</p>
              )}
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
                className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 ${
                  errors.vehicleType ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              >
                <option value="">Select vehicle type</option>
                {Object.values(VehicleTypeEnum).map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.vehicleType && (
                <p className="mt-1 text-sm text-red-600">{errors.vehicleType}</p>
              )}
            </div>

            {/* Battery Model Number */}
            <div>
              <label htmlFor="batteryModelNumber" className="block text-sm font-medium text-gray-700">
                Battery Model Number
              </label>
              <input
                type="text"
                id="batteryModelNumber"
                name="batteryModelNumber"
                value={formData.batteryModelNumber}
                onChange={handleChange}
                placeholder="Enter battery model number"
                className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 ${
                  errors.batteryModelNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.batteryModelNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.batteryModelNumber}</p>
              )}
            </div>

            {/* Battery Serial Number */}
            <div>
              <label htmlFor="BatterySerialNumber" className="block text-sm font-medium text-gray-700">
                Battery Serial Number
              </label>
              <input
                type="text"
                id="BatterySerialNumber"
                name="BatterySerialNumber"
                value={formData.BatterySerialNumber}
                onChange={handleChange}
                placeholder="Enter battery serial number"
                className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 ${
                  errors.BatterySerialNumber ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.BatterySerialNumber && (
                <p className="mt-1 text-sm text-red-600">{errors.BatterySerialNumber}</p>
              )}
            </div>

            {/* Date Of Purchase */}
            <div>
              <label htmlFor="dateOfPurchase" className="block text-sm font-medium text-gray-700">
                Date Of Purchase
              </label>
              <input
                type="date"
                id="dateOfPurchase"
                name="dateOfPurchase"
                value={formData.dateOfPurchase}
                onChange={handleChange}
                className={`mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 ${
                  errors.dateOfPurchase ? 'border-red-500' : 'border-gray-300'
                }`}
                required
              />
              {errors.dateOfPurchase && (
                <p className="mt-1 text-sm text-red-600">{errors.dateOfPurchase}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 rounded-full font-semibold shadow-md transition duration-300
                ${loading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gray-600 hover:bg-gray-700 text-white'}`}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterWarranty;