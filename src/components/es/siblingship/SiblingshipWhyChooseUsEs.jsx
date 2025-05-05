const SiblingshipWhyChooseUs = () => {
    const benefits = [
      {
        title: 'Laboratorio Acreditado por AABB',
        description:
          'Todas las pruebas de ADN son realizadas por laboratorios acreditados por AABB para garantizar el más alto nivel de precisión legal y científica.',
      },
      {
        title: 'Opciones Legales y No Legales',
        description:
          'Ofrecemos pruebas flexibles tanto para propósitos legales oficiales como para tranquilidad personal — con total claridad en el proceso.',
      },
      {
        title: 'Resultados Rápidos',
        description:
          'Obtenga sus resultados en solo 2–5 días hábiles. Opciones aceleradas están disponibles si necesita respuestas rápidamente.',
      },
      {
        title: 'Personal Experimentado y Comprensivo',
        description:
          'Nuestro equipo bilingüe comprende la importancia emocional y legal de las pruebas de ADN. Estamos aquí para guiarle con cuidado.',
      },
      {
        title: 'Precios Transparentes',
        description:
          'Sin cargos ocultos — nuestros precios incluyen todo, desde la recolección de muestras hasta el análisis de laboratorio y la entrega de resultados.',
      },
      {
        title: 'Seguro y Confidencial',
        description:
          'Respetamos su privacidad. Toda la información se maneja de manera segura y discreta de principio a fin.',
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
  
  export default SiblingshipWhyChooseUs; 