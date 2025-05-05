const GrandparentageStepsEs = () => {
    const steps = [
      {
        number: 1,
        title: 'Programe su Prueba',
        description:
          'Llámenos o reserve en línea para programar una cita de prueba para los abuelos y el niño. Confirmaremos la configuración que mejor se adapte a su situación.',
      },
      {
        number: 2,
        title: 'Recolección de Muestras',
        description:
          'Recolectamos muestras de mejilla de todos los participantes en una de nuestras ubicaciones certificadas. Se mantiene la cadena de custodia para casos legales.',
      },
      {
        number: 3,
        title: 'Análisis de Laboratorio',
        description:
          'Nuestro laboratorio acreditado por AABB compara los perfiles de ADN para determinar la probabilidad de una relación biológica.',
      },
      {
        number: 4,
        title: 'Reciba sus Resultados',
        description:
          'Los resultados están disponibles típicamente en 2–4 días hábiles. Los resultados de pruebas legales incluyen documentos notariados y presentación directa al tribunal si se solicita.',
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Cómo Funciona la Prueba de ADN de Abuelos
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl font-bold text-blue-600">{step.number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default GrandparentageStepsEs; 