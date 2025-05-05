import React, { useState, useEffect } from 'react';
import { supabase } from '../../infrastructure/supabaseClient';

const AdminUploader = () => {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [customer, setCustomer] = useState(null);
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');
  const [publicUrl, setPublicUrl] = useState('');
  const [uploading, setUploading] = useState(false);

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
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Select Customer</label>
        <select
          value={selectedCustomerId}
          onChange={(e) => setSelectedCustomerId(e.target.value)}
          className="border px-4 py-2 rounded w-full"
        >
          <option value="">-- Choose a customer --</option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.first_name} {c.last_name} ({c.customer_code})
            </option>
          ))}
        </select>
      </div>

      {customer && (
        <div className="space-y-4">
          <div className="text-green-700 font-medium">
            Uploading for: {customer.first_name} {customer.last_name} — Test Type: {customer.test_type || 'N/A'}
          </div>

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
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
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
