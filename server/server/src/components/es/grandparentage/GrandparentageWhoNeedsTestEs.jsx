const GrandparentageWhoNeedsTestEs = () => {
    const scenarios = [
      'El padre o madre presunto está ausente, ha fallecido o no desea participar',
      'Un caso legal requiere evidencia de la relación con los abuelos',
      'Buscas tranquilidad sobre tu conexión familiar biológica',
      'Necesitas comprobar el vínculo biológico para un trámite migratorio',
      'Estás gestionando custodia, beneficios o herencia',
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ¿Quién necesita una prueba de ADN con abuelos?          
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          Esta prueba es ideal cuando un padre biológico no está disponible para realizar la prueba, pero aún necesitas establecer una relación genética a través de los abuelos.          
          </p>
  
          <div className="grid gap-4 md:grid-cols-2 text-left max-w-3xl mx-auto">
            {scenarios.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-white"
              >
                <span className="text-blue-600 text-xl mt-1">✓</span>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default GrandparentageWhoNeedsTestEs; 