import React, { useEffect, useState } from 'react';
import { getUsers } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsers(page);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    };
    fetchUsers();
  }, [page]);

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-4">
      <h2 className="text-3xl mb-6">User List</h2>
      <ul className="w-full max-w-lg space-y-4">
        {users.map(user => (
          <li 
            key={user.id} 
            className="bg-white p-4 rounded shadow-md flex items-center cursor-pointer hover:bg-gray-200"
            onClick={() => handleUserClick(user.id)}
          >
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className="w-16 h-16 rounded-full mr-4" />
            <div>
              <p className="text-lg font-semibold">{user.first_name} {user.last_name}</p>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex space-x-4">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1} 
          className={`px-4 py-2 rounded ${page === 1 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          Previous
        </button>
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages}
          className={`px-4 py-2 rounded ${page === totalPages ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600 text-white'}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserList;
