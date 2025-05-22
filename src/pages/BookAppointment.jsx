import React from 'react';

console.log('✅ Stripe API URL:', import.meta.env.VITE_API_URL);

const tests = [
  {
    title: 'Legal Paternity DNA Test',
    price: 349,
    id: 'legal-paternity',
    priceId: 'price_1RRgsK2Lu8Ikop8F71lMFCvp',
  },
  {
    title: 'Non-Legal Paternity DNA Test',
    price: 199,
    id: 'non-legal-paternity',
    priceId: 'price_1RRgiw2Lu8Ikop8FJdy6lg8r',
  },
  {
    title: 'Grandparentage DNA Test',
    price: 329,
    id: 'grandparentage',
    priceId: 'price_1RRgxT2Lu8Ikop8F9VstMrLC',
  },
  {
    title: 'Full Siblingship DNA Test',
    price: 329,
    id: 'full-siblingship',
    priceId: 'price_1RRgvZ2Lu8Ikop8FbAH5PVev',
  },
  {
    title: 'Half Siblingship DNA Test',
    price: 329,
    id: 'half-siblingship',
    priceId: 'price_1RRgvZ2Lu8Ikop8FbAH5PVev',
  },
  {
    title: 'Immigration Test',
    price: null,
    id: 'immigration',
    linkOnly: true,
  },
];

const BookAppointment = () => {
  const handleStripeCheckout = async (priceId) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/create-checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Failed to redirect to payment.');
      }
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Something went wrong during payment.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Schedule Your DNA Test</h1>
        <p className="mb-4 text-gray-600">All tests require an appointment. You may choose to prepay if you'd like.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white shadow rounded-lg p-6 border border-gray-200 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold text-gray-700 mb-2">{test.title}</h2>
                {test.price ? (
                  <p className="text-gray-800 mb-4">${test.price}</p>
                ) : (
                  <p className="text-gray-500 mb-4">
                    Please schedule a call to receive instructions and pricing.
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://calendly.com/cynthia-milehighdnatesting/30-minute-dna-test-appointment" // Replace with actual Calendly link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700"
                >
                  Schedule Appointment
                </a>
                {test.price && !test.linkOnly && (
                  <button
                    onClick={() => handleStripeCheckout(test.priceId)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Pay ${test.price} Now
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
