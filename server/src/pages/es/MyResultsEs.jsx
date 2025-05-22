import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../../infrastructure/supabaseClient';

const MyResultsEs = () => {
  const [result, setResult] = useState(null);
  const [pdfUrl, setPdfUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResult = async () => {
      try {
        setLoading(true);
        setError('');

        let res = location.state?.result;

        if (!res && location.state?.accessCode) {
          const { data, error: fetchError } = await supabase
            .from('resultsdb')
            .select('*')
            .eq('customer_code', location.state.accessCode)
            .limit(1);

          if (fetchError || !data || data.length === 0) {
            throw new Error('No se encontraron resultados.');
          }

          res = data[0];
        }

        setResult(res);

        if (res?.file_path) {
          const { publicUrl } = supabase
            .storage
            .from('results')
            .getPublicUrl(res.file_path);

          setPdfUrl(publicUrl);
        }
      } catch (err) {
        console.error('Error al obtener resultados:', err);
        setError('Error al cargar los resultados. Por favor, inténtelo de nuevo.');
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [location.state]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando sus resultados...</p>
        </div>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{error || 'No se encontraron resultados.'}</p>
            <button
              onClick={() => navigate('/get-results')}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Intentar de Nuevo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Sus Resultados de Prueba de ADN</h1>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Información de la Prueba</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Código de Acceso</p>
                  <p className="font-medium">{result.customer_code}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Fecha</p>
                  <p className="font-medium">
                    {new Date(result.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Documento de Resultados</h2>
              {pdfUrl ? (
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src={pdfUrl}
                    className="w-full h-[600px] border rounded"
                    title="Resultados de Prueba de ADN"
                  />
                </div>
              ) : (
                <p className="text-gray-600">No hay documento disponible.</p>
              )}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => navigate('/get-results')}
                className="text-blue-600 hover:text-blue-800"
              >
                Volver al Código de Acceso
              </button>
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  download
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Descargar PDF
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResultsEs; 