import React from 'react';
import { useNavigate } from 'react-router-dom';
import AdminUploader from '../../components/getResults/AdminUploader';
import ResultsTable from '../../components/getResults/ResultsTable';

const AdminUploaderPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/get-results');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Subir Resultado de Prueba de ADN</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Cerrar Sesión
          </button>
        </div>

        <div className="bg-white shadow rounded p-6">
          <AdminUploader />
        </div>

        <ResultsTable />
      </div>
    </div>
  );
};

export default AdminUploaderPage; 