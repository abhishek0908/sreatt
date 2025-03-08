import React, { useState } from "react";

const DeleteProduct = ({ productId, onDeleteSuccess }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setMessage(null);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://sreatt-backend.vercel.app/api/product/delete-product/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete product");
      }

      setMessage("Product deleted successfully!");
      onDeleteSuccess(productId);
      setTimeout(() => setIsModalOpen(false), 1500);
    } catch (error) {
      setMessage("Error deleting product: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsModalOpen(true);
        }}
        className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition duration-300"
      >
        Delete
      </button>

      {/* Custom Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold mb-4">Confirm Delete</h2>
            <p className="text-gray-700 mb-6">Are you sure you want to delete this product?</p>
            
            {message && (
              <p className={`text-sm font-semibold mb-4 ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>
                {message}
              </p>
            )}
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDelete();
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition relative"
                disabled={loading}
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  "Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteProduct;