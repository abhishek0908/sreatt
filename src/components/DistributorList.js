import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DistributorList = () => {
  const [distributors, setDistributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDistributors = async () => {
      const token = localStorage.getItem('token');
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

  if (loading) return <p className="text-lg text-gray-200 text-center">Loading...</p>;
  if (error) return <p className="text-lg text-red-500 text-center">{error}</p>;
  if (distributors.length === 0) return <p className="text-lg text-gray-200 text-center">No distributors found.</p>;

  return (
    <div className="flex justify-center mt-6 mb-8">
      <div className="w-full max-w-6xl overflow-x-auto bg-gray-700 rounded-lg shadow-lg">
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
    </div>
  );
};

export default DistributorList;
