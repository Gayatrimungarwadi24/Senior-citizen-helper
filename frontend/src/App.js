import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated to Routes
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import TutorialListPage from './pages/TutorialListPage';
import TutorialDetailPage from './pages/TutorialDetailPage';

import './App.css';


// Import necessary components such as Navbar
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />
        
        {/* Route Switch */}
        <Routes> {/* Changed from Switch to Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tutorials" element={<TutorialListPage />} />
          <Route path="/tutorial/:id" element={<TutorialDetailPage />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
