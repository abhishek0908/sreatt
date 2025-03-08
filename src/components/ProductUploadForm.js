import { useState } from "react";
import axios from "axios";

const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    price: "",
    category: "Lubricants",
  });
  const [files, setFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    const data = new FormData();

    data.append("productName", formData.productName);
    data.append("productDescription", formData.productDescription);
    data.append("price", formData.price);
    data.append("category", formData.category);

    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    try {
      const response = await axios.post(
        "https://backend.sreatt.com/api/product/add-product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        }
      );
      console.log("Success:", response.data);
      alert("Product uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload product.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="productDescription"
          placeholder="Product Description"
          value={formData.productDescription}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="Lubricants">Lubricants</option>
          <option value="Battery">Battery</option>
        </select>
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full p-2 rounded text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 flex items-center justify-center"
          disabled={isUploading}
        >
          {isUploading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
          ) : (
            "Upload Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default ProductUploadForm;
