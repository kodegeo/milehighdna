const SiblingshipWhenToUseEs = () => {
    const useCases = [
      'Un padre biológico está ausente, ha fallecido o no desea participar en la prueba',
      'Estás involucrado en un caso de herencia, custodia o beneficios',
      'Necesitas comprobar la relación entre hermanos para un trámite migratorio',
      'Quieres confirmar si son hermanos completos o medios hermanos',
      'Buscas tranquilidad y claridad sobre tu conexión biológica',
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
          ¿Quién Debería Considerar una Prueba de ADN de Hermanos?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
          La prueba de hermandad es una opción útil cuando existen dudas sobre el vínculo biológico — ya sea por la ausencia de los padres, disputas legales o para obtener claridad familiar.          </p>
          <div className="grid gap-4 md:grid-cols-2 text-left max-w-3xl mx-auto">
            {useCases.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition bg-blue-50"
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
  
  export default SiblingshipWhenToUseEs; 