import React from 'react';
import { Link } from 'react-router-dom';

const TestAdmin = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Admin Access Test</h1>
        
        <div className="bg-white shadow rounded p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">How to Access Admin Dashboard</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Go to the <Link to="/get-results" className="text-blue-600 underline">Get Results page</Link></li>
            <li>Enter the access code: <strong>admin01</strong></li>
            <li>Click "View Results"</li>
            <li>You should be redirected to the admin dashboard with tabs</li>
          </ol>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Direct Admin Links</h2>
          <div className="space-y-2">
            <Link 
              to="/admin-uploader" 
              className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
            >
              Go to Admin Dashboard
            </Link>
            <Link 
              to="/admin-dashboard" 
              className="block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center"
            >
              Go to Old Admin Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestAdmin; 