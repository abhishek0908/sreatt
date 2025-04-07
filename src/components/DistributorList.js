import React, { useEffect, useState } from 'react';
import axios from 'axios';

const STATUS_OPTIONS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  REJECTED: 'rejected',
};

const DistributorList = () => {
  const [distributors, setDistributors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [editData, setEditData] = useState(null);
  const [error, setError] = useState('');
  const [sortStatus, setSortStatus] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const fetchDistributors = async () => {
    const token = localStorage.getItem('token');
    setLoading(true);
    try {
      const res = await axios.get('https://sreatt-backend.vercel.app/api/distributor/all', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDistributors(res.data.distributors);
    } catch (err) {
      setError('Failed to fetch distributors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDistributors();
  }, []);

  const handleEditClick = (distributor) => {
    setEditData(distributor);
    setMessage('');
  };

  const handleUpdate = async () => {
    setSaving(true);
    setMessage('');
    const token = localStorage.getItem('token');
    try {
      await axios.put(
        `https://sreatt-backend.vercel.app/api/distributor/update-distributor/${editData._id}`,
        {
          firstName: editData.firstName,
          lastName: editData.lastName,
          phoneNumber: editData.phoneNumber,
          distributorStatus: editData.distributorStatus,
          email: editData.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setEditData(null);
      fetchDistributors();
    } catch (err) {
      setMessage(
        err?.response?.data?.error || 'Update failed'
      );
    } finally {
      setSaving(false);
    }
  };

  const filteredDistributors = distributors
    .filter((d) =>
      `${d.firstName} ${d.lastName}`.toLowerCase().includes(search.toLowerCase())
    )
    .filter((d) =>
      sortStatus ? d.distributorStatus === sortStatus : true
    );

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white text-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Distributors List</h2>

      {/* Search & Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-1/2"
        />

        <select
          value={sortStatus}
          onChange={(e) => setSortStatus(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full sm:w-1/4"
        >
          <option value="">All Status</option>
          <option value={STATUS_OPTIONS.PENDING}>Pending</option>
          <option value={STATUS_OPTIONS.CONFIRMED}>Confirmed</option>
          <option value={STATUS_OPTIONS.REJECTED}>Rejected</option>
        </select>
      </div>

      {/* Table */}
      {loading ? (
        <p className="text-gray-600">Loading distributors...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-200">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDistributors.length === 0 ? (
                <tr>
                  <td className="px-4 py-2 text-center" colSpan="7">
                    No matching distributors found.
                  </td>
                </tr>
              ) : (
                filteredDistributors.map((d, i) => (
                  <tr key={d._id} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-2">{i + 1}</td>
                    <td className="px-4 py-2">{d.firstName} {d.lastName}</td>
                    <td className="px-4 py-2">{d.email}</td>
                    <td className="px-4 py-2">{d.phoneNumber}</td>
                    <td className="px-4 py-2">{d.address}</td>
                    <td className="px-4 py-2 capitalize">{d.distributorStatus}</td>
                    <td className="px-4 py-2">
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                        onClick={() => handleEditClick(d)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      {editData && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white text-gray-800 p-6 rounded-md w-full max-w-md shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Edit Distributor</h3>

            {message && (
              <p className="text-red-500 text-sm mb-2">{message}</p>
            )}

            <div className="mb-3">
              <label className="text-sm block mb-1">First Name</label>
              <input
                type="text"
                value={editData.firstName}
                onChange={(e) => setEditData({ ...editData, firstName: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-3">
              <label className="text-sm block mb-1">Last Name</label>
              <input
                type="text"
                value={editData.lastName}
                onChange={(e) => setEditData({ ...editData, lastName: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-3">
              <label className="text-sm block mb-1">Email</label>
              <input
                type="email"
                value={editData.email}
                onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-3">
              <label className="text-sm block mb-1">Phone Number</label>
              <input
                type="text"
                value={editData.phoneNumber}
                onChange={(e) => setEditData({ ...editData, phoneNumber: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm block mb-1">Status</label>
              <select
                value={editData.distributorStatus}
                onChange={(e) => setEditData({ ...editData, distributorStatus: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
              >
                <option value={STATUS_OPTIONS.PENDING}>Pending</option>
                <option value={STATUS_OPTIONS.CONFIRMED}>Confirmed</option>
                <option value={STATUS_OPTIONS.REJECTED}>Rejected</option>
              </select>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditData(null)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center justify-center min-w-[80px]"
                disabled={saving}
              >
                {saving ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                    />
                  </svg>
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DistributorList;
