import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const WarrantyStatusEnum = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  SOLVED: 'solved',
};

const ITEMS_PER_PAGE = 5;

const WarrantyDetails = () => {
  const [warranties, setWarranties] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [updatingId, setUpdatingId] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchName, setSearchName] = useState('');
  const [searchSerial, setSearchSerial] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          'https://sreatt-backend.vercel.app/api/warranty/get-all-warranty',
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        const warranties = res.data.data;
        setWarranties(warranties);
        const statusMap = {};
        warranties.forEach(w => {
          statusMap[w._id] = w.warrantyStatus;
        });
        setSelectedStatuses(statusMap);
        setLoading(false);
      } catch (err) {
        console.error("Error loading data:", err);
        setLoading(false);
      }
    };
    fetchData();
  }, [token]);

  const handleStatusChange = (id, newStatus) => {
    setSelectedStatuses(prev => ({ ...prev, [id]: newStatus }));
  };

  const handleUpdate = async (warranty) => {
    setUpdatingId(warranty._id);
    try {
      await axios.put(
        'https://sreatt-backend.vercel.app/api/warranty/update-warranty',
        {
          batterySerialNumber: warranty.batterySerialNumber,
          warrantyStatus: selectedStatuses[warranty._id],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage(`Updated ${warranty.customerName}'s status!`);
    } catch (err) {
      console.error(err);
      setMessage('Error updating status.');
    } finally {
      setUpdatingId(null);
    }
  };

  const getStatusColor = (status) => {
    if (status === WarrantyStatusEnum.SOLVED) return 'text-green-600';
    if (status === WarrantyStatusEnum.PENDING) return 'text-orange-500';
    if (status === WarrantyStatusEnum.REJECTED) return 'text-red-500';
    return '';
  };

  const filteredWarranties = warranties
    .filter(w =>
      (statusFilter === 'all' || w.warrantyStatus === statusFilter) &&
      w.customerName.toLowerCase().includes(searchName.toLowerCase()) &&
      w.batterySerialNumber.toLowerCase().includes(searchSerial.toLowerCase())
    )
    .sort((a, b) => new Date(b.dateOfPurchase) - new Date(a.dateOfPurchase));

  const totalPages = Math.ceil(filteredWarranties.length / ITEMS_PER_PAGE);
  const currentWarranties = filteredWarranties.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) return <p className="text-center p-4">Loading...</p>;
  if (!warranties.length) return <p className="text-center p-4">No warranties found.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">All Warranty Details</h2>

      {message && (
        <p className="text-center mb-4 text-green-600 font-medium">{message}</p>
      )}

      {/* Filters */}
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
    <input
      type="text"
      placeholder="Search by name"
      value={searchName}
      onChange={(e) => setSearchName(e.target.value)}
      className="border px-3 py-2 rounded shadow-sm text-sm w-full sm:w-56"
    />
    <input
      type="text"
      placeholder="Search by serial number"
      value={searchSerial}
      onChange={(e) => setSearchSerial(e.target.value)}
      className="border px-3 py-2 rounded shadow-sm text-sm w-full sm:w-56"
    />
  </div>
  <div className="w-full sm:w-auto">
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="border px-3 py-2 rounded shadow-sm text-sm w-full sm:w-56"
    >
      <option value="all">All</option>
      <option value={WarrantyStatusEnum.PENDING}>Pending</option>
      <option value={WarrantyStatusEnum.SOLVED}>Solved</option>
      <option value={WarrantyStatusEnum.REJECTED}>Rejected</option>
    </select>
  </div>
</div>


      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow-lg">
        <table className="min-w-full border text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="p-3">Customer</th>
              <th className="p-3">Dealer</th>
              <th className="p-3">Mobile</th>
              <th className="p-3">Battery SN</th>
              <th className="p-3">Purchase Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentWarranties.map((w, index) => (
              <tr
                key={w._id}
                className={`border-t ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
              >
                <td className="p-3">{w.customerName}</td>
                <td className="p-3">{w.dealerName}</td>
                <td className="p-3">{w.customerMobileNumber}</td>
                <td className="p-3">{w.batterySerialNumber}</td>
                <td className="p-3">{new Date(w.dateOfPurchase).toLocaleDateString()}</td>
                <td className="p-3">
                  <select
                    value={selectedStatuses[w._id]}
                    onChange={(e) => handleStatusChange(w._id, e.target.value)}
                    className={`border px-2 py-1 rounded text-sm font-medium ${getStatusColor(selectedStatuses[w._id])}`}
                  >
                    {Object.entries(WarrantyStatusEnum).map(([key, value]) => (
                      <option key={key} value={value}>
                        {value.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3">
                  <button
                    onClick={() => handleUpdate(w)}
                    className="relative flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded px-3 py-1 text-sm transition duration-200 disabled:opacity-60"
                    disabled={updatingId === w._id}
                  >
                    {updatingId === w._id ? (
                      <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      "Update"
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 gap-3">
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-2 py-1 text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WarrantyDetails;
