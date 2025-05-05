import React from 'react';
import AdminUploader from '../AdminUploader';
import ResultsTable from '../ResultsTable';

import { useNavigate } from 'react-router-dom';

const AdminDashboardEs = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/get-results');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Panel de Administración</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Cerrar Sesión
          </button>
        </div>

        <section className="mb-10 bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Subir Resultado de Prueba</h2>
          <AdminUploader />
        </section>

        <section className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Ver Todos los Resultados Subidos</h2>
          <ResultsTable />
        </section>
      </div>
    </div>
  );
};

export default AdminDashboardEs; 