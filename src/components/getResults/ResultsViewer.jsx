import React, { useEffect, useState } from 'react';
import { supabase } from '../../infrastructure/supabaseClient';

const ResultsViewer = ({ result }) => {
  const [pdfUrl, setPdfUrl] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getSignedUrl = async () => {
      if (!result?.file_path) {
        setError('Missing file path for result.');
        return;
      }

      const { data, error } = await supabase
        .storage
        .from('results') // Make sure this matches your bucket name
        .createSignedUrl(result.file_path, 60 * 60); // 1 hour

      if (error) {
        console.error('[Signed URL Error]', error);
        setError('Unable to load your results at this time.');
      } else {
        console.log('[DEBUG] Signed URL:', data.signedUrl);
        setPdfUrl(data.signedUrl);
      }
    };

    getSignedUrl();
  }, [result]);

  if (error) {
    return (
      <div className="text-red-600 bg-red-100 border border-red-200 p-4 rounded">
        {error}
      </div>
    );
  }

  if (!pdfUrl) {
    return (
      <p className="text-gray-600">Loading your result document...</p>
    );
  }

  return (
    <div className="space-y-4">
      <iframe
        src={pdfUrl}
        className="w-full h-[600px] border rounded"
        title="DNA Test PDF"
      />
      <div className="flex justify-end">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default ResultsViewer;
