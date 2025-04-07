import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  return (
    <main className="flex flex-col items-center w-full px-4 py-8 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl">
        <button
          className="w-full py-4 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => navigate('/admin/products')}
        >
          View Products
        </button>
        <button
          className="w-full py-4 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-600"
          onClick={() => navigate('/admin/upload')}
        >
          Upload Product
        </button>
        <button
          className="w-full py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          onClick={() => navigate('/admin/warranties')}
        >
          See Warranties Request
        </button>
        <button
          className="w-full py-4 bg-yellow-500 text-black text-lg font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition duration-200"
          onClick={() => navigate('/admin/distributors')}
        >
          View Distributors
        </button>
      </div>
    </main>
  );
};

export default AdminPage;
