const SiblingshipSteps = () => {
    const steps = [
      {
        number: 1,
        title: 'Agenda tu cita',
        description:
          'Llámanos o agenda en línea para programar tu prueba. Te guiaremos en todo el proceso y responderemos cualquier pregunta sobre tu caso.',
      },
      {
        number: 2,
        title: 'Recolección de muestras',
        description:
          'Tomamos muestras con hisopos bucales de todos los participantes en nuestro centro autorizado. Las pruebas legales siguen protocolos estrictos de cadena de custodia.',
      },
      {
        number: 3,
        title: 'Análisis en laboratorio',
        description:
          'Nuestro laboratorio acreditado por la AABB compara los perfiles de ADN para determinar si los participantes son hermanos completos o medios hermanos.',
      },
      {
        number: 4,
        title: 'Recibe tus resultados',
        description:
        'Los resultados estarán listos en 2 a 5 días hábiles. Las pruebas legales incluyen documentación notariada válida para procesos judiciales o migratorios.'
      },
    ];
  
    return (
      <section className="bg-blue-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Cómo Funciona la Prueba de ADN de Hermanos
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition"
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
  
  export default SiblingshipSteps; 