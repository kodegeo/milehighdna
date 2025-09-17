import React from 'react';
import { Helmet } from 'react-helmet-async';


console.log('✅ Stripe API URL:', import.meta.env.VITE_API_URL);

const tests = [
  {
    title: 'Prueba de ADN de Paternidad uso Legal',
    price: 349,
    id: 'legal-paternity',
    href: 'https://calendly.com/milehighdnatesting/prueba-legal-paternidad-spanish',
    priceId: 'price_1RJf5QK2515KuCq2ERIuc56P',
  },
  {
    title: 'Prueba de ADN de Paternidad uso Personal',
    price: 199,
    id: 'non-legal-paternity',
    href: 'https://calendly.com/milehighdnatesting/prueba-paternida-no-legal',
    priceId: 'price_1RJf6IK2515KuCq2JBnXBDgO',
  },
  {
    title: 'Prueba de ADN de Abuelidad uso Legal',
    price: 479,
    id: 'legl-grandparentage',
    href: 'https://calendly.com/milehighdnatesting/prueba-abuelidad',
    priceId: 'price_1RjLAbK2515KuCq2Yctrpsbq',
  },
  {
    title: 'Prueba de ADN de Abuelidad uso Personal',
    price: 349,
    id: 'non-legal-grandparentage',
    href: 'https://calendly.com/milehighdnatesting/prueba-abuelidad',
    priceId: 'price_1RJf87K2515KuCq24feeajxY',
  },
  {
    title: 'Prueba de ADN de Hermanos uso legal',
    price: 479,
    id: 'legal-siblingship',
    href: 'https://calendly.com/milehighdnatesting/prueba-hermandad',
    priceId: 'price_1RJf98K2515KuCq2kaCCNIXD',
  },
  {
    title: 'Prueba de ADN de Hermandad para uso Personal',
    price: 329,
    id: 'non-legal-siblingship',
    href: 'https://calendly.com/milehighdnatesting/prueba-hermandad',
    priceId: 'price_1RJfAYK2515KuCq2o3E9ToM5',
  },
  {
    title: 'Prueba Prenatal No Invasiva de Paternidad uso legal',
    price: 1800,
    id: 'legal-prenatal',
    href: 'https://calendly.com/milehighdnatesting/prueba-hermandad',
    priceId: 'price_1RnfPtK2515KuCq2jxu7SPku',
  },
  {
    title: 'Prueba Prenatal No Invasiva de Paternidad para uso Personal',
    price: 1599,
    id: 'non-legal-prenatal',
    href: 'https://calendly.com/milehighdnatesting/prueba-hermandad',
    priceId: 'price_1RnfRCK2515KuCq2Un6d69UF',
  },
];

const BookAppointmentEs = () => {

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
      <Helmet>
        <title>Agende Su Prueba de ADN en Español | Mile High DNA Denver</title>
        <meta 
          name="description" 
          content="Programe en línea su prueba de paternidad, inmigración o familiar. Ofrecemos servicios en español en Denver, Aurora y Lakewood. Pague por adelantado si lo desea." 
        />

        <meta property="og:title" content="Agende Su Cita para Prueba de ADN en Colorado" />
        <meta property="og:description" content="Programe su cita para pruebas de ADN legales, inmigratorias o familiares. Resultados confidenciales y servicio en español. Sirviendo Denver y Colorado." />
        <meta property="og:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
        <meta property="og:url" content="https://milehighdnatesting.com/es/reservar-cita" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://milehighdnatesting.com/images/banner-1200.png" />
      </Helmet>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Agende su Prueba de ADN Legal, de Inmigración o Familiar en Denver</h1>
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
                  href={test.href || "https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700"
                >
                  Programar Cita
                </a>
                {paymentsEnabled && test.price && !test.linkOnly && (
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