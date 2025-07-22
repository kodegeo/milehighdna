const GrandparentageWhoNeedsTestEs = () => {
    const scenarios = [
      'El presunto padre no está disponible, ha fallecido o no está dispuesto a realizar la prueba',
      'Necesita prueba de relación biológica para fines de inmigración',
      'Un caso legal requiere evidencia de conexión con los abuelos',
      'Está buscando custodia, beneficios o verificación de herencia',
      'Desea tranquilidad sobre su conexión biológica familiar',
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            ¿Quién Necesita la Prueba de ADN de Abuelos?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Esta prueba es ideal para situaciones donde un padre biológico no está disponible para la prueba, pero
            aún necesita establecer una relación genética a través de los abuelos.
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