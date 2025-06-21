import React, { useState } from 'react';
import { supabase } from "../infrastructure/supabaseClient";

const initialForm = {
  first_name: '',
  last_name: '',
  email: '',
  phone_number: '',
  appointment_type: 'consultation',
  appointment_date: '',
  appointment_time: '',
  dna_test: '',
  test_use: '',
  participants: '',
  language: 'english',
  referral_source: ''
};

export default function AppointmentForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(null);

    const { error } = await supabase.from('appointments').insert([form]);
    if (error) {
      console.error(error);
      setError(error.message);
    } else {
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Book Your Appointment</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">First Name</label>
          <input name="first_name" value={form.first_name} onChange={handleChange} required className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Last Name</label>
          <input name="last_name" value={form.last_name} onChange={handleChange} required className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full border rounded p-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phone Number</label>
          <input name="phone_number" value={form.phone_number} onChange={handleChange} required className="w-full border rounded p-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Appointment Type</label>
        <select name="appointment_type" value={form.appointment_type} onChange={handleChange} className="w-full border rounded p-2">
          <option value="consultation">Free Consultation</option>
          <option value="in_person">In-Person Meeting</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Appointment Date</label>
          <input type="date" name="appointment_date" value={form.appointment_date} onChange={handleChange} required className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Appointment Time</label>
          <input type="time" name="appointment_time" value={form.appointment_time} onChange={handleChange} required className="w-full border rounded p-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">DNA Test Type</label>
        <select name="dna_test" value={form.dna_test} onChange={handleChange} required className="w-full border rounded p-2">
          <option value="">Select DNA Test</option>
          <option value="paternity">Paternity</option>
          <option value="immigration">Immigration</option>
          <option value="siblingship">Siblingship</option>
          <option value="grandparentage">Grandparentage</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Test Use</label>
        <select name="test_use" value={form.test_use} onChange={handleChange} required className="w-full border rounded p-2">
          <option value="">Select Test Use</option>
          <option value="legal">Legal</option>
          <option value="peace_of_mind">Peace of Mind</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Who Will Be Present?</label>
        <input name="participants" value={form.participants} onChange={handleChange} className="w-full border rounded p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Language</label>
        <select name="language" value={form.language} onChange={handleChange} className="w-full border rounded p-2">
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">How Did You Hear About Us?</label>
        <input name="referral_source" value={form.referral_source} onChange={handleChange} className="w-full border rounded p-2" />
      </div>

      <div className="pt-4">
        <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition">Book Appointment</button>
      </div>

      {submitted && <p className="text-green-600 font-medium pt-2">Your appointment was submitted successfully!</p>}
      {error && <p className="text-red-600 font-medium pt-2">Error: {error}</p>}
    </form>
  );
}
