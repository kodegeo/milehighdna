import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../infrastructure/supabaseClient';

const ResetPasswordEs = () => {
  const [password, setPassword] = useState('');
  const [tokenLoaded, setTokenLoaded] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const run = async () => {
      const { error } = await supabase.auth.setSessionFromUrl();
      if (error) {
        setError('Token inválido o expirado.');
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
      alert('✅ Contraseña actualizada. Ahora puede iniciar sesión.');
      navigate('/');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-semibold mb-4">Restablecer Su Contraseña</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {tokenLoaded && (
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Nueva Contraseña</label>
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
            Actualizar Contraseña
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPasswordEs; 