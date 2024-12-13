import React from 'react';

const ShimmerLoader = ({ size = '32rem', className = '' }) => {  // Increased size
  return (
    <div
      className={`absolute inset-0 flex justify-center items-center z-10 ${className}`}
    >
      <div
        className={`w-[${size}] h-[${size}] border-4 border-t-4 border-gray-200 rounded-full animate-spin border-t-green-500`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300 animate-pulse rounded-full"></div>
      </div>
    </div>
  );
};

export default ShimmerLoader;
