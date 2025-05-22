import React, { useState } from 'react';
import { supabase } from '../infrastructure/supabaseClient';

const AdminAuthEs = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (signInError) {
      setError(signInError.message);
    } else {
      onAuthSuccess(data.user);
    }
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto p-6 bg-white border rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Inicio de Sesión Administrativo</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-2 w-full rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-4 py-2 w-full rounded"
          required
        />
      </div>
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded w-full">
        Iniciar Sesión
      </button>
    </form>
  );
};

export default AdminAuthEs; 