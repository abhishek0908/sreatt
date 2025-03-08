import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [distributors, setDistributors] = useState([]); // State to hold distributor list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchDistributors = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage
      if (!token) {
        setError('Authorization token not found.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('https://sreatt-backend.vercel.app/api/distributor/all', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setDistributors(response.data.distributors);
      } catch (err) {
        setError('Failed to fetch distributors. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchDistributors();
  }, []);

  return (
    <main className="flex flex-col items-center w-full px-4 py-8 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-300 text-white font-sans">
      <h2 className="text-3xl font-bold mb-6 text-center">Distributor List</h2>

      {/* Buttons for Products */}
      <div className="flex gap-4 mb-6">
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
          onClick={() => navigate('/admin/products')}
        >
          View Products
        </button>
        <button
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600"
          onClick={() => navigate('/admin/upload')}
        >
          Upload Product
        </button>
      </div>

      {loading && <p className="text-lg text-gray-200">Loading...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}

      {!loading && !error && distributors.length > 0 && (
        <div className="w-full max-w-4xl overflow-x-auto bg-gray-700 rounded-lg shadow-lg">
          <table className="w-full text-left text-gray-200">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {distributors.map((distributor, index) => (
                <tr
                  key={distributor._id}
                  className={index % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}
                >
                  <td className="px-4 py-2 text-center">{index + 1}</td>
                  <td className="px-4 py-2">{`${distributor.firstName} ${distributor.lastName}`}</td>
                  <td className="px-4 py-2">{distributor.email}</td>
                  <td className="px-4 py-2">{distributor.phoneNumber}</td>
                  <td className="px-4 py-2">{distributor.address}</td>
                  <td className="px-4 py-2 text-center">
                    <span
                      className={`px-4 py-2 rounded-full ${
                        distributor.distributorStatus === 'pending'
                          ? 'bg-yellow-500 text-black'
                          : distributor.distributorStatus === 'approved'
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {distributor.distributorStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {!loading && !error && distributors.length === 0 && (
        <p className="text-lg text-gray-200">No distributors found.</p>
      )}
    </main>
  );
};

export default AdminPage;
