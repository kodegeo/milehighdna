import React, { useEffect, useState } from 'react';
import { supabase } from '../../../infrastructure/supabaseClient';

const ResultsTableEs = () => {
  const [records, setRecords] = useState([]);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

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
          participants,
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
    const lower = searchTerm.toLowerCase();
    const filtered = records.filter((rec) =>
      rec.customer_code?.toLowerCase().includes(lower) ||
      rec.first_name?.toLowerCase().includes(lower) ||
      rec.last_name?.toLowerCase().includes(lower)
    );
    setFilteredRecords(filtered);
  }, [searchTerm, records]);

  const getPublicUrl = (path) => {
    const { publicUrl } = supabase.storage.from('results').getPublicUrl(path);
    return publicUrl;
  };

  if (loading) return <p>Cargando registros de clientes...</p>;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Resumen de Resultados de Clientes</h2>

      {/* 🔍 Search input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar por nombre o código de cliente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Código</th>
              <th className="p-2 text-left">Nombre</th>
              <th className="p-2 text-left">Correo</th>
              <th className="p-2 text-left">Teléfono</th>
              <th className="p-2 text-left">Tipo de Prueba</th>
              <th className="p-2 text-left">Participantes</th>
              <th className="p-2 text-left">Resultado Subido</th>
              <th className="p-2 text-left">Ver PDF</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((c) => {
              const result = c.resultsdb?.[0];
              const hasResult = !!result?.file_path;

              return (
                <tr key={c.id} className="border-t">
                  <td className="p-2">{c.customer_code}</td>
                  <td className="p-2">{c.first_name} {c.last_name}</td>
                  <td className="p-2">{c.email}</td>
                  <td className="p-2">{c.phone}</td>
                  <td className="p-2">{c.test_type}</td>
                  <td className="p-2">{c.participants}</td>
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
                        className="text-blue-600 underline"
                      >
                        Ver PDF
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
          <p className="text-gray-500 p-4">No se encontraron registros.</p>
        )}
      </div>
    </div>
  );
};

export default ResultsTableEs; 