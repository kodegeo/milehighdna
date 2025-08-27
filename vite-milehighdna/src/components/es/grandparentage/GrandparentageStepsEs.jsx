const GrandparentageStepsEs = () => {
    const steps = [
      {
        number: 1,
        title: 'Agenda tu prueba',
        description:
          'Llámanos o agenda en línea para programar la cita de prueba entre el menor y el(los) abuelo(s). Te ayudaremos a definir la mejor opción según tu situación.',
      },
      {
        number: 2,
        title: 'Recolección de muestras',
        description:
          'Tomamos muestras bucales a todos los participantes en una de nuestras ubicaciones certificadas. En pruebas legales, se mantiene la cadena de custodia.',
      },
      {
        number: 3,
        title: 'Análisis en laboratorio',
        description:
          'Nuestro laboratorio acreditado por la AABB compara los perfiles genéticos para determinar la probabilidad de una relación biológica.',
      },
      {
        number: 4,
        title: 'Recibe tus resultados',
        description:
          'Los resultados están disponibles en un plazo de 7 a 10 días hábiles. Las pruebas legales incluyen documentos notariados y envío directo a la corte si es necesario.',
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Cómo funciona la prueba de ADN con abuelos
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