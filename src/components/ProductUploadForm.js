import { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";

const ProductUploadForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    price: "",
    category: "Lubricants",
  });
  const [files, setFiles] = useState([]);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    setMessage("");
    setMessageType("");
    const data = new FormData();

    data.append("productName", formData.productName);
    data.append("productDescription", formData.productDescription);
    data.append("price", formData.price);
    data.append("category", formData.category);

    files.forEach((file) => data.append("file", file));

    try {
      const response = await axios.post(
        "https://backend.sreatt.com/api/product/add-product",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setMessage("Product uploaded successfully!");
      setMessageType("success");
      setFormData({ productName: "", productDescription: "", price: "", category: "Lubricants" });
      setFiles([]);
      setPreviewUrls([]);
    } catch (error) {
      setMessage("Failed to upload product. Please try again.");
      setMessageType("error");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Upload Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={formData.productName}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <textarea
          name="productDescription"
          placeholder="Product Description"
          value={formData.productDescription}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
          required
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-blue-400 outline-none bg-gray-100"
          required
        >
          <option value="Lubricants">Lubricants</option>
          <option value="Battery">Battery</option>
        </select>
        <div className="p-4 border-2 border-dashed rounded-xl text-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center">
            <FaCloudUploadAlt className="text-4xl text-blue-500 mb-2" />
            <span className="text-gray-500">Click to upload images</span>
          </label>
        </div>
        {previewUrls.length > 0 && (
          <div className="grid grid-cols-3 gap-2 mt-4">
            {previewUrls.map((url, index) => (
              <img key={index} src={url} alt="preview" className="w-full h-24 object-cover rounded-lg shadow-md" />
            ))}
          </div>
        )}
        <button
          type="submit"
          className="w-full p-3 rounded-xl text-white bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 flex items-center justify-center text-lg font-semibold"
          disabled={isUploading}
        >
          {isUploading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-white"></div>
          ) : (
            "Upload Product"
          )}
        </button>
        {message && (
          <p className={`mt-4 text-center font-semibold ${messageType === "success" ? "text-green-600" : "text-red-600"}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ProductUploadForm;