import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-600 via-gray-400 to-gray-300 text-white min-h-screen flex flex-col py-8 px-4">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-wide">About Us</h1>
        <p className="mt-4 text-xl text-white opacity-80">
          Powering your performance with cutting-edge battery and lubricant solutions.
        </p>
      </header>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto w-full bg-gradient-to-r from-gray-700 via-gray-500 to-gray-300 shadow-lg rounded-lg p-8">
        {/* Story Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-100">Our Story</h2>
          <p className="mt-4 text-lg text-gray-200">
            Born out of a desire to solve real-world problems, Sreatt was founded with the goal of delivering
            top-tier battery and lubricant products to keep the wheels of industry and everyday life turning smoothly.
            Over the years, we've honed our expertise in creating solutions that exceed expectations.
          </p>
        </section>

        {/* Products Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-100">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-800">Batteries</h3>
              <p className="mt-2 text-gray-100">
                Our batteries are engineered for superior performance, reliability, and long-lasting power. Perfect for
                cars, trucks, and industrial machines.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-800">Lubricants</h3>
              <p className="mt-2 text-gray-100">
                Our lubricants reduce friction, enhance efficiency, and protect your machinery from wear and tear, ensuring
                smooth performance across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-100">Why Choose Us?</h2>
          <ul className="list-inside list-disc mt-4 text-lg text-gray-100">
            <li><strong>Quality Assurance:</strong> Premium materials and rigorous testing ensure superior performance.</li>
            <li><strong>Sustainability:</strong> Eco-friendly practices in design and manufacturing.</li>
            <li><strong>Customer Focus:</strong> Exceptional service and support for a reliable experience.</li>
          </ul>
        </section>

        {/* Commitment Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-100">Our Commitment</h2>
          <p className="mt-4 text-lg text-gray-100">
            At Sreatt, we're more than just a supplier. We're a partner you can rely on for all your power and
            protection needs. We are committed to continuous innovation to meet the evolving demands of our customers.
          </p>
        </section>

      {/* Contact Details Section */}
<section className="flex flex-col items-center text-center">
  <h2 className="text-3xl font-semibold text-gray-100 mb-6">Contact Information</h2>
  <div className="space-y-6">
    {/* WhatsApp */}
    <div className="flex items-center justify-center">
      <a
            href="https://wa.me/+919302050250"
            target="_blank"
        rel="noopener noreferrer"
        className="text-3xl text-green-500 hover:text-green-400 transition-transform transform hover:scale-110 duration-300"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>
      <span className="ml-4 text-lg text-gray-100">+91 9302050250</span>
    </div>

    {/* Email */}
    <div className="flex items-center justify-center">
      <a
        href="mailto:info@sreatt.com"
        className="text-3xl text-blue-500 hover:text-blue-400 transition-transform transform hover:scale-110 duration-300"
        aria-label="Email"
      >
        <i className="fas fa-envelope"></i>
      </a>
      <span className="ml-4 text-lg text-gray-100">info@sreatt.com</span>
    </div>

    {/* Address
    <div className="flex items-start justify-center">
      <div className="text-3xl text-gray-500">
        <i className="fas fa-map-marker-alt"></i>
      </div>
      <span className="ml-4 text-lg text-gray-100">
        123 Main Street, City, Country
      </span>
    </div> */}
  </div>
</section>

      </div>
    </div>
  );
};

export default AboutPage;
