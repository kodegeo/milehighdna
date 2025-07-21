import React from 'react';

const services = [
  {
    name: '🧬 Prueba de Paternidad Legal o Informativa',
    description: 'Confirma la paternidad con resultados confidenciales y válidos para uso personal o legal.',
    link: 'https://calendly.com/milehighdnatesting/prueba-legal-paternidad-spanish',
  },
  {
    name: '🌍 Prueba de ADN para Inmigración (USCIS)',
    description: 'Pruebas aprobadas por el USCIS y embajadas para respaldar casos de inmigración.',
    link: 'https://calendly.com/milehighdnatesting/consulta-gratuita',
  },
  {
    name: '👨‍👩‍👧 Prueba de Hermandad',
    description: 'Aclara si dos personas comparten uno o ambos padres. Establece relaciones biológicas entre hermanos completos o medios hermanos. Ideal cuando no se puede probar paternidad directa.',
    link: 'https://calendly.com/milehighdnatesting/prueba-hermandad',
  },
  {
    name: '👵👶 Prueba de Abuelidad',
    description: 'Establece vínculos biológicos entre abuelos y nietos con fines legales o personales.',
    link: 'https://calendly.com/milehighdnatesting/prueba-abuelidad',
  },
];

const ScheduleTestSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-10">
        Agenda tu prueba de AND
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Agenda ahora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTestSection;
