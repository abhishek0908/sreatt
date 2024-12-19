import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [distributors, setDistributors] = useState([]); // State to hold distributor list
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchDistributors = async () => {
      const token = localStorage.getItem('token'); // Get token from localStorage
      if (!token) {
        setError('Authorization token not found.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:8000/api/distributor/all', {
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

      {loading && <p className="text-lg text-gray-200">Loading...</p>}
      {error && <p className="text-lg text-red-500">{error}</p>}

      {!loading && !error && distributors.length > 0 && (
        <div className="w-full max-w-4xl overflow-hidden bg-gray-700 rounded-lg shadow-lg">
          <table className="w-full text-left text-gray-200">
            <thead>
              <tr className="bg-gray-800">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Address</th>
              </tr>
            </thead>
            <tbody>
              {distributors.map((distributor, index) => (
                <tr
                  key={distributor._id}
                  className={index % 2 === 0 ? 'bg-gray-600' : 'bg-gray-700'}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{`${distributor.firstName} ${distributor.lastName}`}</td>
                  <td className="px-4 py-2">{distributor.email}</td>
                  <td className="px-4 py-2">{distributor.phoneNumber}</td>
                  <td className="px-4 py-2">{distributor.address}</td>
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
