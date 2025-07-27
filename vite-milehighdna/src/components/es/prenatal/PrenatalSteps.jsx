const PrenatalSteps = () => {
  const steps = [
    {
      number: 1,
      title: 'Programar Su Cita',
      description:
        'Llama a nosotros o reserve en línea para programar su prueba de ADN prenatal. Explicaremos el proceso, responderemos preguntas y coordinaremos la recolección para ambos padres.',
    },
    {
      number: 2,
      title: 'Recolección de muestras',
      description:
        'La madre embarazada tendrá un simple dibujo de sangre en un sitio de recolección certificado. El presunto padre proporcionará un simple hisopo bucal en nuestra oficina.',
    },
    {
      number: 3,
      title: 'Análisis de laboratorio',
      description:
        'Nuestro laboratorio acreditado por la AABB extrae y compara el ADN fetal de la sangre de la madre con el perfil de ADN del presunto padre para determinar la paternidad con más del 99.9% de precisión.',
    },
    {
      number: 4,
      title: 'Recibir Resultados',
      description:
        'Los resultados están normalmente disponibles en 7 a 10 días hábiles. Las pruebas legales incluyen documentación notarial adecuada para el tribunal, inmigración o uso personal.',
    },
  ];
  
  
    return (
      <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Cómo funciona la prueba de ADN prenatal
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
  
  export default PrenatalSteps;
  