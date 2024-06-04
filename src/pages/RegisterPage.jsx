import React, { useState } from 'react';
import { registerUser } from '../utils/api'; // Pastikan nama file dan jalur sudah benar

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ email, password });
      console.log('Registration successful:', response.data);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default RegisterPage;
