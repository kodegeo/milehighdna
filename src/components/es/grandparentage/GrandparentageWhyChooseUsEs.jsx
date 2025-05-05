const GrandparentageWhyChooseUsEs = () => {
    const reasons = [
      {
        title: 'Laboratorios Acreditados por AABB',
        description:
          'Todas las pruebas se procesan a través de laboratorios acreditados por AABB, garantizando el cumplimiento legal y la precisión líder en la industria.',
      },
      {
        title: 'Opciones Legales y de Tranquilidad Personal',
        description:
          'Ya sea que necesite resultados para tribunales o tranquilidad personal, ofrecemos opciones de pruebas certificadas y no certificadas.',
      },
      {
        title: 'Resultados Rápidos',
        description:
          'Recibirá resultados precisos en 2–4 días hábiles. También ofrecemos opciones aceleradas si el tiempo es crítico.',
      },
      {
        title: 'Apoyo Compasivo',
        description:
          'Nuestro equipo comprende la importancia emocional y legal de estas pruebas. Estamos aquí para guiarle en cada paso del camino.',
      },
      {
        title: 'Precios Claros y Transparentes',
        description:
          'Sin cargos sorpresa. Somos transparentes sobre lo que está incluido y ofrecemos apoyo con documentación de seguros, legal o de inmigración.',
      },
      {
        title: 'Seguro y Confidencial',
        description:
          'Su información se mantiene privada y segura durante todo el proceso. La confidencialidad está garantizada.',
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">¿Por Qué Elegir Mile High DNA Testing?</h2>
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