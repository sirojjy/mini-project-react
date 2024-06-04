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

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Detail</h2>
      <p>Name: {user.first_name} {user.last_name}</p>
      <p>Email: {user.email}</p>
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
    </div>
  );
};

export default UserDetail;
