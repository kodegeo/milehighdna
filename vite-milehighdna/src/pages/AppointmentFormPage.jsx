// src/pages/AppointmentFormPage.jsx

import React from 'react';
import AppointmentForm from '../components/AppointmentForm';

export default function AppointmentFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Book Your DNA Test Appointment
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Choose a convenient time and provide your details below. All appointments are private and secure.
        </p>
        <AppointmentForm />
      </div>
    </div>
  );
}
