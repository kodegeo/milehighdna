import React, { useState, useEffect } from 'react';
import axios from 'axios';

const steps = ['Type', 'Time', 'Details', 'Confirm'];

export default function AppointmentWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    appointment_type: 'consultation',
    appointment_date: '',
    appointment_time: '',
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    dna_test: '',
    test_use: '',
    participants: '',
    language: 'english',
    referral_source: ''
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  // Fetch available times when date changes
  useEffect(() => {
    if (step === 1 && form.appointment_date) {
      axios
        .get(`/api/available-times?date=${form.appointment_date}`)
        .then((res) => setAvailableTimes(res.data));
    }
  }, [form.appointment_date, step]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const handleSubmit = async () => {
    const res = await axios.post('/api/book-appointment', form);
    if (res.status === 200) {
      nextStep(); // go to confirmation
    }
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Your Appointment</h2>

      {/* Step Content */}
      {step === 0 && (
        <>
          <label className="block mb-2 font-medium">Appointment Type</label>
          <select name="appointment_type" value={form.appointment_type} onChange={handleChange} className="w-full p-2 border rounded">
            <option value="consultation">Free Consultation</option>
            <option value="in_person">In-Person Meeting</option>
          </select>
        </>
      )}

      {step === 1 && (
        <>
          <label className="block mb-2 font-medium">Select Date</label>
          <input type="date" name="appointment_date" value={form.appointment_date} onChange={handleChange} className="w-full p-2 border rounded" />

          {availableTimes.length > 0 && (
            <>
              <label className="block mt-4 mb-2 font-medium">Available Times</label>
              <select name="appointment_time" value={form.appointment_time} onChange={handleChange} className="w-full p-2 border rounded">
                <option value="">Select Time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </>
          )}
        </>
      )}

      {step === 2 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="first_name" placeholder="First Name" value={form.first_name} onChange={handleChange} className="p-2 border rounded" />
            <input name="last_name" placeholder="Last Name" value={form.last_name} onChange={handleChange} className="p-2 border rounded" />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="p-2 border rounded" />
            <input name="phone_number" placeholder="Phone Number" value={form.phone_number} onChange={handleChange} className="p-2 border rounded" />
          </div>

          <select name="dna_test" value={form.dna_test} onChange={handleChange} className="w-full mt-4 p-2 border rounded">
            <option value="">Select DNA Test</option>
            <option value="paternity">Paternity</option>
            <option value="immigration">Immigration</option>
            <option value="siblingship">Siblingship</option>
            <option value="grandparentage">Grandparentage</option>
          </select>

          <select name="test_use" value={form.test_use} onChange={handleChange} className="w-full mt-2 p-2 border rounded">
            <option value="">Select Test Use</option>
            <option value="legal">Legal</option>
            <option value="peace_of_mind">Peace of Mind</option>
          </select>

          <input name="participants" placeholder="Who will be present?" value={form.participants} onChange={handleChange} className="w-full mt-2 p-2 border rounded" />

          <select name="language" value={form.language} onChange={handleChange} className="w-full mt-2 p-2 border rounded">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>

          <input name="referral_source" placeholder="How did you hear about us?" value={form.referral_source} onChange={handleChange} className="w-full mt-2 p-2 border rounded" />
        </>
      )}

      {step === 3 && (
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Appointment Confirmed</h3>
          <p>We’ve received your information. You’ll receive a confirmation email shortly.</p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-between">
        {step > 0 && step < 3 && <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded">Back</button>}
        {step < 2 && <button onClick={nextStep} className="px-4 py-2 bg-blue-600 text-white rounded">Next</button>}
        {step === 2 && <button onClick={handleSubmit} className="px-4 py-2 bg-green-600 text-white rounded">Submit</button>}
      </div>
    </div>
  );
}
