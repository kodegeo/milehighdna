const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Laboratorio Acreditado por AABB',
      description:
        'Todas las pruebas son procesadas a través de un laboratorio acreditado por AABB, aprobado por USCIS y embajadas de EE.UU. en todo el mundo.',
    },
    {
      title: 'Resultados Rápidos y Confiables',
      description:
        'Los resultados suelen estar disponibles en 2–5 días hábiles después de la recolección. Procesamiento acelerado disponible.',
    },
    {
      title: 'Coordinación Internacional',
      description:
        'Trabajamos directamente con embajadas de EE.UU. y clínicas en el extranjero para coordinar las pruebas para familiares en el extranjero.',
    },
    {
      title: 'Atención Bilingüe (inglés y español)',
      description:
        'Nuestro equipo habla su idioma — ofrecemos soporte completo en inglés y español para hacer el proceso sin estrés.',
    },
    {
      title: 'Proceso Simple y Seguro',
      description:
        'Desde la programación hasta la recolección de muestras y la entrega de resultados, hacemos que el proceso sea fácil y totalmente compatible con las regulaciones de inmigración.',
    },
    
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">¿Por Qué Elegir Mile High DNA Testing?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 