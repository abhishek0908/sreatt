import React from 'react';
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
import NotFoundPage from './components/NotFoundPage'; // Create this component for 404 handling
import ProtectedRoute from './components/ProtectedRoute'; // Optional: Create this for secure routes

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<UnderConstruction />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/distributor" element={<DistributorRegistration />} />
          <Route path="/admin" element={
            <ProtectedRoute role="admin" element={<AdminPage />} />
          } /> {/* Secure Admin Route */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFoundPage />} /> {/* 404 Fallback */}
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
