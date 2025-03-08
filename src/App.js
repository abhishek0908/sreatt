// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import UnderConstruction from './components/UnderContruction';
import Header from './components/Header';
import AboutPage from './components/About';
import HomePage from './components/Home';
import DistributorRegistration from './components/DistributorRegistationForm';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Banner from './components/Banner';
import AdminPage from './components/Admin';
import SignIn from './components/SignIn';
import NotFoundPage from './components/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';
import DistributorPage from './components/DistributorPage';
import WarrantyPage from './components/WarrentyPage';
import ViewWarranty from './components/ViewWarrenty';
import RegisterWarranty from './components/RegisterWarranty';
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Loader from './components/Loader';
import ProductUploadForm from './components/ProductUploadForm';
import AdminProductsAll from './components/AdminProductsAll';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // You can use async data fetching or component loading events here
    const fetchData = async () => {
      // Simulate a data-fetching process (replace with actual API call or async task)
      try {
        // If you're waiting for a resource, like fetching data or images:
        const response = await fetch('/api/data');  // Example fetch (replace with actual)
        const data = await response.json();
        // If you don't need this data, you can simply proceed with hiding the loader.
      } catch (error) {
        console.error('Error loading data:', error);
      }
      setLoading(false);  // Hide loader after data is loaded
    };

    fetchData(); // Initiates the fetch or loading process
  }, []);  // Empty dependency array means this runs only once, like componentDidMount

  return (
    <Router>
      <div className="App">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Banner />
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<UnderConstruction />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/register" element={<DistributorRegistration />} />
              <Route path="/warranty" element={<WarrantyPage />} />
              <Route path="/register-warranty" element={<RegisterWarranty />} />
              <Route path="/view-warranty" element={<ViewWarranty />} />
              <Route path="/admin" element={<ProtectedRoute role="admin" element={<AdminPage />} />} />
              <Route path="/distributor" element={<ProtectedRoute role="distributor" element={<DistributorPage />} />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/admin/upload" element={<ProductUploadForm />} />
              <Route path="/admin/products" element={<AdminProductsAll />} />

            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
