import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import UserList from './components/user-list';
import UserDetail from './components/user-detail';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://reqres.in/api/users?page=1'); // Fetch initial data
      const data = await response.json();
      setUsers(data.data);
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<UserList users={users} />} />
          <Route path="/users/:userId" element={<UserDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
