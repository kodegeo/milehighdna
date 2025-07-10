import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminUploader from '../components/getResults/AdminUploader';
import ResultsTable from '../components/getResults/ResultsTable';
import AddCustomer from '../components/getResults/AddCustomer';
import IDVerificationForm from '../components/getResults/IDVerificationForm';

const AdminUploaderPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('results');

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/get-results');
  };

  const tabs = [
    { id: 'results', name: 'Upload Results', icon: '📄' },
    { id: 'customers', name: 'Customer Overview', icon: '👥' },
    { id: 'add-customer', name: 'Add Customer', icon: '➕' },
    { id: 'id-verification', name: 'ID Verification', icon: '🆔' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'results':
        return (
          <div className="bg-white shadow rounded p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload DNA Test Results</h2>
            <AdminUploader />
          </div>
        );
      case 'customers':
        return (
          <div className="bg-white shadow rounded p-6">
            <ResultsTable />
          </div>
        );
      case 'add-customer':
        return (
          <div className="bg-white shadow rounded p-6">
            <AddCustomer />
          </div>
        );
      case 'id-verification':
        return (
          <div className="bg-white shadow rounded p-6">
            <IDVerificationForm />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Administration Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Log Out
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AdminUploaderPage;
