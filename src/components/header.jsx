import React from 'react';
// import './Header.css';
import Link from './link';

const Header = () => {
  return (
    <header className="header">
      <h1>User Web</h1>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </header>
  );
};

export default Header;
