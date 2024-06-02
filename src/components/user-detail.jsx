import React from 'react';

const UserDetail = ({ user }) => {
  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-detail">
      <h2>User Details</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
    </div>
  );
};

export default UserDetail;
