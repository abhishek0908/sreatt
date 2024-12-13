import React from 'react';

// New Contact Us Banner Component with Phone Number and Scrolling Effect
const ContactUsBanner = () => {
  return (
    <div className="bg-green-600 text-white text-center py-2">
      <div className="overflow-hidden whitespace-nowrap">
        <p className="text-lg font-semibold inline-block animate-marquee">
          Have questions? Contact us at{' '}
          <a href="mailto:info@sreatt.com" className="underline">
            info@sreatt.com
          </a>{' '}
          or call us at{' '}
          <a href="tel:+919302050250" className="underline">
            +91 9302050250
          </a>!
        </p>
      </div>
    </div>
  );
};

export default ContactUsBanner;
