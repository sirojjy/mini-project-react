import React, { useState } from 'react';
import { loginUser } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token); // Simpan token di localStorage
      navigate('/home'); // Arahkan pengguna ke halaman home setelah login berhasil
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl mb-6 text-center">Login</h2>
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
            Login
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        <div className="mt-4 text-center">
          <p>Email: eve.holt@reqres.in</p>
          <p>Password: cityslicka</p>
          <button
            onClick={handleRegister}
            className="mt-4 text-blue-500 hover:underline"
            class="color=#fffff"
          >
            Registrasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
