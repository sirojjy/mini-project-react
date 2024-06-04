import React from 'react';
import { Navigate } from 'react-router-dom';
import UserList from '../components/UserList';

const HomePage = () => {
  const isAuthenticated = true; // Gantilah logika ini dengan pengecekan autentikasi yang sesuai

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <UserList />
    </div>
  );
};

export default HomePage;
