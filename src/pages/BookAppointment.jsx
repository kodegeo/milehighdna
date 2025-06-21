import React from 'react';
import { Helmet } from 'react-helmet-async';


console.log('✅ Stripe API URL:', import.meta.env.VITE_API_URL);

const tests = [
  {
    title: 'Legal Paternity DNA Test',
    price: 349,
    id: 'legal-paternity',
    priceId: 'price_1RS2xORtZv9QBc8oLZijQohU',
  },
  {
    title: 'Non-Legal Paternity DNA Test',
    price: 199,
    id: 'non-legal-paternity',
    priceId: 'price_1RS2y0RtZv9QBc8oQ9tSrNo7',
  },
  {
    title: 'Grandparentage DNA Test',
    price: 329,
    id: 'grandparentage',
    priceId: 'price_1RS2vtRtZv9QBc8o5M8uYaG2',
  },
  {
    title: 'Full Siblingship DNA Test',
    price: 329,
    id: 'full-siblingship',
    priceId: 'price_1RS2wmRtZv9QBc8ox5EAyusG',
  },
  {
    title: 'Half Siblingship DNA Test',
    price: 329,
    id: 'half-siblingship',
    priceId: 'price_1RS2wmRtZv9QBc8ox5EAyusG',
  },
  {
    title: 'Immigration Test',
    price: null,
    id: 'immigration',
    linkOnly: true,
  },
];

const BookAppointment = () => {

  const paymentsEnabled = import.meta.env.VITE_PAYMENTS_ENABLED === 'true';

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

    <Helmet>
      <title>Book DNA Test Appointment | Schedule Paternity & Immigration Testing</title>
      <meta 
        name="description" 
        content="Book your legal, paternity, or immigration DNA test in Denver, Aurora, or Lakewood. Schedule online and prepay securely. AABB-accredited results accepted by courts and USCIS." 
      />

      <meta property="og:title" content="Book Your DNA Test in Denver | Legal & Immigration Testing" />
      <meta property="og:description" content="Schedule same-day or future DNA testing appointments. Prepay online for legal and AABB-accredited paternity, sibling, or immigration tests." />
      <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      <meta property="og:url" content="https://milehighdnatesting.com/book-appointment" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
    </Helmet>

      <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Book Your DNA Testing Appointment in Denver, Aurora, or Lakewood
        </h1>
        <p className="mb-4 text-gray-600">
        Schedule a DNA test appointment online and choose to prepay securely. We offer legal, immigration, paternity, and relationship DNA testing in Denver, Aurora, Lakewood, and surrounding Colorado communities.
        </p>

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
                  href="https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment" // Replace with actual Calendly link
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
