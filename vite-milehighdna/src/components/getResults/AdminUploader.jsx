import React, { useState, useEffect } from 'react';
import { supabase } from '../../infrastructure/supabaseClient';

const AdminUploader = () => {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [customer, setCustomer] = useState(null);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [publicUrl, setPublicUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      const { data, error } = await supabase
        .from('customerdb')
        .select('id, first_name, last_name, customer_code, test_type');

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
    if (!selectedCustomerId) return;
    const found = customers.find((c) => c.id === selectedCustomerId);
    setCustomer(found || null);
    setStatus('');
    setPublicUrl('');
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

  const handleUpload = async () => {
    if (!customer || !file) {
      setStatus('Please select a customer and a PDF file.');
      return;
    }

    if (file.type !== 'application/pdf') {
      setStatus('Only PDF files are allowed.');
      return;
    }

    setUploading(true);
    setStatus('Uploading...');

    const date = new Date();
    const mmddyyyy = `${String(date.getMonth() + 1).padStart(2, '0')}${String(
      date.getDate()
    ).padStart(2, '0')}${date.getFullYear()}`;

    const filePath = `${(customer.test_type || 'results').toLowerCase()}-${customer.first_name.toLowerCase()}-${customer.last_name.toLowerCase()}-${customer.customer_code}-${mmddyyyy}.pdf`;

    const { error: storageError } = await supabase.storage
      .from('results')
      .upload(filePath, file, {
        upsert: true,
        contentType: 'application/pdf',
      });

    if (storageError) {
      console.error('Upload failed:', storageError);
      setStatus(`Upload failed: ${storageError.message || 'Unknown error'}`);
      setUploading(false);
      return;
    }

    const { error: insertError } = await supabase
      .from('resultsdb')
      .insert([
        {
          customer_id: customer.id,
          file_path: filePath,
          uploaded_by: 'admin@milehighdnatesting.com',
        },
      ]);

    if (insertError) {
      console.error('Database insert error:', insertError);
      setStatus('File uploaded but database update failed.');
      setUploading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from('results')
      .getPublicUrl(filePath);

    setPublicUrl(urlData?.publicUrl || '');
    setStatus('Upload successful.');
    setFile(null);
    setUploading(false);
  };

  return (
    <div className="space-y-6">
      <div className="relative">
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
            className="w-full border border-gray-300 rounded px-4 py-2 pr-10"
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
        
        {/* Selected customer display */}
        {customer && (
          <div className="mt-2 p-3 bg-green-50 border border-green-200 rounded">
            <div className="font-medium text-green-800">
              Selected: {customer.first_name} {customer.last_name}
            </div>
            <div className="text-sm text-green-600">
              Code: {customer.customer_code} | Test Type: {customer.test_type}
            </div>
          </div>
        )}
      </div>

      {customer && (
        <div className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Select PDF File</label>
            <input
              type="file"
              accept="application/pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
          >
            {uploading ? 'Uploading...' : 'Upload PDF'}
          </button>
        </div>
      )}

      {status && (
        <div className="mt-4 text-sm text-gray-800">
          {publicUrl ? (
            <>
              {status}
              <br />
              <a
                href={publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Uploaded PDF
              </a>
            </>
          ) : (
            status
          )}
        </div>
      )}
    </div>
  );
};

export default AdminUploader;
