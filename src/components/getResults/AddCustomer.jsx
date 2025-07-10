
import React, { useState } from 'react';
import { supabase } from '../../infrastructure/supabaseClient';

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    test_type: '',
    use_case: '',
    customer_code: '',
    mailing_address: '',
    date_of_birth: '',
    notes: ''
  });

  const [participants, setParticipants] = useState([
    { first_name: '', last_name: '', date_of_birth: '', relationship: '', guardian_name: '', notes: '' }
  ]);

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleParticipantChange = (index, field, value) => {
    const updated = [...participants];
    updated[index][field] = value;
    setParticipants(updated);
  };

  const addParticipantRow = () => {
    setParticipants([...participants, {
      first_name: '', last_name: '', date_of_birth: '',
      relationship: '', guardian_name: '', notes: ''
    }]);
  };

  const generateCustomerCode = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `MH${timestamp}${random}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const customerCode = formData.customer_code || generateCustomerCode();

      const { data: customerInsert, error: customerError } = await supabase
        .from('customerdb')
        .insert([{
          ...formData,
          customer_code: customerCode,
          use_case: formData.use_case,
          created_at: new Date().toISOString()
        }])
        .select()
        .single();

      if (customerError) {
        setStatus(`Error: ${customerError.message}`);
        return;
      }

      const enrichedParticipants = participants.map(p => ({
        ...p,
        customer_id: customerInsert.id,
        created_at: new Date().toISOString()
      }));

      const { error: participantError } = await supabase
        .from('participants')
        .insert(enrichedParticipants);

      if (participantError) {
        setStatus(`Customer saved but error adding participants: ${participantError.message}`);
      } else {
        setStatus('Customer and participants added successfully!');
        setFormData({
          first_name: '',
          last_name: '',
          email: '',
          phone: '',
          test_type: '',
          use_case: '',
          customer_code: '',
          mailing_address: '',
          date_of_birth: '',
          notes: ''
        });
        setParticipants([{ first_name: '', last_name: '', date_of_birth: '', relationship: '', guardian_name: '', notes: '' }]);
      }
    } catch (error) {
      setStatus('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Customer</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleInputChange} required className="border p-2 rounded" />
          <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleInputChange} required className="border p-2 rounded" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="text" name="mailing_address" placeholder="Mailing Address" value={formData.mailing_address} onChange={handleInputChange} className="border p-2 rounded" />
          <input type="date" name="date_of_birth" placeholder="Customer DOB" value={formData.date_of_birth} onChange={handleInputChange} className="border p-2 rounded" />
          <select name="use_case" value={formData.use_case} onChange={handleInputChange} required className="border p-2 rounded">
            <option value="">Select Use Case</option>
            <option value="Legal">Legal</option>
            <option value="Peace of Mind">Peace of Mind</option>
            <option value="Immigration">Immigration</option>
            <option value="Other">Other</option>
          </select>
          <select name="test_type" value={formData.test_type} onChange={handleInputChange} required className="border p-2 rounded">
            <option value="">Select Test Type</option>
            <option value="Paternity">Paternity</option>
            <option value="Grandparentage">Grandparentage</option>
            <option value="Siblingship">Siblingship</option>
            <option value="Immigration">Immigration</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleInputChange} className="w-full border p-2 rounded" />

        <div className="mt-8 space-y-4">
          <h4 className="text-md font-semibold text-gray-800">Participants</h4>
          {participants.map((p, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-4 border p-4 rounded bg-gray-50">
              <input type="text" placeholder="First Name" value={p.first_name} onChange={e => handleParticipantChange(idx, 'first_name', e.target.value)} className="border p-2 rounded" />
              <input type="text" placeholder="Last Name" value={p.last_name} onChange={e => handleParticipantChange(idx, 'last_name', e.target.value)} className="border p-2 rounded" />
              <input type="date" placeholder="DOB" value={p.date_of_birth} onChange={e => handleParticipantChange(idx, 'date_of_birth', e.target.value)} className="border p-2 rounded" />
              <input type="text" placeholder="Relationship" value={p.relationship} onChange={e => handleParticipantChange(idx, 'relationship', e.target.value)} className="border p-2 rounded" />
              <input type="text" placeholder="Guardian Name (or N/A)" value={p.guardian_name} onChange={e => handleParticipantChange(idx, 'guardian_name', e.target.value)} className="border p-2 rounded" />
              <textarea placeholder="Notes" value={p.notes} onChange={e => handleParticipantChange(idx, 'notes', e.target.value)} className="border p-2 rounded" />
            </div>
          ))}
          <button type="button" onClick={addParticipantRow} className="bg-blue-500 text-white px-4 py-2 rounded">+ Add Another Participant</button>
        </div>

        <div className="flex gap-4">
          <button type="submit" disabled={loading} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50">
            {loading ? 'Adding...' : 'Add Customer & Participants'}
          </button>
        </div>
      </form>

      {status && (
        <div className={`mt-4 p-3 rounded ${status.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          {status}
        </div>
      )}
    </div>
  );
};

export default AddCustomer;
