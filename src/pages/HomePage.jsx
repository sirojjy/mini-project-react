import React from 'react';
import { Navigate } from 'react-router-dom';
import UserList from '../components/UserList';

const HomePage = () => {
  const isAuthenticated = true; // logika pengecekan autentikasi

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold my-6">Home Page</h1>
      <UserList />
    </div>
  );
};

export default HomePage;
