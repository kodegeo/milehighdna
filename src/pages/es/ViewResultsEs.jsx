import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../infrastructure/supabaseClient';

const ViewResultsEs = () => {
  const { customerId } = useParams();
  const [fileUrl, setFileUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      const { data: result, error: resultError } = await supabase
        .from('resultsdb')
        .select('file_path')
        .eq('customer_id', customerId)
        .single();

      if (resultError || !result?.file_path) {
        setError('No se encontró el resultado. Por favor, verifique su código de acceso.');
        return;
      }

      const { data: signedUrlData, error: signedUrlError } = await supabase.storage
        .from('results')
        .createSignedUrl(result.file_path, 300);

      if (signedUrlError || !signedUrlData?.signedUrl) {
        setError('Error al generar el enlace del resultado.');
        return;
      }

      setFileUrl(signedUrlData.signedUrl);
    };

    fetchResult();
  }, [customerId]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-semibold mb-6">Ver Su Resultado de Prueba de ADN</h1>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {fileUrl ? (
        <>
          <iframe
            src={fileUrl}
            title="Resultado de Prueba de ADN"
            className="w-full h-[600px] border rounded"
          />
          <div className="mt-4">
            <a
              href={fileUrl}
              download
              className="text-blue-600 underline hover:text-blue-800"
            >
              Descargar PDF
            </a>
          </div>
        </>
      ) : (
        !error && <p>Cargando su resultado...</p>
      )}
    </div>
  );
};

export default ViewResultsEs; 