import React, { useState } from 'react';
import { registerUser } from '../utils/api';
import { useNavigate } from 'react-router-dom'; // Tambahkan impor useNavigate

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false); // State untuk pop-up sukses
  const navigate = useNavigate(); // Gunakan hook useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser({ email, password });
      console.log('Registration successful:', response.data);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        navigate('/login'); // Arahkan pengguna ke halaman login setelah 5 detik
      }, 5000);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>

          <p>email: eve.holt@reqres.in</p>
          <p>password": "pistol</p>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        {success && (
          <div className="mt-4 p-4 bg-green-100 text-green-800 border border-green-400 rounded">
            <p>Registration successful!</p>
            <button
              onClick={() => navigate('/login')}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
            >
              Go to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
