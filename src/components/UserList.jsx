import React, { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers(page);
      setUsers(response.data.data);
    };
    fetchUsers();
  }, [page]);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.first_name} {user.last_name}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default UserList;
