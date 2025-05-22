const WhoNeedsTestEs = () => {
    const relationships = [
      'Padre / Hijo',
      'Hermanos',
      'Abuelo / Nieto',
      'Tío / Tía y Sobrino / Sobrina',
      'Otros Parientes Biológicos (caso por caso)',
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ¿Quién Necesita la Prueba de ADN para Inmigración?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            La prueba de ADN para inmigración generalmente se requiere cuando es necesario demostrar una relación biológica para una petición de visa o residencia. Esto se utiliza a menudo cuando los documentos no están disponibles, están incompletos o son cuestionados por las autoridades de inmigración.
          </p>
  
          <div className="grid gap-4 md:grid-cols-2 text-left max-w-xl mx-auto">
            {relationships.map((relation, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              >
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-gray-700 font-medium">{relation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default WhoNeedsTestEs; 