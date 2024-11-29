import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Router, Routes, and Route
import './App.css';
import UnderConstruction from './components/UnderContruction';
import Header from './components/Header';
import AboutPage from './components/About';
import HomePage from './components/Home';
function App() {
  return (
    <Router>  {/* Wrap your app in Router */}
      <div className="App">
        <Header /> {/* This is your Header component with navigation links */}
        <Routes>
          {/* Define routes for your pages */}
          <Route path="/" element={<HomePage />} /> {/* Default route */}
          <Route path="/about" element={<AboutPage />} /> {/* Example route */}
          <Route path="/services" element={<UnderConstruction />} /> {/* Example route */}
          <Route path="/contact" element={<UnderConstruction />} /> {/* Example route */}
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
