import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx'; // Pastikan ini sesuai dengan nama file
import UserDetail from './components/UserDetail.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user/:id" element={<UserDetail />} />
      <Route path="/home" element={<HomePage />} /> {/* Halaman utama setelah login */}
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
