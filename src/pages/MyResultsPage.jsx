import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../infrastructure/supabaseClient';
import ResultsViewer from '../components/getResults/ResultsViewer';

const MyResultsPage = () => {
  const [result, setResult] = useState(null);
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
            throw new Error('No result found.');
          }

          res = data[0];
        }

        setResult(res);
      } catch (err) {
        console.error('[ERROR] Loading results:', err.message);
        setError('Failed to load results. Please check your access code or try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchResult();
  }, [location.state]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">Loading your results...</p>
      </div>
    );
  }

  if (error || !result) {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600">{error || 'No result found.'}</p>
            <button
              onClick={() => navigate('/get-results')}
              className="mt-4 text-blue-600 hover:text-blue-800"
            >
              Try Again
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
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your DNA Test Results</h1>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-2">Test Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Customer Code</p>
                  <p className="font-medium">{result.customer_code}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium">
                    {new Date(result.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Results Document</h2>
              <ResultsViewer result={result} />
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => navigate('/get-results')}
                className="text-blue-600 hover:text-blue-800"
              >
                Back to Access Code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyResultsPage;
