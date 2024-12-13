import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission (send data to API or email)
    alert("Form submitted!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans py-8 flex items-center justify-center">
      <div className="max-w-lg w-full mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 mt-2 bg-gray-700 text-white rounded-md"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Send Message
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-6">
          {/* WhatsApp Link */}
          <a
            href="https://wa.me/+91 9302050250"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-green-500 hover:text-green-400 transition-transform transform hover:scale-110 duration-300"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          {/* Email Link */}
          <a
            href="mailto:info@sreatt.com"
            className="text-4xl text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110 duration-300"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
