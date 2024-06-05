import React, { useEffect, useState } from 'react';
import { getUser } from '../utils/api';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser(id);
      setUser(response.data.data);
    };
    fetchUser();
  }, [id]);

  if (!user) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-6 text-center">User Detail</h2>
        <p className="text-lg font-medium">Name: {user.first_name} {user.last_name}</p>
        <p className="text-gray-600">Email: {user.email}</p>
        <img 
          src={user.avatar} 
          alt={`${user.first_name} ${user.last_name}`} 
          className="w-32 h-32 rounded-full mt-4 mx-auto"
        />
      </div>
    </div>
  );
};

export default UserDetail;
