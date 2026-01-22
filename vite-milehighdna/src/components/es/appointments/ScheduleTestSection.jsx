import React from 'react';

const services = [
  {
    name: 'Prueba de Paternidad Legal',
    description: 'Confirma la paternidad con resultados confidenciales y válidos para uso legal.',
    link: 'https://calendly.com/milehighdnatesting/prueba-legal-paternidad-spanish',
  },
  {
    name: 'Prueba de Paternidad Informativa',
    description: 'Confirma la paternidad con resultados confidenciales y válidos para uso personal.',
    link: 'https://calendly.com/milehighdnatesting/prueba-legal-paternidad-spanish',
  },
  {
    name: 'Prueba de Paternidad Prenatal Legal',
    description: 'Verifica la paternidad temprana en el embarazo para fines legales.',
    link: 'https://calendly.com/milehighdnatesting/prueba-legal-de-paternidad-clone',
  },
  {
    name: 'Prueba de Paternidad Prenatal Informativa',
    description: 'Verifica la paternidad temprana en el embarazo para tranquilidad personal.',
    link: 'https://calendly.com/milehighdnatesting/prueba-legal-de-paternidad-clone',
  },
  {
    name: 'Prueba de Hermandad',
    description: 'Aclara si dos personas comparten uno o ambos padres. Establece relaciones biológicas entre hermanos completos o medios hermanos. Ideal cuando no se puede probar paternidad directa.',
    link: 'https://calendly.com/milehighdnatesting/prueba-hermandad',
  },
  {
    name: 'Prueba de Abuelidad',
    description: 'Establece vínculos biológicos entre abuelos y nietos con fines legales o personales.',
    link: 'https://calendly.com/milehighdnatesting/prueba-abuelidad',
  },
  {
    name: 'Prueba de ADN Avuncular (Tía / Tío)',
    description: 'La prueba de ADN avuncular ayuda a determinar una relación biológica entre un niño y una tía o tío presunto cuando un padre no está disponible para la prueba. Esta opción se usa comúnmente cuando una madre o padre no puede participar pero los miembros de la familia extendida están disponibles.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Prueba de ADN por Infidelidad',
    description: 'La prueba de ADN por infidelidad proporciona un análisis discreto utilizando artículos personales o muestras de ADN para ayudar a confirmar o excluir relaciones biológicas. Esta prueba se realiza con estricta confidencialidad y sensibilidad, lo que la hace adecuada para situaciones de uso privado, no judicial.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Prueba de ADN para Inmigración (Laboratorio Acreditado por AABB)',
    description: 'Esta cita inicia una prueba de ADN para inmigración compatible con USCIS a través de un laboratorio acreditado por AABB. Incluye coordinación de requisitos del caso, orientación sobre documentación y procedimientos adecuados de recolección de muestras requeridos para casos de inmigración.',
    link: 'https://calendly.com/milehighdnatesting/immigration',
  },
  {
    name: 'Revelación de Género Peek-A-Boo',
    description: 'La prueba de ADN Peek-A-Boo para revelación de género permite conocer el sexo del bebé desde las 6 semanas de embarazo mediante una simple muestra de sangre materna. Esta prueba de ADN temprana ofrece resultados rápidos y confiables. Agenda una cita para revelación de género en Denver.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Prueba de ADN de Cigocidad de Gemelos',
    description: 'La prueba de ADN de cigocidad de gemelos determina si los gemelos son idénticos o fraternos mediante un análisis genético preciso. Esta prueba se utiliza para fines médicos, personales o familiares. Agenda una cita para confirmar la cigocidad de gemelos con ADN.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Prueba de ADN Y-STR (Línea Paterna)',
    description: 'La prueba de ADN Y-STR analiza el cromosoma Y masculino para establecer linaje paterno y ascendencia compartida. Esta prueba es común en estudios genealógicos y análisis de parentesco paterno. Agenda una cita para explorar tu linaje genético paterno.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Prueba de ADN Mitocondrial (Línea Materna)',
    description: 'La prueba de ADN mitocondrial (mtDNA) rastrea la ascendencia materna a través de la línea materna directa. Es útil cuando no hay familiares maternos cercanos disponibles. Agenda una cita para explorar tu linaje genético materno.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Prueba de ADN por Infidelidad (Artículos Personales)',
    description: 'La prueba de ADN por infidelidad permite un análisis genético discreto utilizando artículos personales o muestras enviadas. Esta prueba está diseñada para uso personal y confidencial. Agenda una cita para pruebas de ADN privadas.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Pruebas de ADN de Estilo de Vida y Ancestría',
    description: 'Las pruebas de ADN de estilo de vida y ancestría brindan información genética relacionada con bienestar, rasgos y orígenes ancestrales. Estas pruebas ayudan a comprender tu genética más allá de la paternidad. Agenda una cita para conocer tus resultados genéticos.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Prueba de ADN para Peso Saludable',
    description: 'La prueba de ADN para peso saludable analiza factores genéticos relacionados con metabolismo, dieta y ejercicio. Esta prueba ayuda a personalizar estrategias de bienestar basadas en tu ADN. Agenda una cita para apoyar tus objetivos de salud.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Prueba de ADN de Orígenes GPS',
    description: 'La prueba de ADN de Orígenes GPS ofrece información detallada sobre ascendencia y orígenes geográficos genéticos. Es ideal para quienes desean profundizar en su historia genética. Agenda una cita para descubrir tus orígenes.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
  },
  {
    name: 'Kits de ADN para el Hogar (Postnatal)',
    description: 'Los kits de ADN para el hogar ofrecen una opción conveniente de pruebas postnatales no legales con la misma precisión de laboratorio. Todas las muestras se procesan en un laboratorio acreditado por AABB y se envían de forma segura. Agenda una cita para ordenar tu kit de ADN en casa.',
    link: 'https://calendly.com/milehighdnatesting/30-minute-dna-test-appointment',
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
                Reservar Cita
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTestSection;
