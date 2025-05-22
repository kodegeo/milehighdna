// src/components/getResults/AccessCodeForm.jsx
import React, { useState } from 'react';

const AccessCodeForm = ({ onSubmit, label = "Access Code", buttonText = "Submit" }) => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedCode = accessCode.trim().toLowerCase();
    if (!trimmedCode) {
      setError(`Please enter your ${label.toLowerCase()}.`);
      return;
    }

    setError(null);
    await onSubmit(trimmedCode);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 max-w-md mx-auto">
      <label htmlFor="accessCode" className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        id="accessCode"
        type="text"
        value={accessCode}
        onChange={(e) => setAccessCode(e.target.value)}
        placeholder={`e.g. ABC123`}
        className="border px-4 py-2 w-full rounded shadow-sm focus:ring focus:border-blue-500"
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default AccessCodeForm;
