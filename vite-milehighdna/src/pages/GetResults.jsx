import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../infrastructure/supabaseClient';

const GetResults = () => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const accessCode = code.trim().toLowerCase();
    console.log('[DEBUG] Fetching result with access code:', accessCode);

    if (!accessCode) {
      setError('Please enter your access code.');
      return;
    }

    // ✅ Admin shortcut
    if (accessCode === 'admin01') {
      console.log('[DEBUG] Admin access granted');
      navigate('/admin-uploader');
      return;
    }

    try {
      console.log('[DEBUG] Querying Supabase with access code:', accessCode);

      // ✅ Join customerdb with resultsdb to get file_path
      const { data, error: fetchError } = await supabase
        .from('customerdb')
        .select(`
          customer_code,
          first_name,
          last_name,
          resultsdb (
            file_path,
            created_at
          )
        `)
        .ilike('customer_code', accessCode)
        .limit(1);

      if (fetchError || !data || data.length === 0) {
        console.warn('[WARNING] No result found for code:', accessCode);
        setError('Invalid access code or no result found.');
        return;
      }

      const customer = data[0];
      const resultFile = customer.resultsdb?.[0] || null;

      if (!resultFile?.file_path) {
        console.warn('[WARNING] Found customer but no uploaded result file.');
        setError('Result found but no file uploaded yet.');
        return;
      }

      console.log('[SUCCESS] Result fetched:', resultFile);

      // ✅ Pass the file object to MyResultsPage for ResultsViewer
      navigate('/my-results-page', { 
        state: { result: resultFile, accessCode } 
      });

    } catch (err) {
      console.error('[Catch Error]', err);
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-xl font-bold mb-4 text-gray-800">Access Your DNA Test Results</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Enter your access code:
          </label>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
            placeholder="Please enter your access code"
          />
          {error && (
            <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            View Results
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetResults;
