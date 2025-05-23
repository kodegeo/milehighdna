import React from 'react';

console.log('✅ Stripe API URL:', import.meta.env.VITE_API_URL);

const tests = [
  {
    title: 'Prueba de Paternidad Legal',
    price: 349,
    id: 'legal-paternity',
    priceId: 'price_1RRhLg2Lu8Ikop8FtSTAhWb2',
  },
  {
    title: 'Prueba de Paternidad No Legal',
    price: 199,
    id: 'non-legal-paternity',
    priceId: 'price_1RRhNo2Lu8Ikop8FqNPep5FO',
  },
  {
    title: 'Prueba de Abuelidad',
    price: 349,
    id: 'grandparentage',
    priceId: 'price_1RRhPa2Lu8Ikop8FhD6tgEM7',
  },
  {
    title: 'Prueba de Hermanos Completos',
    price: 329,
    id: 'full-siblingship',
    priceId: 'price_1RRhQk2Lu8Ikop8FPInX76mE',
  },
  {
    title: 'Prueba de Hermanos Medio',
    price: 329,
    id: 'half-siblingship',
    priceId: 'price_1RRhQk2Lu8Ikop8FPInX76mE',
  },
  {
    title: 'Prueba de Inmigración',
    price: null,
    id: 'immigration',
    linkOnly: true,
  },
];

const BookAppointmentEs = () => {

  const paymentsEnabled = import.meta.env.VITE_PAYMENTS_ENABLED === 'true';

  return (
    paymentsEnabled ? <PayNowButton /> : <p>Payments coming soon.</p>
  );

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
        alert('Error al redirigir al pago.');
      }
    } catch (err) {
      console.error('Error en el pago:', err);
      alert('Algo salió mal durante el pago.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Programe Su Prueba de ADN</h1>
        <p className="mb-4 text-gray-600">Todas las pruebas requieren una cita. Puede elegir pagar por adelantado si lo desea.</p>

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
                    Por favor, programe una llamada para recibir instrucciones y precios.
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
                  Programar Cita
                </a>
                {test.price && !test.linkOnly && (
                  <button
                    onClick={() => handleStripeCheckout(test.priceId)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Pagar ${test.price} Ahora
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

export default BookAppointmentEs; 