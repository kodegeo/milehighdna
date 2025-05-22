// src/pages/ResetPasswordPage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../infrastructure/supabaseClient';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [tokenLoaded, setTokenLoaded] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      const { error } = await supabase.auth.setSessionFromUrl();
      if (error) {
        setError('Invalid or expired token.');
      } else {
        setTokenLoaded(true);
      }
    };
    run();
  }, []);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.updateUser({ password });
    if (error) {
      setError(error.message);
    } else {
      alert('✅ Password updated. You can now log in.');
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Reset Your Password</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {tokenLoaded && (
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border px-4 py-2 rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Update Password
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;