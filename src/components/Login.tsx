import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { login } from '../store/authSlice';
import { LoginPayload } from '../store/types';
import { toast } from 'react-toastify';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.auth.loading);

  const handleLogin = () => {
    if (!username || !password || !token) {
      toast.error("Please fill in all fields");
      return;
    }

    const payload: LoginPayload = { username, password, token };
    dispatch(login(payload))
      .unwrap()
      .then(() => {
        toast.success("Login successful");
      })
      .catch(() => {
        toast.error("Login failed. Please check your credentials.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white p-10 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
        <div className="mb-4 relative">
          <FaUser className="absolute left-3 top-3 text-gray-400" />
          <input 
            type="text" 
            placeholder="Username" 
            value={username} 
            onChange={e => setUsername(e.target.value)} 
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4 relative">
          <FaLock className="absolute left-3 top-3 text-gray-400" />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            className="w-full p-3 pl-10 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <div className="text-right mt-1">
            <a href="#" className="text-sm text-blue-500">Forgot?</a>
          </div>
        </div>
        <div className="mb-4 relative">
          <input 
            type="text" 
            placeholder="TOTP Token" 
            value={token} 
            onChange={e => setToken(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button 
          onClick={handleLogin} 
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login to your account'}
        </button>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-500">New here? Sign in!</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
