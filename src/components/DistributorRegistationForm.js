import React, { useState } from "react";
import ShimmerLoader from './ShimmerLoader';  // Import the ShimmerLoader component

const DistributorRegistration = () => {
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState(null);
  const [loading, setLoading] = useState(false);  // State for loader visibility

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "https://sreatt-backend.vercel.app";
  console.log(`API BASE URL${API_BASE_URL}`)
  console.log(API_BASE_URL)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Show loader when the form is submitted

    const formData = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      address: e.target.address.value,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/distributor/apply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("Registration Successful!");
        setMessageType("success");
      } else {
        setMessage(result.details[0].message || "Something went wrong.");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred while submitting the form.");
      setMessageType("error");
    } finally {
      setLoading(false);  // Hide loader once the response is received
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <div className="text-center p-8 space-y-10 max-w-3xl mx-auto">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-400 to-gray-100 text-shadow-md animate__animated animate__fadeIn animate__delay-1s sm:text-5xl md:text-6xl">
          Distributor Registration
        </h1>
        <p className="text-base font-medium text-gray-300 animate__animated animate__fadeIn animate__delay-1.5s sm:text-lg md:text-xl">
          Join our network of trusted distributors. Fill out the form below to get started and partner with us today.
        </p>

        <form
          className="space-y-6 bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-xl"
          onSubmit={handleSubmit}
        >
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-100 sm:text-base md:text-lg">First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-base"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-100 sm:text-base md:text-lg">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-base"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-100 sm:text-base md:text-lg">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-base"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-100 sm:text-base md:text-lg">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-base"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-100 sm:text-base md:text-lg">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Enter your address"
              className="w-full px-4 py-2 mt-1 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-base"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-full font-semibold shadow-md hover:bg-green-600 transform hover:scale-105 transition duration-300 sm:py-3 sm:px-6"
            >
              Register
            </button>
          </div>
        </form>

        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-10">
            <ShimmerLoader /> {/* Display shimmer loader */}
          </div>
        )}

        {/* Display Messages */}
        {message && (
          <div
            className={`mt-4 p-4 rounded-lg font-medium ${
              messageType === "success" ? "bg-green-500" : "bg-red-500"
            } text-white`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default DistributorRegistration;
