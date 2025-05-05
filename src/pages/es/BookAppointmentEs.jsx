import React from 'react';

console.log('✅ Stripe API URL:', import.meta.env.VITE_API_URL);

const tests = [
  {
    title: 'Prueba de Paternidad Legal',
    price: 349,
    id: 'legal-paternity',
    priceId: 'price_1RJf5QK2515KuCq2ERIuc56P',
  },
  {
    title: 'Prueba de Paternidad No Legal',
    price: 199,
    id: 'non-legal-paternity',
    priceId: 'price_1RJf6IK2515KuCq2JBnXBDgO',
  },
  {
    title: 'Prueba de Abuelidad',
    price: 349,
    id: 'grandparentage',
    priceId: 'price_1RJf87K2515KuCq24feeajxY',
  },
  {
    title: 'Prueba de Hermanos Completos',
    price: 349,
    id: 'full-siblingship',
    priceId: 'price_1RJf98K2515KuCq2kaCCNIXD',
  },
  {
    title: 'Prueba de Hermanos Medio',
    price: 349,
    id: 'half-siblingship',
    priceId: 'price_1RJfAYK2515KuCq2o3E9ToM5',
  },
  {
    title: 'Prueba de Inmigración',
    price: null,
    id: 'immigration',
    linkOnly: true,
  },
  {
    title: 'Prueba de ADN Prenatal',
    price: null,
    id: 'prenatal',
    linkOnly: true,
  },
];

const BookAppointmentEs = () => {
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
                  href="https://calendly.com/your-appointment-link" // Replace with actual Calendly link
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