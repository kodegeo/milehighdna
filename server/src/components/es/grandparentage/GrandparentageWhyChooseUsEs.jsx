const GrandparentageWhyChooseUsEs = () => {
    const reasons = [
      {
        title: 'Laboratorios acreditados por la AABB',
        description:
          'Todas nuestras pruebas se procesan en laboratorios acreditados por la AABB, lo que garantiza cumplimiento legal y precisión al más alto nivel de la industria.',
      },
      {
        title: 'Opciones legales y personales',
        description:
          'Ya sea que necesites resultados para la corte o simplemente tranquilidad personal, ofrecemos pruebas certificadas y no certificadas, según tu situación.',
      },
      {
        title: 'Resultados rápidos',
        description:
          'Recibe resultados precisos en solo 2 a 4 días hábiles. También contamos con opciones urgentes si necesitas respuestas rápidamente.',
      },
      {
        title: 'Atención compasiva',
        description:
          'Sabemos que estas pruebas pueden tener una carga emocional y legal. Nuestro equipo está aquí para acompañarte en cada paso con empatía y profesionalismo.',
      },
      {
        title: 'Precios claros y sin sorpresas',
        description:
          'Sin cargos ocultos. Explicamos con claridad lo que está incluido y ofrecemos apoyo si necesitas documentación para seguros, trámites legales o migratorios.',
      },
      {
        title: 'Privacidad y confidencialidad garantizadas',
        description:
          'Tu información se mantiene protegida y confidencial durante todo el proceso. Nos comprometemos a cuidar tu privacidad.',
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">¿Por qué elegir Mile High DNA Testing?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-left">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="bg-blue-50 p-6 rounded-xl shadow-sm border-l-4 border-blue-600 hover:shadow-md transition"
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
  
  export default GrandparentageWhyChooseUsEs; 