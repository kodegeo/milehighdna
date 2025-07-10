import React, { useEffect, useState } from 'react';
import { supabase } from '../../infrastructure/supabaseClient';

const ResultsTable = () => {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchType, setSearchType] = useState('all'); // 'all', 'name', 'code'

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('customerdb')
        .select(`
          id,
          first_name,
          last_name,
          customer_code,
          email,
          phone,
          test_type,
          participant_count,
          resultsdb (
            id,
            file_path,
            created_at
          )
        `)
        .order('last_name', { ascending: true });

      if (error) {
        console.error('Error fetching customer data:', error);
      } else {
        setRecords(data);
        setFilteredRecords(data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredRecords(records);
      return;
    }

    const lower = searchTerm.toLowerCase();
    const filtered = records.filter((rec) => {
      switch (searchType) {
        case 'name':
          return (
            rec.first_name?.toLowerCase().includes(lower) ||
            rec.last_name?.toLowerCase().includes(lower) ||
            `${rec.first_name} ${rec.last_name}`.toLowerCase().includes(lower)
          );
        case 'code':
          return rec.customer_code?.toLowerCase().includes(lower);
        default:
          return (
            rec.customer_code?.toLowerCase().includes(lower) ||
            rec.first_name?.toLowerCase().includes(lower) ||
            rec.last_name?.toLowerCase().includes(lower) ||
            rec.email?.toLowerCase().includes(lower)
          );
      }
    });
    setFilteredRecords(filtered);
  }, [searchTerm, searchType, records]);

  const getPublicUrl = (path) => {
    const { publicUrl } = supabase.storage.from('results').getPublicUrl(path);
    return publicUrl;
  };

  if (loading) return <p>Loading customer records...</p>;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Customer Results Overview</h2>

      {/* Enhanced Search Section */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Customers
            </label>
            <input
              type="text"
              placeholder="Search by name, customer code, or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search Type
            </label>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Fields</option>
              <option value="name">Name Only</option>
              <option value="code">Customer Code Only</option>
            </select>
          </div>

          <button
            onClick={() => {
              setSearchTerm('');
              setSearchType('all');
            }}
            className="px-4 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Clear
          </button>
        </div>

        {/* Search Results Summary */}
        <div className="mt-3 text-sm text-gray-600">
          Showing {filteredRecords.length} of {records.length} customers
          {searchTerm && (
            <span className="ml-2 text-blue-600">
              for "{searchTerm}"
            </span>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Code</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Phone</th>
              <th className="p-2 text-left">Test Type</th>
              <th className="p-2 text-left">Participants</th>
              <th className="p-2 text-left">Result Uploaded</th>
              <th className="p-2 text-left">View PDF</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((c) => {
              const result = c.resultsdb?.[0];
              const hasResult = !!result?.file_path;

              return (
                <tr key={c.id} className="border-t hover:bg-gray-50">
                  <td className="p-2 font-medium">{c.customer_code}</td>
                  <td className="p-2">{c.first_name} {c.last_name}</td>
                  <td className="p-2">{c.email}</td>
                  <td className="p-2">{c.phone}</td>
                  <td className="p-2">{c.test_type}</td>
                  <td className="p-2">{c.participant_count}</td>
                  <td className="p-2">
                    {hasResult
                      ? new Date(result.created_at).toLocaleDateString()
                      : <span className="text-red-600">No</span>}
                  </td>
                  <td className="p-2">
                    {hasResult ? (
                      <a
                        href={getPublicUrl(result.file_path)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline hover:text-blue-800"
                      >
                        View PDF
                      </a>
                    ) : (
                      '—'
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {filteredRecords.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-500 text-lg">No records found.</p>
            {searchTerm && (
              <p className="text-gray-400 text-sm mt-2">
                Try adjusting your search terms or search type.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsTable;
