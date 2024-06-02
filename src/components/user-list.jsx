import React, { useState, useEffect } from 'react';
import { Table, Button } from 'components';
import { getUsers } from 'api/users';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getUsers(currentPage);
      setUsers(data.data);
      setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {loading ? <p>Loading...</p> : (
        <>
          <Table data={users} columns={['id', 'email', 'first_name', 'last_name']} />
          <Button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </Button>
          <Button onClick={() => handlePageChange(currentPage + 1)}>Next</Button>
        </>
      )}
    </div>
  );
};

export default UserList;
