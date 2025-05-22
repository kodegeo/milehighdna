const SiblingshipWhyChooseUs = () => {
    const benefits = [
      {
        title: 'Laboratorio Acreditado por AABB',
        description:
          'Todas nuestras pruebas de ADN se procesan en laboratorios acreditados por la AABB, lo que garantiza el más alto nivel de precisión científica y validez legal.',
      },
      {
        title: 'Opciones Legales y No Legales',
        description:
          'Ofrecemos pruebas flexibles para procesos legales oficiales o simplemente para obtener tranquilidad personal — con total transparencia en cada etapa.',
      },
      {
        title: 'Resultados Rápidos',
        description:
          'Obtén tus resultados en solo 2 a 5 días hábiles. También contamos con opciones urgentes si necesitas respuestas lo antes posible.',
      },
      {
        title: 'Personal con experiencia y trato humano',
        description:
          'Nuestro equipo bilingüe comprende la importancia emocional y legal de cada prueba. Te acompañamos con empatía, respeto y profesionalismo.',
      },
      {
        title: 'Precios claros y sin sorpresas',
        description:
          'Sin tarifas ocultas — nuestros precios incluyen la recolección de muestras, el análisis en laboratorio y la entrega de resultados.',
      },
      {
        title: 'Privacidad y confidencialidad garantizadas',
        description:
          'Respetamos tu privacidad. Toda tu información se maneja con seguridad y discreción de principio a fin.',
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