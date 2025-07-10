import React, { useState, useEffect } from 'react';
import { supabase } from '../../infrastructure/supabaseClient';
import IdentityWizard from './IdentityWizard';

const IDVerificationForm = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [showWizard, setShowWizard] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data, error } = await supabase
        .from('customerdb')
        .select('id, first_name, last_name, customer_code, test_type, date_of_birth, participant_count')
        .order('last_name', { ascending: true });

      if (error) {
        console.error('Error fetching customers:', error);
        return;
      }

      setCustomers(data);
      setFilteredCustomers(data);
    };

    fetchCustomers();
  }, []);

  useEffect(() => {
    if (!selectedCustomerId) {
      setSelectedCustomer(null);
      return;
    }
    
    const found = customers.find((c) => c.id === selectedCustomerId);
    setSelectedCustomer(found || null);
  }, [selectedCustomerId, customers]);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredCustomers(customers);
      return;
    }

    const filtered = customers.filter((c) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        c.first_name?.toLowerCase().includes(searchLower) ||
        c.last_name?.toLowerCase().includes(searchLower) ||
        c.customer_code?.toLowerCase().includes(searchLower) ||
        `${c.first_name} ${c.last_name}`.toLowerCase().includes(searchLower)
      );
    });
    setFilteredCustomers(filtered);
  }, [searchTerm, customers]);

  const handleCustomerSelect = (customerId) => {
    setSelectedCustomerId(customerId);
    setSearchTerm('');
    setShowDropdown(false);
  };

  const startIdentityWizard = () => {
    if (selectedCustomer) {
      setShowWizard(true);
    }
  };

  const resetSelection = () => {
    setSelectedCustomerId('');
    setSelectedCustomer(null);
    setSearchTerm('');
    setShowWizard(false);
  };

  if (showWizard && selectedCustomer) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800">Identity Verification Wizard</h3>
          <button
            onClick={resetSelection}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Back to Customer Selection
          </button>
        </div>
        
        <div className="bg-blue-50 p-4 rounded mb-4">
          <h4 className="font-semibold text-blue-800 mb-2">Selected Customer</h4>
          <p className="text-blue-700">
            <strong>Name:</strong> {selectedCustomer.first_name} {selectedCustomer.last_name}<br />
            <strong>Customer Code:</strong> {selectedCustomer.customer_code}<br />
            <strong>Test Type:</strong> {selectedCustomer.test_type}<br />
            <strong>Date of Birth:</strong> {selectedCustomer.date_of_birth ? new Date(selectedCustomer.date_of_birth).toLocaleDateString() : 'Not provided'}<br />
            <strong>Participants:</strong> {selectedCustomer.participant_count || 'Not specified'}
          </p>
        </div>

        <IdentityWizard 
          customerData={selectedCustomer}
          onComplete={() => {
            setShowWizard(false);
            resetSelection();
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">ID Verification Form</h3>
      
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">Search and Select Customer</label>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            placeholder="Start typing customer name or code..."
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          {showDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
              {filteredCustomers.length > 0 ? (
                filteredCustomers.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => handleCustomerSelect(c.id)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                  >
                    <div className="font-medium">{c.first_name} {c.last_name}</div>
                    <div className="text-sm text-gray-600">Code: {c.customer_code} | Test: {c.test_type}</div>
                  </button>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No customers found</div>
              )}
            </div>
          )}
        </div>
      </div>

      {selectedCustomer && (
        <div className="bg-green-50 p-4 rounded mb-6">
          <h4 className="font-semibold text-green-800 mb-2">Customer Information</h4>
          <p className="text-green-700">
            <strong>Name:</strong> {selectedCustomer.first_name} {selectedCustomer.last_name}<br />
            <strong>Customer Code:</strong> {selectedCustomer.customer_code}<br />
            <strong>Test Type:</strong> {selectedCustomer.test_type}<br />
            <strong>Date of Birth:</strong> {selectedCustomer.date_of_birth ? new Date(selectedCustomer.date_of_birth).toLocaleDateString() : 'Not provided'}<br />
            <strong>Participants:</strong> {selectedCustomer.participant_count || 'Not specified'}
          </p>
          
          <button
            onClick={startIdentityWizard}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Start Identity Verification Wizard
          </button>
        </div>
      )}
    </div>
  );
};

export default IDVerificationForm;
