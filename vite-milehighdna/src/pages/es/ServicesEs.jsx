import React from 'react';
import { Link } from 'react-router-dom';

const ServicesEs = () => {
  const services = [
    {
      title: 'Pruebas de Paternidad',
      description: 'Nuestros servicios de pruebas de paternidad proporcionan resultados precisos y confidenciales para establecer relaciones biológicas entre padres e hijos. Ofrecemos opciones tanto legales como para tranquilidad personal.',
      features: [
        '99.9% de precisión',
        'Resultados en 2-5 días hábiles',
        'Laboratorio acreditado por AABB',
        'Resultados admisibles en tribunales',
        'Proceso confidencial y seguro'
      ],
      price: 'Desde $299'
    },
    {
      title: 'Pruebas de Maternidad',
      description: 'Las pruebas de maternidad ayudan a establecer la relación biológica entre una madre y su hijo. Este servicio se utiliza a menudo en casos de adopción, inmigración o para tranquilidad personal.',
      features: [
        'Métodos de prueba no invasivos',
        'Resultados precisos en 2-5 días hábiles',
        'Laboratorio acreditado por AABB',
        'Documentación legal disponible',
        'Recolección profesional de muestras'
      ],
      price: 'Desde $299'
    },
    {
      title: 'Pruebas de Hermanos',
      description: 'Las pruebas de ADN entre hermanos determinan la probabilidad de una relación biológica. Esta prueba es útil para casos de herencia, inmigración o conocimiento personal.',
      features: [
        'Pruebas de hermanos completos y medios disponibles',
        'Resultados en 3-5 días hábiles',
        'Laboratorio acreditado por AABB',
        'Documentación legal disponible',
        'Resultados confidenciales'
      ],
      price: 'Desde $399'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Nuestros Servicios de Pruebas de ADN</h1>
        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Servicios profesionales, confidenciales y precisos de pruebas de ADN para familias en Colorado
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-xl font-bold text-blue-600 mb-6">{service.price}</div>
                <Link
                  to="/appointments"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition duration-300"
                >
                  Reservar Ahora
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">¿Por Qué Elegir Mile High DNA Testing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Servicio Profesional</h3>
              <p className="text-gray-600 mb-4">
                Nuestro equipo de profesionales certificados garantiza pruebas precisas y confidenciales con la documentación adecuada de la cadena de custodia.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Resultados Rápidos</h3>
              <p className="text-gray-600 mb-4">
                Proporcionamos tiempos de respuesta rápidos sin comprometer la precisión, con la mayoría de los resultados disponibles en 2-5 días hábiles.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Acreditado por AABB</h3>
              <p className="text-gray-600 mb-4">
                Nuestro laboratorio está acreditado por AABB, garantizando los más altos estándares de calidad y precisión en las pruebas de ADN.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Proceso Confidencial</h3>
              <p className="text-gray-600 mb-4">
                Su privacidad es nuestra prioridad. Todas las pruebas se realizan con estricta confidencialidad y manejo seguro de muestras y resultados.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Contáctenos para Más Información
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesEs; 