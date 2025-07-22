const SiblingshipSteps = () => {
    const steps = [
      {
        number: 1,
        title: 'Programe su Cita',
        description:
          'Llámenos o reserve en línea para programar su prueba. Le guiaremos durante el proceso y responderemos cualquier pregunta sobre su caso.',
      },
      {
        number: 2,
        title: 'Recolección de Muestras',
        description:
          'Recolectamos muestras de mejilla de todos los participantes en nuestro sitio certificado de recolección. Las pruebas legales siguen estrictos procedimientos de cadena de custodia.',
      },
      {
        number: 3,
        title: 'Análisis de Laboratorio',
        description:
          'Nuestro laboratorio acreditado por AABB compara los perfiles de ADN para determinar si los individuos son hermanos completos o medios hermanos.',
      },
      {
        number: 4,
        title: 'Reciba los Resultados',
        description:
          'Los resultados están listos en 2–5 días hábiles. Las pruebas legales incluyen documentación notariada apta para uso en tribunales o inmigración.',
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