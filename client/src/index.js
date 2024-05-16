import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import App from './App';
import AdminPanel from './components/AdminPanel';
import Contact from './components/Contact';

import Register from './components/Register';
import Sales from './components/sales';
import PredictionData from './components/PredictionData';
// import PredictedData from './components/predictedData'
// import { AuthProvider } from './AuthContext'; // Import the AuthProvider

const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  console.log('Token:', token);
  return token && token !== 'null'; // Check if token exists and is not 'null'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <AuthProvider> Wrap your application with AuthProvider */}
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/adminpanel"
            element={isAuthenticated() ? <AdminPanel /> : <Navigate to="/login" />}
          />
          <Route
            path="/sales"
            element={isAuthenticated() ? <Sales /> : <Navigate to="/sales" />}
          />
          <Route
            path="/predicted"
            element={isAuthenticated() ? <PredictionData /> : <Navigate to="/predicted" />}
          />
          <Route
            path="/contact"
            element={isAuthenticated() ? <Contact /> : <Navigate to="/login" />}
          />
        </Routes>
      {/* </AuthProvider> */}
    </Router>
  </React.StrictMode>
);
